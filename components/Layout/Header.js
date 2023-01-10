import React from 'react'
import Image from 'next/image'
// mui
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Header = () => {
    return (
        <Box>
            <Box
                sx={{
                    position: 'relative',
                    height: '745px',
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
                        color="common.white"
                        fontWeight="500"
                        textAlign="center">
                        Unlimited movies, TV shows, and more.
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default Header