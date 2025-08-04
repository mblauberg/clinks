/**
 * Clinks - Nightlife Venue Discovery App
 * Main application entry point that sets up the UI theme, navigation, and core providers
 */

import React from "react";
import * as eva from "@eva-design/eva";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AppNavigator from "./src/Navigator";
import { default as appTheme } from "./src/theme.json";
import { ThemeContext } from "./src/theme-context";

/**
 * Main App Component
 * Provides theme context, UI Kitten components, and navigation structure
 * @returns {React.Component} The root application component
 */
const App = () => {
  const [theme, setTheme] = React.useState('light');

  /**
   * Toggles between light and dark theme
   */
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
  );
};

export default App;
