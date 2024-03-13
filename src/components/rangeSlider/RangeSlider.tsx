import { useConversationData } from '@/context/conversationContext';
import { Badge, Box, Slider, Typography } from '@mui/material';
import { useState } from 'react';

const RangeSlider: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(100);
  const { conversationData, setConversationData } = useConversationData();

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setSliderValue(newValue);
      setConversationData({ ...conversationData, words: newValue });
    }
  };
  return (
    <>
      <Badge
        sx={{
          bgcolor: '#523FD7',
          color: 'white',
          borderRadius: '12px',
          minWidth: '34px',
          px: '4px',
          minHeight: '22px',
          mb: '-14px',
          ml: { xs: `${sliderValue * 0.27}px`, sm: `${sliderValue * 0.3}px` },
          '@media (max-width: 350px)': {
            ml: `${sliderValue * 0.255}px`,
          },
        }}>
        {sliderValue}
      </Badge>

      <Box
        height="53px"
        borderRadius="12px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#09090D"
        maxWidth={{ xs: '343px', sm: '381px' }}>
        <Typography fontSize="14px" fontWeight="500" color="#D0CFD1">
          100
        </Typography>
        <Slider
          defaultValue={sliderValue}
          value={sliderValue}
          onChange={handleChange}
          min={100}
          max={1000}
          step={10}
          sx={{
            maxWidth: { xs: '260px', sm: '290px' },
            mx: '8px',
            color: 'transparent',
            height: '5px',
            '& .MuiSlider-thumb': {
              position: 'relative',
              height: '20px',
              width: '20px',
              backgroundColor: 'transparent',
              borderRadius: '50%',
              border: '2px solid #FF7DFF',
              boxSizing: 'border-box',
              '&::before': {
                height: '10px',
                width: '10px',
                borderRadius: '50%',
                backgroundColor: '#FF7DFF',
              },
              '&:hover, &.Mui-active': {
                boxShadow: '0px 0px 0px 5px rgba(255, 255, 255, 0.16)',
              },
            },
            '& .MuiSlider-track': {
              height: '5px',
              borderRadius: '5px',
              backgroundImage: 'linear-gradient(to right, #523FD7, #FF7DFF)',
            },
            '& .MuiSlider-rail': {
              height: '5px',
              borderRadius: '5px',
              bgcolor: '#3A3940',
            },
          }}
        />
        <Typography fontSize="14px" fontWeight="500" color="#D0CFD1">
          1000
        </Typography>
      </Box>
    </>
  );
};

export default RangeSlider;
