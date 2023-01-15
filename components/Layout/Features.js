import React from 'react'
import Image from "next/legacy/image";

// mui
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// components
import BottomBorderBox from '../Wrapper/BottomBorder'


const Title = ({ title }) => {
    return (
        <Typography
            variant="h3"
            color="common.white"
            gutterBottom
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
            {title}
        </Typography>
    )
}

const Desc = ({ desc }) => {
    return (
        <Typography
            variant="h5"
            color="common.white"
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
            {desc}
        </Typography>
    )
}

const Features = () => {
    return (
        <>
            <BottomBorderBox
                sx={{
                    backgroundColor: 'common.black'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ py: 4 }}
                >
                    <Grid
                        container
                        alignItems="center"
                        columnSpacing={10}
                    >
                        <Grid item xs={12} md={6}>
                            <Title title="Enjoy on your TV." />
                            <Desc desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative' }}>
                                <Box sx={{ position: 'relative', zIndex: 2 }}>
                                    <Image
                                        src='/images/tv.png'
                                        width={640}
                                        height={480}
                                        layout='responsive'
                                        alt='tv'
                                    />
                                </Box>
                                <Box sx={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    top: '48%',
                                    left: '50%',
                                    maxWidth: '73.5%',
                                    maHeight: '56%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                                >
                                    <video
                                        src="/videos/tv.m4v"
                                        style={{ height: '100%', width: '100%' }}
                                        autoPlay
                                        playsInline
                                        muted
                                        loop
                                    >
                                    </video>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </BottomBorderBox>

            <BottomBorderBox
                sx={{
                    backgroundColor: 'common.black'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ py: 4 }}
                >
                    <Grid
                        container
                        alignItems="center"
                        columnSpacing={10}
                    >
                        <Grid
                            item
                            xs={12} md={6}
                            sx={{ order: { xs: 2, md: 1 } }}
                        >
                            <Box>
                                <Image
                                    src='/images/mobile.jpg'
                                    width={640}
                                    height={480}
                                    layout='responsive'
                                    alt='mobile'
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12} md={6}
                            sx={{ order: { xs: 1, md: 2 } }}
                        >
                            <Title title="Download your shows to watch offline." />
                            <Desc desc="Save your favorites easily and always have something to watch." />
                        </Grid>
                    </Grid>
                </Container>
            </BottomBorderBox>

            <BottomBorderBox
                sx={{
                    backgroundColor: 'common.black'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ py: 4 }}
                >
                    <Grid
                        container
                        alignItems="center"
                        columnSpacing={10}
                    >
                        <Grid item xs={12} md={6}>
                            <Title title="Watch everywhere." />
                            <Desc desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Image
                                    src='/images/devices.png'
                                    width={640}
                                    height={480}
                                    layout='responsive'
                                    alt='device'
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </BottomBorderBox>

            <BottomBorderBox
                sx={{
                    backgroundColor: 'common.black'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ py: 4 }}
                >
                    <Grid
                        container
                        alignItems="center"
                        columnSpacing={10}
                    >
                        <Grid
                            item
                            xs={12} md={6}
                            sx={{ order: { xs: 2, md: 1 } }}
                        >
                            <Box>
                                <Image
                                    src='/images/kids.png'
                                    width={640}
                                    height={480}
                                    layout='responsive'
                                    alt='kids'
                                />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={12} md={6}
                            sx={{ order: { xs: 1, md: 2 } }}
                        >
                            <Title title="Create profiles for kids." />
                            <Desc desc="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." />
                        </Grid>
                    </Grid>
                </Container>
            </BottomBorderBox>
        </>
    )
}

export default Features