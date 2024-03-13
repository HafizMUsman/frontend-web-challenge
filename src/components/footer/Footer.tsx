'use client';

import arrow from '@/assets/images/arrow.png';
import { useConversationData } from '@/context/conversationContext';
import { Box, Button, Theme, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

const Footer: React.FC = () => {
  const isSmScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );
  const { conversationData } = useConversationData();
  return (
    <Box
      minHeight={{ xs: '166px', sm: '116px' }}
      bgcolor={{ xs: 'rgba(9, 9, 13, 0.96)', sm: '#09090D' }}
      px={{ xs: '23px', sm: '32px' }}
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      sx={{
        borderTopStyle: { sm: 'solid' },
        borderTopWidth: '1px',
        borderTopColor: '#3A3940',
      }}
      justifyContent={{ xs: 'center', sm: 'space-between' }}
      alignItems="center">
      <Button
        variant="outlined"
        sx={{
          color: 'white',
          borderRadius: '32px',
          borderColor: '#3A3940',
          width: { xs: '100%', sm: '243px' },
          minHeight: '51px',
        }}>
        Back
      </Button>

      <Button
        onClick={() => console.log('🚀 ~ conversationData:', conversationData)}
        variant="contained"
        sx={{
          mt: { xs: '17px', sm: '0px' },
          borderRadius: '32px',
          width: { xs: '100%', sm: '243px' },
          minHeight: '51px',
        }}
        style={{
          background: 'white',
        }}
        endIcon={
          !isSmScreen ? (
            <Image width={20} height={20} src={arrow} alt="" />
          ) : null
        }>
        <Typography
          mr={{ sm: '123px' }}
          sx={{
            background: '-webkit-linear-gradient(90deg, #523FD7, #FF7DFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
          Next
        </Typography>
      </Button>
    </Box>
  );
};

export default Footer;
