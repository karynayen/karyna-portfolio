import './App.css';
import { CardMedia, GlobalStyles, Card, Stack, Box, AppBar, Toolbar, Button } from '@mui/material';
import { IntroBox, IntroPaper, IntroHeadingTypography, IntroBodyTypography, IntroOutlinedButton } from './styles/app.styles.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
//abstract later
// make sure everything is formated for phones
//figure out some cool animations on scrolling!!
// background can include leaves for hiking vibes
function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#C3C8EA' }
        }}
      />
      {/* make a tool bar object */}
      <Box>
        <AppBar elevation={0} position="static">
          <Toolbar sx={{ padding: 1, backgroundColor: '#C3C8EA' }}>
            <Button sx={{ fontSize: 30, fontWeight: 'bold', textTransform: 'none', color: 'black' }}>Karyna Yen //</Button>
          </Toolbar>
        </AppBar>
      </Box>


      <IntroBox>

        <IntroPaper elevation={3}>

          {/* <Card
            sx={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',

            }}>
            <CardMedia
              component="img"
              height="250"
              image={require('./images/me.jpg')}
              alt="A Picture of Karyna!!"
            />
          </Card> */}
          {/* now edit the spacing! */}
          <IntroHeadingTypography variant="h1">
            hi, i'm <strong>karyna</strong>!
            <br></br>
          </IntroHeadingTypography>
          <Stack spacing={2} direction="row">
            {/* how to add functionality to the buttons */}
            <IntroOutlinedButton variant="outlined">Projects</IntroOutlinedButton>
            <IntroOutlinedButton variant="outlined">Resume</IntroOutlinedButton>
            <IntroOutlinedButton variant="outlined">Extra!</IntroOutlinedButton>
          </Stack>

          <IntroBodyTypography variant="body1">
            I am a second-year computer science student at Northeastern University,
            interested in pursuing software developement.
            <br></br>
            <br></br>

            I am most comfortable utilizing object-oriented design to create
            various Java applications.
            I also have experience using Javascript, Typescript,  HTML/CSS, and Python,
            along with working with the React.js and Bootstrap librarys, and using Git for version control.
            <br></br>
            <br></br>
            In this portfolio, I will display my projects,
            along with some of my hobbies and interests.
            Without further ado, welcome to my portfolio!
            <br></br>
            <br></br>
          </IntroBodyTypography>
          {/* make the icons clickable, CENTER THEM */}

          <Stack spacing={2} direction="row" >
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
          </Stack>


        </IntroPaper>
      </IntroBox>
    </>
  );
}

export default App;
