
import React from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import {useStationStore} from "../stores/stationStore";
import PlayStationButton from "./PlayStationButton";
import {useSnackbarStore} from "../stores/snackbarStore";

const ConfigureStations: React.FC = () => {

    const { stations, updateStations, persistStations } = useStationStore();
    const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

    const handleNameChange = (index: number, value: string) => {
        const newStations = [...stations];
        newStations[index].name = value;
        updateStations(newStations);
    };

    const handleUriChange = (index: number, value: string) => {
        const newStations = [...stations];
        newStations[index].uri = value;
        updateStations(newStations);
    };

    const save = () => {
        persistStations().then(() => {
            showSnackbar('Configuration saved', 'success');
        })
    };

    return (
        <Box>
            <Grid container spacing={2}>
                {stations.map((station, index) =>
                    <React.Fragment key={station.dialPosition}>
                        <Grid item xs={12} sm={12} md={1}>
                            <PlayStationButton indexOfStation={index}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                size="small"
                                value={station.name}
                                fullWidth
                                onChange={(e) => handleNameChange(index, e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={7}>
                            <TextField
                                label="Streaming URL"
                                variant="outlined"
                                size="small"
                                value={station.uri}
                                fullWidth
                                onChange={(e) => handleUriChange(index, e.target.value)}
                            />
                        </Grid>
                    </React.Fragment>
                )}
            </Grid>
            <Box marginTop={3}>
                <Button variant="contained" color="primary" onClick={save} fullWidth>Save</Button>
            </Box>
        </Box>
    );
}

export default ConfigureStations;