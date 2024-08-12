
import React from 'react';
import {Box, Typography} from "@mui/material";
import {useStationStore} from "../stores/stationStore";
import PlayStationButton from "./PlayStationButton";

const StationChooser: React.FC = () => {

    const { stations} = useStationStore();

    return (
        <Box>
            {stations.map((station, index) =>
                <Box display="flex" alignItems="center" m={1}>
                    <PlayStationButton indexOfStation={index}/>
                    <Typography variant="body1" style={{ paddingLeft: '20px' }}>{station.name}</Typography>
                </Box>
            )}
        </Box>
    );
}

export default StationChooser;