import { styled } from '@mui/material/styles'
import { Box, Paper, Typography } from '@mui/material';


// how to fit phones
const IntroBox = styled(Box)({
    width: '100%',
    height: '100%',
})

const IntroPaper = styled(Paper)(({ elevation }) =>({
    width: 400,
    height: 300,
    backgroundColor: '#BBB6DF',
    padding: 30,
    margin: '10% 0 0 20%',
    
}))

const IntroHeadingTypography = styled(Typography)(({ variant }) =>({
    m: 1,
    fontWeight: 10,
    fontSize: '3.5em',
    marginBottom: 20,
}))

const IntroBodyTypography = styled(Typography)(({ variant }) =>({
    marginTop: 20,
    m: 1,
    fontWeight: 10,
    fontSize: '1em',
}))
export { IntroBox, IntroPaper, IntroHeadingTypography, IntroBodyTypography }