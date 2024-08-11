
import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import api from "../service/Api";

const TestStationStreamingUrl: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const testStation = async () => {
        try {
            api({method: 'post',
                url: '/api/play/testStation',
                headers: {'Content-Type': 'text/plain'},
                data: inputValue})
        } catch (error) {
            console.error('Error making the request', error);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h6" align="center" gutterBottom>
                Enter a station's streaming url and click 'Test' to see if it is currently working.
            </Typography>
            <Box display="flex" alignItems="center" width="100%" mt={1}>
                <TextField
                    label="Station URL"
                    variant="outlined"
                    value={inputValue}
                    onChange={handleInputChange}
                    fullWidth
                    style={{ marginRight: '8px' }}
                />
                <Button variant="contained" color="primary" onClick={testStation}>
                    Test
                </Button>
            </Box>
        </Box>

    );
}

export default TestStationStreamingUrl;
