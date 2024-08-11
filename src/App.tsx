import React, {useEffect} from 'react';
import {Card, Container, CssBaseline, ThemeProvider} from '@mui/material';
import theme from "./theme";
import AppHead from "./AppHead";
import AppBody from "./AppBody";
import {useStationStore} from "./stores/stationStore";
import Toaster from "./components/Toaster";

const App: React.FC = () => {

    const { fetchStations } = useStationStore();

    useEffect(() => {
        fetchStations();  // Fetch data when the component mounts
    }, [fetchStations]);

      return (
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Container>
                  <Card>
                      <AppHead />
                      <AppBody />
                  </Card>
              </Container>
              <Toaster />
          </ThemeProvider>
      );
}

export default App;
