import './App.css';
import { Paper, Box } from '@mui/material';

function App() {
  return (
    <>

      <Box component="div"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >

        <Paper elevation={3} />
      </Box>

    </>
  );
}

export default App;
