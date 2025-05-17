import React from 'react';
import { Switch, Tooltip } from '@heroui/react';
import { useTheme } from '@heroui/use-theme';
import { Icon } from '@iconify/react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Tooltip content={`Switch to ${isDark ? 'light' : 'dark'} mode`} placement="bottom">
      <div className="flex items-center theme-toggle-area">
        <Switch
          isSelected={isDark}
          onValueChange={handleToggle}
          size="sm"
          color="primary"
          startContent={<Icon icon="lucide:sun" className={`text-sm ${!isDark ? 'text-primary' : 'text-foreground/70'}`} />}
          endContent={<Icon icon="lucide:moon" className={`text-sm ${isDark ? 'text-primary' : 'text-foreground/70'}`} />}
        />
      </div>
    </Tooltip>
  );
};