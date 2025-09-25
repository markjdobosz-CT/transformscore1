import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Share2, Copy, Check, ExternalLink } from 'lucide-react';
import { generateShareUrl } from '../services/shareService';
import { useToast } from '../hooks/use-toast';

const ShareAssessment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sharedBy, setSharedBy] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerateUrl = () => {
    const url = generateShareUrl(
      'Fundraising Assessment',
      'Take this assessment to evaluate your fundraising approach and get personalized recommendations.',
      sharedBy || undefined
    );
    setShareUrl(url);
    
    toast({
      title: "Share link created!",
      description: "Your assessment link is ready to share.",
    });
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The share link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopied(true);
      toast({
        title: "Link copied!",
        description: "The share link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleQuickShare = () => {
    const simpleUrl = `${window.location.origin}/`;
    navigator.clipboard.writeText(simpleUrl).then(() => {
      toast({
        title: "Link copied!",
        description: "Assessment link copied to clipboard.",
      });
    }).catch(() => {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = simpleUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      toast({
        title: "Link copied!",
        description: "Assessment link copied to clipboard.",
      });
    });
  };

  const resetForm = () => {
    setShareUrl('');
    setCopied(false);
    setSharedBy('');
  };

  return (
    <div className="flex gap-2">
      {/* Quick Share Button */}
      <Button 
        variant="outline" 
        size="sm"
        onClick={handleQuickShare}
        className="gap-2"
      >
        <ExternalLink className="h-4 w-4" />
        Quick Share
      </Button>

      {/* Custom Share Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) resetForm();
      }}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Custom Share
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share Assessment</DialogTitle>
            <DialogDescription>
              Create a personalized link to share this assessment.
            </DialogDescription>
          </DialogHeader>
          
          {!shareUrl ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sharedBy">Your Name (Optional)</Label>
                <Input
                  id="sharedBy"
                  value={sharedBy}
                  onChange={(e) => setSharedBy(e.target.value)}
                  placeholder="Enter your name"
                />
                <p className="text-xs text-muted-foreground">
                  This will show "Shared by [Your Name]" on the home page
                </p>
              </div>
              
              <Button onClick={handleGenerateUrl} className="w-full">
                Generate Share Link
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-green-600" />
                    Link Ready to Share!
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Input
                      value={shareUrl}
                      readOnly
                      className="flex-1 text-sm"
                    />
                    <Button
                      size="sm"
                      onClick={handleCopyUrl}
                      className="shrink-0"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    Recipients will see the home page with your personalized message
                  </div>
                </CardContent>
              </Card>
              
              <Button onClick={resetForm} variant="outline" className="w-full">
                Create Another Link
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShareAssessment;