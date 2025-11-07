import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

const ThemeSwitcher = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }

    // Clean up by removing classes on component unmount
    return () => {
      document.body.classList.remove('dark-theme', 'light-theme');
    };
  }, [isDarkTheme]);

  return (
    <Form.Check
      type="switch"
      id="theme-switch"
      checked={isDarkTheme}
      onChange={handleToggle}
    />
  );
};

export default ThemeSwitcher;
