import './App.css';
import { Button, Stack } from '@mui/material';
import { IntroBox, IntroPaper, IntroHeadingTypography, IntroBodyTypography } from './styles/app.styles.js'
import {  LinkedInIcon, GitHubIcon } from '@mui/icons-material';

function App() {
  return (
    <>
      <IntroBox>
        <IntroPaper elevation={3}>
          {/* now edit the spacing! */}
          <IntroHeadingTypography variant="h1">
            hi, i'm <strong>karyna</strong>!
          </IntroHeadingTypography>
          <Stack spacing={2} direction="row">
            <Button variant="outlined">Outlined</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>

          <IntroBodyTypography variant="body1">
            I am a first-year computer science student at Northeastern University.
            In this portfolio, I will display my projects,
            along with some of my hobbies and other projects relating to my major.
            Without further ado, welcome to my portfolio!
          </IntroBodyTypography>
          <svg data-testid="LinkedInIcon"></svg>
          <svg data-testid="GitHubIcon"></svg>


        </IntroPaper>
      </IntroBox>
    </>
  );
}

export default App;
