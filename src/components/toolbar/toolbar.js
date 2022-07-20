import { Divider, AppBar, Toolbar, Box, Button, Typography } from '@mui/material';

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
                                color: 'black',
                                mr: 2,
                            }}>
                            Karyna Yen //</Button>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        </Typography>
                        {/* TODO: ABSTRACT THIS LATER */}
                        <Button sx={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Projects</Button>
                        <Button sx={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Other</Button>
                        <Button sx={{ color: 'black', fontWeight: 'bold', fontSize: 18}}>Contact Me</Button>
                    </Toolbar>
                </AppBar>
                <Divider variant="fullWidth" sx={{ background: 'black', }} />
            </Box>


        </>
    );
}
