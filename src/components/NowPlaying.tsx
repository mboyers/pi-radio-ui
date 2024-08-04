
import React, {useEffect, useState} from 'react';
import { Button, Container, Typography } from '@mui/material';
import api from "../service/Api";
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
            <Typography variant="h1" gutterBottom>
                {station} {song}
            </Typography>
            <Button variant="contained" color="primary" onClick={fetchData}>
                Refresh
            </Button>
        </Container>
    );
}

export default NowPlaying;
