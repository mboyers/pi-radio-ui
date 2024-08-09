
import React from 'react';
import axios from "axios";
import {Box, Button, Typography} from "@mui/material";
import {useStationStore} from "../stores/stationStore";

interface PlayStationButtonProps {
    indexOfStation: number;
}

const PlayStationButton: React.FC<PlayStationButtonProps> = ({indexOfStation}) => {

    const { stations} = useStationStore();
    const station = stations[indexOfStation];

    const playStation = () => {
        console.log('Playing station: ' + station);
        axios({method: 'post', url: '/api/play/station', data: station}).then((response) => {
            console.log(response.data);
            //dispatch(showNotifier(response.data));
        })
    }

    return (
        <Box p={1}>
            <Button variant="contained" color="primary" onClick={() => playStation()}>{station.dialPosition}</Button>
        </Box>
    );
}

export default PlayStationButton;