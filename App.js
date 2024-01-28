import React from "react";
import * as eva from "@eva-design/eva";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AppNavigator from "./src/Navigator";
import { default as appTheme } from "./src/theme.json";
import { ThemeContext } from "./src/theme-context";

export default () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={{ ...eva[theme], ...appTheme }}>
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  )
};
