// src/App.tsx

import React from 'react';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import NowPlaying from "./components/NowPlaying";
import theme from "./theme";

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
              <NowPlaying />
          </Container>
      </ThemeProvider>
  );
}

export default App;
