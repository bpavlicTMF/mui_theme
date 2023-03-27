import CustomCard from '@/components/CustomCard';
import NavBar from '@/components/NavBar';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          width: '1440px',
          margin: '0 auto',
          display: 'grid',
          placeItems: 'center',
          marginTop: '100px',
        }}
      >
        {/* <Typography variant='h1'>I am h1</Typography>
        <Typography variant='h2'>I am h2</Typography>
        <Typography variant='h3'>I am h3</Typography>
        <Typography variant='h4'>I am h4</Typography>
        <Typography variant='h5'>I am h5</Typography>
        <Button variant='contained'>Button</Button> */}
        <CustomCard />
      </Box>
    </>
  );
}
