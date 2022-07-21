import { Divider, AppBar, Toolbar, Box, Typography } from '@mui/material';
import { ToolbarMainButton, ToolbarSmallButton } from './toolbar.styles.js';

export default function MyToolbar({ backgroundColor, buttonColor }) {
    const colorHex = backgroundColor;
    return (
        <>
            <Box>
                <AppBar elevation={0} position="static">
                    <Toolbar sx={{ padding: 1, backgroundColor: colorHex }}>
                        <ToolbarMainButton buttonColor={buttonColor}>
                            Karyna Yen
                        </ToolbarMainButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                        < ToolbarSmallButton buttonColor={buttonColor}>Projects</ ToolbarSmallButton>
                        < ToolbarSmallButton buttonColor={buttonColor}>Interests</ ToolbarSmallButton>
                        <ToolbarSmallButton buttonColor={buttonColor}>Resume</ ToolbarSmallButton>
                        < ToolbarSmallButton buttonColor={buttonColor}>Contact</ ToolbarSmallButton>
                    </Toolbar>
                </AppBar>
                <Divider variant="fullWidth" sx={{ background: 'black', }} />
            </Box>


        </>
    );
}
