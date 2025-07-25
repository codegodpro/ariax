
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Icon from '@/components/AppIcon';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return 'Sun';
      case 'dark':
        return 'Moon';
      default:
        return 'Monitor';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-background/80 hover:bg-accent hover:text-accent-foreground transition-colors duration-200 border border-border"
      title={`Current theme: ${theme}`}
    >
      <Icon name={getIcon()} size={20} className="text-white dark:text-neutral-300" />
    </button>
  );
};

export default ThemeToggle;
