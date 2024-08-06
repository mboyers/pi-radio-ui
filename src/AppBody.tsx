
import React from 'react';
import {Box, Container, Tab, Tabs} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import StationChooser from "./components/StationChooser";

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
                        <Tab label="Choose Station" value="1" />
                        <Tab label="Calibrate" value="2" />
                        <Tab label="Configure Stations" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><StationChooser /></TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    );
}

export default AppBody;
