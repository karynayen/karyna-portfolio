import { Card, Stack } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { CenteredBox } from '../../styles/app.styles.js';

import GitHubIcon from '@mui/icons-material/GitHub';



//MAKE DATA A TEXT FIME
// EDIT THE CARD
//MAKE ALL CARDS THE SAME SIZE?

function Projects() {
    const projects = [
        {
            codeAvaliable: false,
            name: 'Image Processor',
            image: '',
            github: 'https://github.com/Tvcz/ImageProcessing/tree/Hw5Retry',
            description:
                'Utilizes Java Swing to develop a GUI based Image Processor with the capacity to load and save new images, ' +
                'apply various filters and transformations, and downscale an image.' +
                'Implements Model-View-Controller paradigm and the Command design pattern.',
            technologies: ['Java', 'Swing', 'IntelliJ'],
            buttonMessage: 'Code Avaliable On Request',
            buttonLink: '',  // REDIRECT TO A CONTACT ME PAGE
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        },
        {
            codeAvaliable: true,
            name: 'Oh Duck!',
            image: '',
            github: 'https://github.com/v-bow/ohDuck',
            description:
                'The Internet is a scary place, so why not bring along some ducks to help you feel safe! ' +
                'Worked in a team of 4 to develop a Chrome extension that replaces profane words with an adorable duck emoji.',
            technologies: ['JS', 'HTML', 'CSS', 'Python'],
            buttonMessage: 'View On Github',
            buttonLink: 'https://github.com/v-bow/ohDuck',
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        },
        {
            codeAvaliable: true,
            name: 'Email Sender Tool (HBP)',
            image: '',
            github: 'https://github.com/HackBeanpot/internal-tools',
            description:
                'Bulk email sender which allows the customized flexibility of pre made email templates ' +
                'Integrates Mailgun API for email sending, and NextAuth for website authentication',
            technologies: ['React.js', 'TypeScript', 'MongoDB', ' Node.js'],
            buttonMessage: 'View On Github',
            buttonLink: 'https://github.com/HackBeanpot/internal-tools',
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        },
        {
            codeAvaliable: true,
            name: 'Elevator Simulation State Machine',
            image: '',
            github: 'https://github.com/karynayen/ElevatorSimulation',
            description:
                'Models elevator functionality using a finite state machine to determine the more efficient configuration ' +
                'The elevator has a configurable capacity, vertical speed, rate at which the doors open and close, ' +
                'and how many passengers can board/exit. (code avaliable upon request)',
            technologies: ['Java', 'JavaFX', 'Eclipse',],
            buttonMessage: 'Code Avaliable On Request',
            buttonLink: '', // REDIRECT TO A CONTACT ME PAGE,
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        },
        {
            codeAvaliable: true,
            name: 'Confetti Quotes Site',
            image: '',
            github: 'https://github.com/karynayen/Senior-Quote',
            description:
                'Responsive web page that generates a random senior quote. Featuring common app confetti and a surprise :)',
            technologies: ['JS', 'CSS', 'HTML'],
            buttonMessage: 'View On Github',
            buttonLink: 'https://github.com/karynayen/Senior-Quote',
            viewLink: '' // OPEN PROJECT DETAIL PAGE
        }
    ]

    return (
        <>
            {/* FIX THE GRID IS KIND OF OFF CENTER STILL  */}
            {/* FIX THE SPACIGN + PADDING */}
            <CenteredBox>
                <Box sx={{
                    width: '80%'
                }}>
                    
                    <Typography variant="h3" gutterBottom component="div" sx={{color:'#3979DB', fontWeight: 'bold'}}>
                        Projects (In progress)
                    </Typography>

                    <br></br>
                    <br></br>
                    <Grid container spacing={2}>
                        {projects.map((project) =>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {project.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {project.description}
                                        </Typography>
                                        <TechStack project={project}></TechStack>
                                    </CardContent>
                                    <CardActions>
                                        <GitHubButton project={project}>{project.buttonMessage}</GitHubButton>
                                        <Button variant="contained" size="small" sx={{ textTransform: 'none' }}>
                                            <Typography variant="body2">
                                                View
                                            </Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </CenteredBox>
        </>
    );
}
// WHY DO WE NEED CURLY BRACE?
//ADD STYLING LATER
function GitHubButton({ project }) {
    if (project.codeAvaliable === true) {
        return (
            <>
                <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}
                    onClick={() => window.open(project.buttonLink, "_blank")}>
                    <Stack spacing={1} direction="row" >
                        <Typography variant="body2">
                            GitHub
                        </Typography>
                    </Stack>
                </Button>
            </>);
    } else {
        return (
            <>
                <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}
                    onClick={() => window.open(project.buttonLink, "_blank")}>
                    <Typography variant="body2">
                        Code Avaliable on request
                    </Typography>
                </Button>
            </>
        );
    }
}

// CHANGE COLOR
//FIX OVERFLOW

function TechStack({ project }) {
    return (<>
        <Stack spacing={2} direction="row" >
            {project.technologies.map((tool) =>
                <Box sx={{ borderRadius: '5px', padding: '2px 5px 2px 5px', backgroundColor: 'gray' }}>
                    <Typography sx={{ color: 'white' }} variant="caption" display="block">
                        {tool}
                    </Typography>
                </Box>
            )}
        </Stack>
    </>);
}

export default Projects;