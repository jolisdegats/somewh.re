const useIsDarkMode = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  return document.documentElement.classList.contains('dark');
};

export default useIsDarkMode;
