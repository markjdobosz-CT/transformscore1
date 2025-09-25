// Simple sharing system using URL parameters
export const generateShareUrl = (
  title?: string,
  description?: string,
  sharedBy?: string
): string => {
  const baseUrl = window.location.origin;
  const params = new URLSearchParams();
  
  if (title) params.set('title', title);
  if (description) params.set('description', description);
  if (sharedBy) params.set('sharedBy', sharedBy);
  
  const queryString = params.toString();
  return `${baseUrl}/${queryString ? `?${queryString}` : ''}`;
};

export const getShareParams = (): {
  title?: string;
  description?: string;
  sharedBy?: string;
} => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    title: urlParams.get('title') || undefined,
    description: urlParams.get('description') || undefined,
    sharedBy: urlParams.get('sharedBy') || undefined,
  };
};