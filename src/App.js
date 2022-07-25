import './App.css';
import { GlobalStyles, Stack, } from '@mui/material';
import { IntroBox, IntroPaper, IntroHeadingTypography, IntroBodyTypography, IntroOutlinedButton } from './styles/app.styles.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import MyToolbar from './components/toolbar/toolbar.js';
import resume from './resume.pdf';
import Projects from './components/projects/projects.js';


//abstract later
// make sure everything is formated for phones
//figure out some cool animations on scrolling!!
// background can include leaves for hiking vibes
function App() {
  const backgroundColor = '#E6EFFE';
  const buttonColor = '#3979DB';
  // {TODO: FIGURE OUT WHY THE DOWNLOADING IS NOT WORKING}
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = './download.pdf';
    link.href = { resume };
    link.click();
  };


  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: backgroundColor }
        }}
      />

      <MyToolbar backgroundColor={backgroundColor} buttonColor={buttonColor}> </MyToolbar>
      <IntroBox>
        <IntroPaper elevation={3}>
          {/* now edit the spacing! */}
          <IntroHeadingTypography variant="h1">
            hi, i'm <strong>karyna</strong>!
            <br></br>
          </IntroHeadingTypography>
          <Stack spacing={2} direction="row">
            {/* how to add functionality to the buttons */}
            <IntroOutlinedButton variant="outlined">Projects</IntroOutlinedButton>
            <IntroOutlinedButton onClick={onDownload} variant="outlined">
              Resume
            </IntroOutlinedButton>
            <IntroOutlinedButton variant="outlined">Extra!</IntroOutlinedButton>
          </Stack>

          <IntroBodyTypography variant="body1">
            I am a second-year computer science student at Northeastern University,
            interested in pursuing software developement.
            <br></br>
            <br></br>
            My expertise is in utilizing object-oriented design to create
            various Java applications.
            I'm also experienced in using Javascript, Typescript, HTML/CSS, and Python,
            along with working with the React.js and Bootstrap librarys, and using Git for version control.
            <br></br>
            <br></br>
            Outside of software development, I am a competitive swimmer and a triathlete.
            I also enjoy hiking, skiing, and snowboarding!
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
            {/* obstract into a styles class!! */}
            <LinkedInIcon
              sx={{
                '&:hover': {
                  color: backgroundColor,
                },
              }}
              onClick={event => window.open('https://www.linkedin.com/in/karynayen/', "_blank")} />
            <GitHubIcon
              sx={{
                '&:hover': {
                  color: backgroundColor,
                },
              }}
              onClick={event => window.open('https://github.com/karynayen', "_blank")} />
            <EmailIcon
              sx={{
                '&:hover': {
                  color: backgroundColor,
                },
              }}
              onClick={event => window.location.href = 'mailto:yen.k@northeastern.edu'} />
          </Stack>
        </IntroPaper>
      </IntroBox>

      {/* ADD THIS BACK !!*/}
      {/* <Projects ></Projects> */}
     
    </>
  );
}

export default App;
