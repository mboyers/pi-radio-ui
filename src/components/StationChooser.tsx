
import React from 'react';
import axios from "axios";
import {Box, Button, Typography} from "@mui/material";
import {useStationStore} from "../stores/stationStore";

const StationChooser: React.FC = () => {

    const { data, loading, fetchData, persist } = useStationStore();

    const playStation = (indexOfStation: number) => {
        let station = data[indexOfStation];

        console.log('Playing station: ' + station);
        axios({method: 'post', url: '/api/play/station', data: station}).then((response) => {
            console.log('it finished?');
            //dispatch(showNotifier(response.data));
        })
    }

    return (
        <div>
            <Box p={1}>
                    {data.map((station, index) =>
                        <React.Fragment key={station.dialPosition}>
                            <Box display="flex" alignItems="center" m={1}>
                                <Button variant="contained" color="primary" onClick={() => playStation(index)}>{station.dialPosition}</Button>
                                <Typography variant="body1" style={{ paddingLeft: '20px' }}>{station.name}</Typography>
                            </Box>
                        </React.Fragment>
                    )}
            </Box>
        </div>

    );
}

export default StationChooser;