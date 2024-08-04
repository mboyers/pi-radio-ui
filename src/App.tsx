// src/App.tsx

import React from 'react';
import {Container, CssBaseline, ThemeProvider} from '@mui/material';
import NowPlaying from "./components/NowPlaying";
import theme from "./theme";
import StationChooser from "./components/StationChooser";

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
              <NowPlaying />
              <StationChooser />
          </Container>
      </ThemeProvider>
  );
}

export default App;
