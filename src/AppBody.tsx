
import React from 'react';
import {Box, Tab} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import StationChooser from "./components/StationChooser";
import TestStationStreamingUrl from "./components/TestStationStreamingUrl";
import ConfigureStations from "./components/ConfigureStations";

const AppBody: React.FC = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} variant="fullWidth" aria-label="Radio Tabs">
                        <Tab label="Listen" value="1" />
                        <Tab label="Test" value="2" />
                        <Tab label="Calibrate" value="3" />
                        <Tab label="Configure" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1"><StationChooser /></TabPanel>
                <TabPanel value="2"><TestStationStreamingUrl /></TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4"><ConfigureStations /></TabPanel>
            </TabContext>
        </Box>
    );
}

export default AppBody;
