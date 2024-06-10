import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { Dialog, DialogContent } from '@mui/material';

// Import images
import image1 from '../assets/gallery/image1.png';
import image2 from '../assets/gallery/image2.png';
import image3 from '../assets/gallery/image3.png';
import image4 from '../assets/gallery/image4.png';
import image5 from '../assets/gallery/image5.png';
import image6 from '../assets/gallery/image6.png';
import image7 from '../assets/gallery/image7.png';
import image8 from '../assets/gallery/image8.png';
import image20 from '../assets/gallery/image20.png';
import image21 from '../assets/gallery/image21.png';
import image22 from '../assets/gallery/image22.png';
import image23 from '../assets/gallery/image23.png';
import image24 from '../assets/gallery/image24.png';
import image25 from '../assets/gallery/image25.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  // Add more image imports as needed
];

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-100%)); }
`;

const ImageWrapper = styled('div')(({ duration }) => ({
  display: 'flex',
  whiteSpace: 'nowrap',
  animation: `${scroll} ${duration}s linear infinite`,
  width: '100%',
}));

const ImageItem = styled('img')({
  height: '250px',
  marginRight: '10px',
  cursor: 'pointer',
  marginBottom: '-20px',
});

function ImageGallery() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const totalWidth = images.length * 250 + (images.length - 1) * 10; // Adjust based on image height and margin
    const screenWidth = window.innerWidth;
    const baseDuration = 20; // Fixed duration for scrolling
    const animationDuration = (totalWidth / screenWidth) * baseDuration;
    setDuration(animationDuration);
  }, []);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: '100vw',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        py: 4,
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <ImageWrapper duration={duration}>
        {images.map((image, index) => (
          <ImageItem
            src={image}
            alt={`Gallery Image ${index + 1}`}
            key={index}
            onClick={() => handleClickOpen(image)}
          />
        ))}
      </ImageWrapper>
      <Dialog open={open} onClose={handleClose} maxWidth='md'>
        <DialogContent>
          <img src={selectedImage} alt='Selected' style={{ width: '100%' }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ImageGallery;
