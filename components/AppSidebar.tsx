import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Heart, Home, ClipboardList, BarChart3, BookOpen, TrendingUp, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { isAdmin, logoutAdmin, isSharedSession } from '../services/adminService';
import AdminLogin from './AdminLogin';

export function AppSidebar() {
  const location = useLocation();
  const [showAdmin, setShowAdmin] = useState(false);
  const [isShared, setIsShared] = useState(false);
  
  const menuItems = [
    { title: 'Home', icon: Home, href: '/' },
    { title: 'Assessment', icon: ClipboardList, href: '/assessment' },
    { title: 'Results', icon: BarChart3, href: '/results' },
    { title: 'Resources', icon: BookOpen, href: '/resources' },
  ];

  const adminItems = [
    { title: 'Analytics', icon: TrendingUp, href: '/analytics' },
  ];

  useEffect(() => {
    setShowAdmin(isAdmin());
    setIsShared(isSharedSession());
  }, [location]);

  const handleAdminAuthenticated = () => {
    setShowAdmin(true);
  };

  const handleLogout = () => {
    logoutAdmin();
    setShowAdmin(false);
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-3 px-4 py-4">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
            <Heart className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold">Fundraising</h1>
            <p className="text-sm text-muted-foreground">Assessment Pro</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.href}>
                    <Link to={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Admin Section - Only show if authenticated and not a shared session */}
        {!isShared && (
          <>
            {showAdmin ? (
              <SidebarGroup>
                <SidebarGroupLabel>Admin</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {adminItems.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton asChild isActive={location.pathname === item.href}>
                          <Link to={item.href}>
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ) : (
              <SidebarGroup>
                <SidebarGroupContent>
                  <div className="px-2">
                    <AdminLogin onAuthenticated={handleAdminAuthenticated} />
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            )}
          </>
        )}
      </SidebarContent>
      
      {/* Admin Logout */}
      {showAdmin && !isShared && (
        <SidebarFooter className="border-t">
          <div className="px-2 py-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="w-full justify-start gap-2 text-muted-foreground"
            >
              <LogOut className="h-3 w-3" />
              Logout Admin
            </Button>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}