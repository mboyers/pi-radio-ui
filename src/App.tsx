// src/App.tsx

import React from 'react';
import {Container} from '@mui/material';
import NowPlaying from "./components/NowPlaying";

const App: React.FC = () => {
  return (
      <Container>
          <NowPlaying/>
      </Container>
  );
}

export default App;
