
import React, {useEffect, useState} from 'react';
import { Station } from '../types';
import {Box, Button, Container, Typography} from '@mui/material';
import axios from "axios";

const StationChooser: React.FC = () => {

    const [stations, setStations] = useState<Station[]>([]);

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/stationConfiguration/stations');
            console.log(response);
            setStations(response.data);
        } catch (err) {
            // TODO: Maybe put an alert somewhere, toaster, etc.
            console.log(err);
        }
    };

    return (
        <Container>
            {stations.map(station => <div>{station.name}</div>)}
        </Container>
    );
}

export default StationChooser;
