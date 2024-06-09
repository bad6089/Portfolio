import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { Dialog, DialogContent } from '@mui/material';

// Import images
import image9 from '../assets/gallery/image9.png';
import image10 from '../assets/gallery/image10.png';
import image11 from '../assets/gallery/image11.png';
import image12 from '../assets/gallery/image12.png';
import image13 from '../assets/gallery/image13.png';
import image14 from '../assets/gallery/image14.png';
import image15 from '../assets/gallery/image15.png';
import image16 from '../assets/gallery/image16.png';

const images = [
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  // Add more image imports as needed
];

const scroll = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(calc(0)); }
`;

const ImageWrapper = styled('div')(({ duration }) => ({
  display: 'flex',
  whiteSpace: 'nowrap',
  animation: `${scroll} ${duration}s linear infinite`,
}));

const ImageItem = styled('img')({
  height: '250px',
  marginRight: '10px',
  marginTop: '-30px', // Reduce the top margin
  marginBottom: '10px', 
});

function ImageGallery2() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    const totalWidth = images.length * 1000 + (images.length - 1) * 20; // Width of all images + margin
    const screenWidth = window.innerWidth;
    const baseDuration = 3; // Adjust this value to speed up or slow down the scrolling
    const animationDuration = (totalWidth / screenWidth) * baseDuration; // Base duration multiplied by ratio of total width to screen width
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
    <Box sx={{ overflow: 'hidden', whiteSpace: 'nowrap', py: 4 }}>
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

export default ImageGallery2;
