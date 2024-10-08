
import React from 'react';
import {Box, Button } from "@mui/material";
import {useStationStore} from "../stores/stationStore";
import {useSnackbarStore} from "../stores/snackbarStore";
import api from "../service/Api";

interface PlayStationButtonProps {
    indexOfStation: number;
}

const PlayStationButton: React.FC<PlayStationButtonProps> = ({indexOfStation}) => {

    const { stations} = useStationStore();
    const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

    const station = stations[indexOfStation];

    const playStation = () => {
        api({method: 'post', url: '/api/play/station', data: station}).then(() => {
            showSnackbar(`${station.name} is now playing`, 'success');
        })
    }

    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                onClick={() => playStation()}>{station.dialPosition}
            </Button>
        </Box>
    );
}

export default PlayStationButton;