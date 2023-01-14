import React from 'react'

// mui
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// components
import BottomBorderBox from '../Wrapper/BottomBorder'

const Features = () => {
    return (
        <BottomBorderBox
            sx={{
                backgroundColor: 'common.black'
            }}
        >
            <Container
                maxWidth="lg"
                sx={{ py: 4 }}
            >
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h3"
                            color="common.white"
                            gutterBottom
                        >
                            Enjoy on your TV.
                        </Typography>
                        <Typography
                            variant="h5"
                            color="common.white"
                        >
                            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    </Grid>
                </Grid>
            </Container>
        </BottomBorderBox>
    )
}

export default Features