import React from 'react';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import theme from "./theme";
import AppHead from "./AppHead";
import AppBody from "./AppBody";

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
              <AppHead />
              <AppBody />
          </Container>
      </ThemeProvider>
  );
}

export default App;
