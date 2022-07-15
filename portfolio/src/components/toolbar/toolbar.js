import { AppBar, Toolbar, Box, Button } from '@mui/material';

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
                                color: 'black'
                            }}>
                            Karyna Yen //</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
