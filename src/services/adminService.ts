// Simple admin authentication
const ADMIN_KEY = 'fundraising_admin_2025'; // You can change this to any secret key you want

export const isAdmin = (): boolean => {
  return localStorage.getItem('admin_authenticated') === ADMIN_KEY;
};

export const authenticateAdmin = (password: string): boolean => {
  // You can change this password to whatever you want
  const ADMIN_PASSWORD = 'admin123'; // Change this to your preferred password
  
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem('admin_authenticated', ADMIN_KEY);
    return true;
  }
  return false;
};

export const logoutAdmin = (): void => {
  localStorage.removeItem('admin_authenticated');
};

// Check if current session is from a shared link
export const isSharedSession = (): boolean => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.has('sharedBy') || urlParams.has('title');
};