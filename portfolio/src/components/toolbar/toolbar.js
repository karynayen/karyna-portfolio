import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';

export default function MyToolbar({ backgroundColor }) {
    const colorHex = backgroundColor;
    return (
        <>
            <Box>
                <AppBar elevation={0} position="static">
                    <Toolbar sx={{ padding: 1, backgroundColor: colorHex }}>

                        <Button
                            sx={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                textTransform: 'none',
                                color: 'black',
                                mr: 2,
                            }}>
                            Karyna Yen //</Button>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>

                        <Button sx={{ color: 'black', }}>Projects</Button>
                        <Button sx={{ color: 'black', }}>Other</Button>
                        <Button sx={{ color: 'black', }}>Contact Me</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
