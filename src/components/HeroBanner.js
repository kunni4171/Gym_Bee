import React from 'react'
import { Box, Stack, Typography,Button} from '@mui/material';
import HeroBannerImage from '../assets/assets/images/Premium Vector _ Abstract colorful man working out with dumbbell.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '230px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Gym_Bee </Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    Decide, Commit and  <br />
    Succeed
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb="4">
      Check out the most effective exercises personalized to you
    </Typography>
    <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:'#ff2625',padding:'11px'}}>Explore Exercise</Button>
    <Typography fontWeight={600} color="#080808" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
    Do It!
  </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />

  </Box>  )
}

export default HeroBanner