
import React, {useEffect, useState} from 'react';
import { Station } from '../types';
import axios from "axios";
import {Box, Button, TextField} from "@mui/material";

const ConfigureStations: React.FC = () => {

    const [stations, setStations] = useState<Station[]>([]);

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/stationConfiguration/stations');
            setStations(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const playStation = (indexOfStation: number) => {
        let station = stations[indexOfStation];

        console.log('Playing station: ' + station);
        axios({method: 'post', url: '/api/play/station', data: station});
    }

    const handleNameChange = (index: number, value: string) => {
        const newStations = [...stations];
        newStations[index].name = value;
        console.log(newStations);
        setStations(newStations);
    };

    const handleUriChange = (index: number, value: string) => {
        const newStations = [...stations];
        newStations[index].uri = value;
        console.log(newStations);
        setStations(newStations);
    };

    const save = () => {
        console.log('Saving');
    };

    return (
            <Box p={1}>
                {stations.map((station, index) =>
                    <React.Fragment key={station.dialPosition}>
                        <Box display="flex" alignItems="center" m={1}>
                            <Button variant="contained" color="primary" onClick={() => playStation(index)}>{station.dialPosition}</Button>
                            <TextField
                                label="Name"
                                variant="outlined"
                                value={station.name}
                                onChange={(e) => handleNameChange(index, e.target.value)}
                            />
                            <TextField
                                label="Streaming URL"
                                variant="outlined"
                                value={station.uri}
                                onChange={(e) => handleUriChange(index, e.target.value)}
                            />
                        </Box>
                    </React.Fragment>
                )}
                <Button variant="contained" color="primary" onClick={save}>Save</Button>
            </Box>
    );
}

export default ConfigureStations;