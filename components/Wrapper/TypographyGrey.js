import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { grey } from '@mui/material/colors'


const TypographyGreyAnchor = styled(Typography)(() => ({
    textDecoration: 'none',
    color: grey[600]
}))

export default TypographyGreyAnchor