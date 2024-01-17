import React from "react";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./src/navigator";
import { default as appTheme } from "./theme.json";

export default () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...appTheme }}>
      <AppNavigator />
    </ApplicationProvider>
  </React.Fragment>
);
