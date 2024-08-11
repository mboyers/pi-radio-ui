
import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {useStationStore} from "../stores/stationStore";
import axios from "axios";
import {useSnackbarStore} from "../stores/snackbarStore";

const Calibrator: React.FC = () => {

    const { stations} = useStationStore();
    const showSnackbar = useSnackbarStore((state) => state.showSnackbar);

    const saveTunePoint = (dialPosition: number) => {
        axios({method: 'post', url: '/calibrate/tunePoint/' + dialPosition}).then(() => {
            showSnackbar(`Tune point ${dialPosition} calibrated`, 'success');
        })
    }

    return (
        <Box>
            <Typography variant="h6" align="center" gutterBottom>
                To calibrate, tune the radio to the desired spot on the dial and click the corresponding number button.
            </Typography>
            <Grid container spacing={2} mt={1}>
                {stations.map((station) =>
                    <React.Fragment key={station.dialPosition}>
                        <Grid item xs={3} sm={2} md={1}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => saveTunePoint(station.dialPosition)}>{station.dialPosition}
                            </Button>
                        </Grid>
                    </React.Fragment>
                )}
            </Grid>
        </Box>

    );
}

export default Calibrator;