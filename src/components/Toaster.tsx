import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import {useSnackbarStore} from "../stores/snackbarStore";

const Toaster: React.FC = () => {
    const { open, message, severity, hideSnackbar } = useSnackbarStore();

    function handleClose() {
        hideSnackbar();
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={2500}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Toaster;
