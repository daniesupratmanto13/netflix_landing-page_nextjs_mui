import React from 'react'

// mui
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// components
import BottomBorderBox from '../Wrapper/BottomBorder'

const Features = () => {
    return (
        <BottomBorderBox>
            <Container maxWidth="lg">
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" color="initial"></Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1" color="initial"></Typography>
                    </Grid>
                </Grid>
            </Container>
        </BottomBorderBox>
    )
}

export default Features