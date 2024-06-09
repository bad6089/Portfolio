import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Slider,
  IconButton,
  Stack,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  PauseRounded,
  PlayArrowRounded,
  VolumeUpRounded,
  VolumeDownRounded,
} from '@mui/icons-material';
import musicFile from '/src/assets/music/Lost Control.mp3';

const MusicPlayer = () => {
  const theme = useTheme();
  const audioRef = useRef(new Audio(musicFile));
  const duration = 200; // seconds (or you can fetch this from the audio file)
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(true);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  const handlePlayPause = () => {
    if (paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPaused(!paused);
  };

  const handleTimeUpdate = () => {
    setPosition(audioRef.current.currentTime);
  };

  const handleSliderChange = (_, value) => {
    audioRef.current.currentTime = value;
    setPosition(value);
  };

  React.useEffect(() => {
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const mainIconColor = '#fff';
  const lightIconColor = 'rgba(255,255,255,0.4)';

  return (
    <Card
      sx={{
        color: '#fff',
        bgcolor: '#001d3d',
        borderRadius: 5,
        padding: 2,
        boxShadow: 'none',
        marginTop: '-50px',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CardContent
            sx={{ border: '', borderRadius: 1, padding: 2, color: '' }}
          >
            <Typography variant='h3' component='h1' sx={{ fontWeight: 'bold' }}>
              Birth of AI music
            </Typography>
            <Typography sx={{ fontWeight: '' }}>
              I have always found great joy in listening to music, dreaming of
              creating my own songs one day. Recently, I discovered Suno AI, a
              tool that lets me generate music by providing lyrics, a genre, and
              choosing instruments. New way to bring my musical ideas to life.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 2,
              padding: 2,
              bgcolor: '#dc2f02',
              color: '#fff',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ ml: 1.5, minWidth: 0 }}>
                  <Typography variant='h5' noWrap>
                    <b>Lost Control</b>
                  </Typography>
                  <Typography noWrap letterSpacing={-0.25}>
                    Created with &mdash; Suno.ai
                  </Typography>
                </Box>
              </Box>
              <Slider
                aria-label='time-indicator'
                size='small'
                value={position}
                min={0}
                step={1}
                max={audioRef.current.duration || duration}
                onChange={handleSliderChange}
                sx={{
                  color: '#fff',
                  height: 4,
                  '& .MuiSlider-thumb': {
                    width: 8,
                    height: 8,
                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                    '&::before': {
                      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                    },
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === 'dark'
                          ? 'rgb(255 255 255 / 16%)'
                          : 'rgb(0 0 0 / 16%)'
                      }`,
                    },
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.28,
                  },
                }}
              />
              <Stack
                direction='row'
                spacing={1}
                sx={{ px: 1, mb: 1, justifyContent: 'center' }}
              >
                <IconButton
                  aria-label={paused ? 'play' : 'pause'}
                  onClick={handlePlayPause}
                >
                  {paused ? (
                    <PlayArrowRounded
                      sx={{ fontSize: '3rem' }}
                      htmlColor={mainIconColor}
                    />
                  ) : (
                    <PauseRounded
                      sx={{ fontSize: '3rem' }}
                      htmlColor={mainIconColor}
                    />
                  )}
                </IconButton>
              </Stack>
              <Stack
                spacing={2}
                direction='row'
                sx={{ mb: 1, px: 1 }}
                alignItems='center'
              >
                <VolumeDownRounded htmlColor={lightIconColor} />
                <Slider
                  aria-label='Volume'
                  defaultValue={30}
                  onChange={(_, value) => {
                    audioRef.current.volume = value / 100;
                  }}
                  sx={{
                    color: '#fff',
                    '& .MuiSlider-track': {
                      border: 'none',
                    },
                    '& .MuiSlider-thumb': {
                      width: 24,
                      height: 24,
                      backgroundColor: '#fff',
                      '&:before': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                      },
                      '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: `0px 0px 0px 8px ${
                          theme.palette.mode === 'dark'
                            ? 'rgb(255 255 255 / 16%)'
                            : 'rgb(0 0 0 / 16%)'
                        }`,
                      },
                    },
                  }}
                />
                <VolumeUpRounded htmlColor={lightIconColor} />
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MusicPlayer;
