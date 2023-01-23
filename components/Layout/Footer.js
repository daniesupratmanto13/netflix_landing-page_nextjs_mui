import React from 'react'

// mui
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'



const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'common.black',
                color: grey[600]
            }}
        >

            <Container
                maxWidth='md'
                sx={{
                    py: 6,
                }}
            >
                <Typography sx={{ mb: 4 }}>
                    Questions? Call 007-803-321-2130
                </Typography>
                <Grid
                    container
                    spacing={4}
                    sx={{ mb: 4 }}
                >
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <Typography variant='caption' component='a' href='#'>
                                FAQ
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Investor Relations
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Ways to Watch
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Corporate Information
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Only on Netflix
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <Typography variant='caption' component='a' href='#'>
                                Help Center
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Jobs
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Terms of Use
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Contact Us
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <Typography variant='caption' component='a' href='#'>
                                Account
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Redeem Gift Cards
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Privacy
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Speed Test
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <Typography variant='caption' component='a' href='#'>
                                Media Center
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Buy Gift Cards
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Cookie Preferences
                            </Typography>
                            <Typography variant='caption' component='a' href='#'>
                                Legal Notices
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{ mb: 3 }}>
                    <Select
                        name="lang"
                        defaultValue="EN"
                        size="small"
                        variant="outlined"
                        sx={{
                            borderWidth: "2px",
                            borderStyle: "solid",
                            borderColor: "common.white",
                            color: "common.white",
                            "& .MuiSelect-icon": {
                                color: "common.white"
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: "none"
                            }
                        }}
                    >
                        <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                        <MenuItem value="EN">English</MenuItem>
                    </Select>
                </Box>
                <Typography variant='caption'>
                    Netflix Indonesia
                </Typography>
            </Container>

        </Box>
    )
}

export default Footer