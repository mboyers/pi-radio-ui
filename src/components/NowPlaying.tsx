
import React from 'react';
import {Box, Typography} from '@mui/material';
import useNowPlayingStore from "../stores/NowPlayingStore";

const NowPlaying: React.FC = () => {

    const sharedStyles = {
        title: {
            fontSize: 'clamp(4px, 5vw, 40px)',
            marginRight: '1vw',
        }
    };

    const { station, song } = useNowPlayingStore((state) => state.data);

    return (
        <Box p={2} bgcolor="background.paper">
            <Box display="flex" alignItems="center">
                <Typography sx={sharedStyles.title} color="primary">
                    Station:
                </Typography>
                <Typography sx={sharedStyles.title} >
                    {station}
                </Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Typography sx={sharedStyles.title} color="secondary">
                    Song:
                </Typography>
                <Typography sx={sharedStyles.title} >
                    {song}
                </Typography>
            </Box>
        </Box>
    );
}

export default NowPlaying;
