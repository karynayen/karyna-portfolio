import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

//https://stackoverflow.com/questions/58450315/react-js-cards-using-for-loop
// how to create a responsive grid flex react
// follow this later
function Projects() {
    // export this later
    const projects = [
        {
            name: 'Image Processor',
            image: '',
            github: 'https://github.com/Tvcz/ImageProcessing/tree/Hw5Retry',
            description:
                'Utilizes Java Swing to develop a GUI based Image Processor with the capacity to load and save new images, ' +
                'apply various filters and transformations, and downscale an image.' +
                'Implements Model-View-Controller paradigm and the Command design pattern. (code avaliable upon request)',
            technologies: ['Java', 'Swing', 'Github']
        },
        {
            name: 'Oh Duck!',
            image: '',
            github: 'https://github.com/v-bow/ohDuck',
            description:
                'The Internet is a scary place, so why not bring along some ducks to help you feel safe! ' +
                'Worked in a team of 4 to develop a Chrome extension that replaces profane words with an adorable duck emoji.',
            technologies: ['Java Script', 'HTML', 'CSS', 'Python', 'Github']
        },
        {
            name: 'Email Sender Tool (HBP)',
            image: '',
            github: 'https://github.com/HackBeanpot/internal-tools',
            description:
                'Bulk email sender which allows the customized flexibility of pre made email templates ' +
                'Integrates Mailgun API for email sending, and NextAuth for website authentication',
            technologies: ['React.js', 'TypeScript', 'MongoDB', ' Node.js', 'GitHub']
        },
        {
            name: 'Elevator Simulation State Machine',
            image: '',
            github: 'https://github.com/karynayen/ElevatorSimulation',
            description:
                'Models elevator functionality using a finite state machine to determine the more efficient configuration ' +
                'The elevator has a configurable capacity, vertical speed, rate at which the doors open and close, ' +
                'and how many passengers can board/exit. (code avaliable upon request)',
            technologies: ['Java', 'JavaFX', 'Eclipse', 'Github']
        },
        {
            name: 'Confetti Quotes Site',
            image: '',
            github: 'https://github.com/karynayen/Senior-Quote',
            description:
                'Responsive web page that generates a random senior quote. Featuring common app confetti and a surprise :)',
            technologies: ['JS', 'CSS', 'HTML']
        }
    ]

    return (
        <>
            <p>hi</p>
            <Box sx={{ display: 'flex' }}>
                {projects.map((project) =>
                   <p>hi!!</p>
                )}
            </Box>
            {/* <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card> */}
        </>
    );
}

export default Projects;