import React, { useState } from 'react';

const lightTheme = {
  background: '#EEEEEE',
};

const darkTheme = {
  background: '#777777',
};

const ThemeContext = React.createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  return <ThemeContext.Provider value={[theme]}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;

export { ThemeProvider, lightTheme, darkTheme };
