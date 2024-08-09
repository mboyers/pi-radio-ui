
import React from 'react';
import axios from "axios";
import {Box, Button } from "@mui/material";
import {useStationStore} from "../stores/stationStore";
import {useSnackbarStore} from "../stores/snackbarStore";

interface PlayStationButtonProps {
    indexOfStation: number;
}

const PlayStationButton: React.FC<PlayStationButtonProps> = ({indexOfStation}) => {

    const { stations} = useStationStore();
    const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

    const station = stations[indexOfStation];

    const playStation = () => {
        axios({method: 'post', url: '/api/play/station', data: station}).then(() => {
            showSnackbar('Played ' + station.name, 'success');
        })
    }

    return (
        <Box p={1}>
            <Button variant="contained" color="primary" onClick={() => playStation()}>{station.dialPosition}</Button>
        </Box>
    );
}

export default PlayStationButton;