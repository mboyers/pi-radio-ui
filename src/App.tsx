import React, {useEffect} from 'react';
import {Card, CardContent, Container, CssBaseline, ThemeProvider} from '@mui/material';
import theme from "./theme";
import AppHead from "./AppHead";
import AppBody from "./AppBody";
import {useStationStore} from "./stores/stationStore";

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
                      <CardContent>
                          <AppBody />
                      </CardContent>
                  </Card>
              </Container>
          </ThemeProvider>
      );
}

export default App;
