import React from 'react';
import {Card, CardContent, Container, CssBaseline, ThemeProvider} from '@mui/material';
import theme from "./theme";
import AppHead from "./AppHead";
import AppBody from "./AppBody";

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
              <Card>
                  <AppHead />
                  <CardContent>
                      <AppBody />
                  </CardContent>
              </Card>
          </Container>
      </ThemeProvider>
  );
}

export default App;
