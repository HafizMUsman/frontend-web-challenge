import avatarImage from '@/assets/images/avatar.png';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar, Box, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={1000}
      minHeight={{ md: '111px' }}
      bgcolor={{ xs: '#12111A', sm: '#09090D' }}
      px={{ xs: '20px', sm: '32px' }}
      pt={{ xs: '36px', sm: '32px' }}
      pb={{ sm: '30px' }}
      display="flex"
      sx={{
        borderBottomStyle: { sm: 'solid' },
        borderBottomWidth: '1px',
        borderBottomColor: '#3A3940',
      }}
      justifyContent="space-between">
      <Box display="flex">
        <Box
          height="47px"
          width="47px"
          borderRadius="12px"
          bgcolor="#3A39404D"
          display="flex"
          justifyContent="center"
          alignItems="center">
          <KeyboardBackspaceIcon fontSize="medium" sx={{ color: 'white' }} />
        </Box>
        <Box ml="16px">
          <Typography
            fontSize="16px"
            fontWeight="500"
            color="white"
            sx={{
              '@media (max-width: 350px)': {
                fontSize: '13.5px',
              },
            }}>
            Media management
          </Typography>
          <Typography
            fontSize="16px"
            fontWeight="400"
            color={'#D0CFD1'}
            sx={{
              '@media (max-width: 350px)': {
                fontSize: '12px',
              },
            }}>
            Draft campaign
          </Typography>
        </Box>
        <DriveFileRenameOutlineOutlinedIcon
          fontSize="medium"
          sx={{ color: 'white', ml: '10px' }}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <Box
          mr={{ sm: '12px' }}
          alignItems="end"
          display={{ xs: 'none', sm: 'flex' }}
          flexDirection="column">
          <Typography fontSize="16px" fontWeight="500" color="white">
            Jane Cooper
          </Typography>
          <Typography
            fontSize="16px"
            fontWeight="300"
            color={'#FF7DFF'}
            sx={{ textDecoration: 'underline' }}>
            Change profile
          </Typography>
        </Box>
        <Avatar
          alt="Jane Cooper"
          src={avatarImage.src}
          sx={{ borderRadius: '12px' }}
        />
      </Box>
    </Box>
  );
};

export default Header;
