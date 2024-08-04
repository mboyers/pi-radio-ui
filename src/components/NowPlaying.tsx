
import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import axios from "axios";

const NowPlaying: React.FC = () => {

    const [station, setStation] = useState<string | null>(null);
    const [song, setSong] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/nowPlaying/current');
            console.log(response);
            setStation(response.data.station);
            setSong(response.data.song);
        } catch (err) {
            // setError('Failed to fetch data');
        } finally {
            // setLoading(false);
        }
    };

    return (
        <Container>
            <Box display="flex" alignItems="center">
                <Typography variant="h4" color="primary" style={{ marginRight: '8px' }}>
                    Station:
                </Typography>
                <Typography variant="h4">
                    {station}
                </Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Typography variant="h4" color="secondary" style={{ marginRight: '8px' }}>
                    Song:
                </Typography>
                <Typography variant="h5">
                    {song}
                </Typography>
            </Box>

            <Button variant="contained" color="primary" onClick={fetchData}>
                <RefreshIcon />
            </Button>
        </Container>
    );
}

export default NowPlaying;
