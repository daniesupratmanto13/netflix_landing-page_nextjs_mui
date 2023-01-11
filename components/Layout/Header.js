import React from 'react'
import Image from 'next/image'
// mui
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Header = () => {
    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    height: '745px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&::after': {
                        position: 'absolute',
                        content: '""',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        background: 'rgba(0, 0, 0, 0.4)',
                        backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0.8) 0,
                            rgba(0, 0, 0, 0.1) 60%,
                            rgba(0, 0, 0, 0.8) 100%
                        )`
                    }
                }}
            >
                <Image
                    src="/images/netflix.jpg"
                    fill
                    objectFit="cover"
                    alt="netflix background"
                />

                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 999 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        color="common.white"
                        fontWeight="500"
                        textAlign="center"
                        gutterBottom
                    >
                        Unlimited movies, TV shows, and more.
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        color="common.white"
                        textAlign="center"
                        gutterBottom
                    >
                        Watch anywhere. Cancel anytime.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        color="common.white"
                        textAlign="center"
                        sx={{ my: 3 }}
                    >
                        Ready to watch? Enter your email to create or restart your membership.
                    </Typography>
                    <Grid container>
                        <Grid item xs>
                            <TextField
                                label="Email Address"
                                variant="filled"
                                fullWidth
                                sx={{
                                    bgcolor: 'common.white'
                                }}
                            />
                        </Grid>
                        <Grid item xs="auto">
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    height: '100%',
                                    borderRadius: '2px',
                                    fontSize: '17px'
                                }}
                            >
                                Get Started
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default Header