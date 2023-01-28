import React, { useState } from 'react'

// mui
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'common.white',
    boxShadow: 24,
    p: 4,
};


const LoginModal = ({ open, closeModal }) => {

    const [showPass, setShowPass] = useState(false)

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <Modal
            open={open}
            onClose={closeModal}
        >
            <Box sx={style}>
                <Typography
                    variant='h5'
                    sx={{ mb: 4 }}
                >
                    Sign In
                </Typography>
                <form action="">
                    <FormControl
                        fullWidth
                        sx={{ mb: 3 }}
                    >
                        <TextField
                            id="email"
                            name="email"
                            label="email"
                            variant="filled"
                        />
                        <FormHelperText>
                            Please enter a valid email or phone number.
                        </FormHelperText>
                    </FormControl>
                    <FormControl
                        fullWidth
                        sx={{ mb: 4 }}
                    >
                        <TextField
                            id="password"
                            name="pssword"
                            label="password"
                            type={showPass ? 'text' : 'password'}
                            variant="filled"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <Button onClick={handleShowPass}>
                                            Show
                                        </Button>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <FormHelperText>
                            Your password must contain between 4 and 60 characters.
                        </FormHelperText>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                    >
                        Sign In
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}

export default LoginModal