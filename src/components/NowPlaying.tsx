
import React from 'react';
import {Box, Typography} from '@mui/material';
import useNowPlayingStore from "../stores/NowPlayingStore";

const NowPlaying: React.FC = () => {

    const { station, song } = useNowPlayingStore((state) => state.data);

    return (
        <Box p={2} bgcolor="background.paper">
            <Box display="flex" alignItems="center">
                <Typography variant="h4" color="primary" style={{marginRight: '8px'}}>
                    Station:
                </Typography>
                <Typography variant="h4">
                    {station}
                </Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Typography variant="h4" color="secondary" style={{marginRight: '8px'}}>
                    Song:
                </Typography>
                <Typography variant="h4">
                    {song}
                </Typography>
            </Box>
        </Box>
    );
}

export default NowPlaying;
