
import React from 'react';
import {Grid, TextField} from "@mui/material";
import {useStationStore} from "../stores/stationStore";
import PlayStationButton from "./PlayStationButton";
import {useSnackbarStore} from "../stores/snackbarStore";
import axios from "axios";

const ConfigureStations: React.FC = () => {

    const { stations, updateStations } = useStationStore();
    const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

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
        axios({method: 'put', url: '/api/stationConfiguration/stations', data: stations}).then(() => {
            showSnackbar('Configuration saved', 'success');
        })
    };

    return (
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
                            value={station.name}
                            fullWidth
                            onChange={(e) => handleNameChange(index, e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <TextField
                            label="Streaming URL"
                            variant="outlined"
                            value={station.uri}
                            fullWidth
                            onChange={(e) => handleUriChange(index, e.target.value)}
                        />
                    </Grid>
                </React.Fragment>
            )}
        </Grid>
    );
}

export default ConfigureStations;