import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';
import { authenticateAdmin } from '../services/adminService';
import { useToast } from '../hooks/use-toast';

interface AdminLoginProps {
  onAuthenticated: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    setLoading(true);
    
    if (authenticateAdmin(password)) {
      toast({
        title: "Access granted",
        description: "Welcome to the admin dashboard.",
      });
      setIsOpen(false);
      setPassword('');
      onAuthenticated();
    } else {
      toast({
        title: "Access denied",
        description: "Incorrect password.",
        variant: "destructive",
      });
    }
    
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
          <Lock className="h-3 w-3" />
          Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Admin Access</DialogTitle>
          <DialogDescription>
            Enter the admin password to access analytics.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter admin password"
              disabled={loading}
            />
          </div>
          
          <Button 
            onClick={handleLogin} 
            className="w-full"
            disabled={!password || loading}
          >
            {loading ? 'Authenticating...' : 'Access Admin'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLogin;