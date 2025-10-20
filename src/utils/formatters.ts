import { format, formatDistanceToNow } from 'date-fns';

/**
 * Format a date to a readable string
 */
export const formatDate = (date: string | Date, formatStr: string = 'MMM dd, yyyy'): string => {
  try {
    return format(new Date(date), formatStr);
  } catch {
    return 'Invalid date';
  }
};

/**
 * Format a date to relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date: string | Date): string => {
  try {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
  } catch {
    return 'Invalid date';
  }
};

/**
 * Format reading time in minutes
 */
export const formatReadingTime = (minutes?: number): string => {
  if (!minutes) return 'Less than 1 min read';
  if (minutes === 1) return '1 min read';
  return `${minutes} min read`;
};

/**
 * Format view count with abbreviations (1.2K, 1.5M, etc.)
 */
export const formatViewCount = (count: number): string => {
  if (count < 1000) return count.toString();
  if (count < 1000000) return `${(count / 1000).toFixed(1)}K`;
  return `${(count / 1000000).toFixed(1)}M`;
};

/**
 * Truncate text to a specified length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Generate a slug from a string
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

/**
 * Get initials from a name
 */
export const getInitials = (name?: string): string => {
  if (!name) return '?';
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

/**
 * Format file size in bytes to human readable format
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
};

/**
 * Calculate estimated reading time based on word count
 */
export const calculateReadingTime = (content: string, wordsPerMinute: number = 200): number => {
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};
