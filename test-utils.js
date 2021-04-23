import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, theme } from "theme";

const WrapperApp = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: WrapperApp, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
