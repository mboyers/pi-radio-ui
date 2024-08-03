// src/App.tsx

import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
      <Container>
        <Typography variant="h1" gutterBottom>
          Welcome to My MUI + TypeScript App!
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </Container>
  );
}

export default App;
