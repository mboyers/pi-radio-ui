
import React from 'react';
import axios from "axios";
import {Box, Button, TextField} from "@mui/material";
import {useStationStore} from "../stores/stationStore";
import PlayStationButton from "./PlayStationButton";

const ConfigureStations: React.FC = () => {

    const { stations, updateStations } = useStationStore();

    const handleNameChange = (index: number, value: string) => {
        const newStations = [...stations];
        newStations[index].name = value;
        console.log(newStations);
        updateStations(newStations);
    };

    const handleUriChange = (index: number, value: string) => {
        const newStations = [...stations];
        newStations[index].uri = value;
        console.log(newStations);
        updateStations(newStations);
    };

    const save = () => {
        console.log('Saving');
    };

    return (
            <Box p={1}>
                {stations.map((station, index) =>
                    <React.Fragment key={station.dialPosition}>
                        <Box display="flex" alignItems="center" m={1}>
                            <PlayStationButton indexOfStation={index}/>
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