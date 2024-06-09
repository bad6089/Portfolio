import React from 'react';
import { Box, Typography, Container, Grid, Divider, Chip } from '@mui/material';
import VerticalLinearStepper from './VerticalLinearStepper';
import SectionCard from './SectionCard';
import ActionAreaCard from './ActionAreaCard';
import blacklines from '../assets/blacklines.gif';
import InfoSection from './InfoSection'; // Import the InfoSection component
import ImageGallery from './ImageGallery'; // Import the ImageGallery component
import ImageGallery2 from './ImageGallery2'; // Import the ImageGallery component
import MusicPlayer from './MusicPlayer';
import Skills from './Skills';
import {
  Brush as BrushIcon,
  Terminal as TerminalIcon,
  ViewInAr as ViewInArIcon,
} from '@mui/icons-material';

const contentData = [
  {
    title: 'Computer Aided Design',
    icon: <ViewInArIcon />,
    items: [
      { text: 'Siemens NX', src: '../src/assets/CAD/nx.png' },
      { text: 'Solidworks', src: '../src/assets/CAD/sw.png' },
      { text: 'Catia', src: '../src/assets/CAD/catia.png' },
      { text: 'Autocad', src: '../src/assets/CAD/autocad.png' },
    ],
    bgColor: '#121212',
  },
  {
    title: 'Creativity tools',
    icon: <BrushIcon />,
    items: [
      { text: 'Adobe Illustrator', src: '/src/assets/CAD/ai.png' },
      { text: 'Gimp', src: '/src/assets/CAD/gimp.png' },
      { text: 'Automatic1111', src: '/src/assets/CAD/sd.png' },
      { text: 'Filmora', src: '/src/assets/CAD/filmora.png' },
    ],
    bgColor: '#110e1b',
  },
  {
    title: 'Web Development',
    icon: <TerminalIcon />,
    items: [
      { text: 'React js', src: '/src/assets/CAD/react.png' },
      { text: 'HTML', src: '/src/assets/CAD/vite.png' },
      { text: 'Chakra UI', src: '/src/assets/CAD/chakra.png' },
      { text: 'Material UI', src: '/src/assets/CAD/mui.png' },
    ],
    bgColor: '#0d0e14',
  },
];

const cardData = [
  {
    image: '/src/assets/PROJECT/ezweb.png',
    title: 'Ezzytech Enginnering Website',
    description:
      '[HTML] Crafted this masterpiece of cooperate website during pandemic. Had alot of time on hand, so took the challange to make a website for my previous company that I worked with.',
    link: 'https://bad6089.github.io/Ezzytech/',
  },
  {
    image: '/src/assets/PROJECT/routematch.jpg',
    title: 'Route Matching Tool',
    description:
      '[Vite + React] Utilizing LocationIQ and OpenRouteService API. With the aid of turf, leaflet and lodash dependencies, user can compare % of overlapping of two routes and it will automatically provide entry and exit intersection of the route  ',
    link: 'https://route-match.vercel.app/',
  },
  {
    image: '/src/assets/PROJECT/iguana.jpg',
    title: 'Iguana',
    description:
      'Above the iguana image is just a placeholder for my next project. Why an iguana, you ask? Well, I have no idea. It just seemed like the right lizard at the right time!',
    link: 'https://en.wikipedia.org/wiki/Iguana',
  },
];

const SquigglyLine = () => (
  <svg
    width='100%'
    height='20'
    viewBox='0 0 1000 20'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='none'
  >
    <path
      d='M0 10 Q 12.5 0, 25 10 T 50 10 T 75 10 T 100 10 T 125 10 T 150 10 T 175 10 T 200 10 T 225 10 T 250 10 T 275 10 T 300 10 T 325 10 T 350 10 T 375 10 T 400 10 T 425 10 T 450 10 T 475 10 T 500 10 T 525 10 T 550 10 T 575 10 T 600 10 T 625 10 T 650 10 T 675 10 T 700 10 T 725 10 T 750 10 T 775 10 T 800 10 T 825 10 T 850 10 T 875 10 T 900 10 T 925 10 T 950 10 T 975 10 T 1000 10'
      stroke='black'
      strokeWidth='3'
      fill='transparent'
    />
  </svg>
);


function Content() {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth='lg'>
        <Typography variant='h4' component='h2' sx={{ mb: 2 }}>
          The capabilities beyond imagination
        </Typography>
        <Grid container spacing={2}>
          {contentData.map((section, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <SectionCard
                title={section.title}
                items={section.items}
                bgColor={section.bgColor}
                icon={section.icon}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant='h4' component='h2' sx={{ mt: 4, mb: 2 }}>
          Experience gathered so far
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ display: 'flex', alignItems: 'stretch' }}
        >
          <Grid item xs={12} md={7} sx={{ display: 'flex' }}>
            <Box
              sx={{
                p: 2,
                borderRadius: 5,
                bgcolor: '#14181b',
                color: 'white',
                flexGrow: 1,
              }}
            >
              <VerticalLinearStepper />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
            <Box
              sx={{
                width: '100%',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Skills />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'black' }} />
        <Grid container spacing={2} alignItems='stretch'>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: '1px solid gray',
                borderRadius: 5,
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={blacklines}
                alt='Black Lines'
                style={{
                  width: '120%',
                  height: '120%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                }}
              />
              <Typography
                variant='h3'
                component='p'
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  p: 2,
                }}
              >
                Let me tell you more about me and stuff
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: { xs: 0, md: 0 },
                height: '100%',
              }}
            >
              <Typography
                variant='body1'
                align='justify'
                sx={{
                  pr: { xs: 0, md: 0 },
                  mb: 1, // Reduce the bottom margin
                }}
              >
                Hey everyone! I'm an experienced Engineer with over 8 years
                under my belt in the world of product design and development,
                especially in the consumer appliance product. I've been all
                about creating awesome, cutting-edge kitchen and home appliances
                that people love. I've led some amazing cross-functional teams,
                taking ideas from sketches to full-blown products that hit the
                market with a bang.
              </Typography>
              <Typography
                variant='body1'
                align='justify'
                sx={{
                  pr: { xs: 0, md: 0 },
                  mt: 1, // Reduce the top margin
                }}
              >
                I geek out over researching and keeping up with market trends,
                and I love turning customer feedback into cool, innovative
                features. My goal is always to deliver top-notch performance, a
                great user experience, and keep things cost-effective. So yeah,
                if it plugs in and makes your life easier, there's a good chance
                I've had a hand in it!
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            my: 4,
          }}
        >
          <Divider sx={{ flexGrow: 1, borderColor: 'black' }} />
          <Chip
            label='Take a look at these projects'
            sx={{
              mx: 2,
              fontSize: '1.4rem',
              backgroundColor: 'black',
              color: 'white',
            }}
          />
          <Divider sx={{ flexGrow: 1, borderColor: 'black' }} />
        </Box>
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ActionAreaCard
                image={card.image}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ width: '100%', maxWidth: '1000px', mx: 'auto', my: 4 }}>
          <SquigglyLine />
        </Box>
        <InfoSection />
        <ImageGallery />
        <ImageGallery2 style={{ marginTop: '-10px' }} />
        <Box sx={{ mt: 8 }}>
          <MusicPlayer />
        </Box>
      </Container>
    </Box>
  );
}

export default Content;
