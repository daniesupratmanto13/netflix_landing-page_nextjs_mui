import React from 'react'

// mui
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const LoginModal = ({ open, closeModal }) => {

    return (
        <Modal
            open={open}
            onClose={closeModal}
            sx={{
                '& .MuiModal-root': {
                    mt: 9
                },
            }}
        >
            <Box sx={style}>
                modal
            </Box>
        </Modal>
    )
}

export default LoginModal