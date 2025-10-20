/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate URL format
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate username (alphanumeric, underscores, hyphens, 3-20 chars)
 */
export const isValidUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
  return usernameRegex.test(username);
};

/**
 * Validate password strength (min 8 chars, at least one letter and one number)
 */
export const isValidPassword = (password: string): boolean => {
  if (password.length < 8) return false;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  return hasLetter && hasNumber;
};

/**
 * Check if content is empty (accounting for HTML tags)
 */
export const isEmptyContent = (content: string): boolean => {
  const strippedContent = content.replace(/<[^>]*>/g, '').trim();
  return strippedContent.length === 0;
};
