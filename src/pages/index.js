import CustomCard from '@/components/CustomCard';
import NavBar from '@/components/NavBar';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LizardCard from '@/components/LizardCard';
import CustomizedBreadcrumbs from '@/components/CustomizedBreadcrumbs';
import Pagination from '@mui/material/Pagination';
import IndeterminateCheckbox from '@/components/IndeterminateCheckbox';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box mt={2} ml={2}>
        <CustomizedBreadcrumbs />
      </Box>
      <Box
        sx={{
          width: '1440px',
          margin: '0 auto',
          display: 'flex',
          gap: '20px',
          placeItems: 'center',
          marginTop: '20px',
        }}
      >
        <CustomCard />
        <IndeterminateCheckbox />

        <Box>
          <Typography variant='h1'>I am h1</Typography>
          <Typography variant='h2'>I am h2</Typography>
          <Typography variant='h3'>I am h3</Typography>
          <Typography variant='h4'>I am h4</Typography>
          <Typography variant='h5'>I am h5</Typography>
        </Box>
        <Box>
          <Button variant='contained'>Button</Button>
          <Button variant='oulined'>Button</Button>
          <Button startIcon={<ArrowRightAltIcon />} variant='oulined'>
            Button
          </Button>
          <Button endIcon={<ArrowRightAltIcon />} variant='contained'>
            Button
          </Button>
        </Box>
        <LizardCard />
      </Box>
    </>
  );
}
