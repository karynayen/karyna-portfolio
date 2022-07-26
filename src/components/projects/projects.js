import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import { CenteredBox } from '../../styles/app.styles.js';

import GitHubIcon from '@mui/icons-material/GitHub';



//MAKE DATA A TEXT FIME
//MAYBE MAKE AVALIABLITY A BOOLEAN 
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
            technologies: ['Java', 'Swing', 'Github'],
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
            technologies: ['Java Script', 'HTML', 'CSS', 'Python', 'Github'],
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
            technologies: ['React.js', 'TypeScript', 'MongoDB', ' Node.js', 'GitHub'],
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
            technologies: ['Java', 'JavaFX', 'Eclipse', 'Github'],
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
            <CenteredBox>
                <Box sx={{
                    width: '80%'
                }}>
                    <h1>Projects</h1>
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
                                    </CardContent>
                                    <CardActions>
                                        <GitHubButton project={project}>{project.buttonMessage}</GitHubButton>
                                        <Button size="small" sx={{ textTransform: 'none' }}>View</Button>
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
function GitHubButton({project}) {
    if (project.codeAvaliable === true) { 
        return(<> <p>View On Github</p></>);
    } else {
        return(<> <p>Code Avaliable on request {project.name}</p> </>);
        // onClick={() => window.open(project.buttonLink, "_blank")}>
        // {project.buttonMessage}
    }
}

export default Projects;