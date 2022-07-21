// UPDATE THE STYLES FOR THE TOOL BAR
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material';


const ToolbarMainButton = styled(Button)(({ variant, buttonColor }) =>({
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    mr: 2,
    borderColor: 'white',
    textTransform:'none',
    '&:hover': {
        color: buttonColor ,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    '&:active': {
        color: buttonColor,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    '&:focus': {
        color: buttonColor,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
}))

const ToolbarSmallButton = styled(Button)(({ variant, buttonColor }) =>({
    color: 'black', 
    fontWeight: 'bold', 
    fontSize: 18,

    '&:hover': {
        color: buttonColor,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    '&:active': {
        backgroundColor: buttonColor,
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    '&:focus': {
        color: buttonColor,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
}))

export { ToolbarMainButton, ToolbarSmallButton }