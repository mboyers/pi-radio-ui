
import React, {useEffect, useState} from 'react';
import { Station } from '../types';
import axios from "axios";
import {Box, Button, Grid, Typography} from "@mui/material";

const StationChooser: React.FC = () => {

    const [stations, setStations] = useState<Station[]>([]);

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/stationConfiguration/stations');
            setStations(response.data);
        } catch (err) {
            // TODO: Maybe put an alert somewhere, toaster, etc.
            console.log(err);
        }
    };

    const playStation = (indexOfStation: number) => {
        let station = stations[indexOfStation];

        console.log('Playing station: ' + station);
        axios({method: 'post', url: '/api/play/station', data: station}).then((response) => {
            console.log('it finished?');
            //dispatch(showNotifier(response.data));
        })
    }

    return (
        <div>
            <Box p={1}>
                    {stations.map((station, index) =>
                        <React.Fragment key={station.dialPosition}>
                            <Box display="flex" alignItems="center" m={1}>
                                <Button variant="contained" color="primary" onClick={() => playStation(index)}>{station.dialPosition}</Button>
                                <Typography variant="body1" style={{ paddingLeft: '20px' }}>{station.name}</Typography>
                            </Box>
                        </React.Fragment>
                    )}
            </Box>
        </div>

    );
}

export default StationChooser;