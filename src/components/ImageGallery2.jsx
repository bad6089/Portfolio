import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { Dialog, DialogContent } from '@mui/material';

const images = [
  '/src/assets/gallery/image9.png',
  '/src/assets/gallery/image10.png',
  '/src/assets/gallery/image11.png',
  '/src/assets/gallery/image12.png',
  '/src/assets/gallery/image13.png',
  '/src/assets/gallery/image14.png',
  '/src/assets/gallery/image15.png',
  '/src/assets/gallery/image16.png',
  // Add more image paths as needed
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
