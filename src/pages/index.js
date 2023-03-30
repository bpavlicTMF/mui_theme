import CustomCard from '@/components/CustomCard';
import NavBar from '@/components/NavBar';
import { Box, Paper, TextField, Typography, styled } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LizardCard from '@/components/LizardCard';
import CustomizedBreadcrumbs from '@/components/CustomizedBreadcrumbs';
import IndeterminateCheckbox from '@/components/IndeterminateCheckbox';
import CustomAccordion from '@/components/CustomAccordion';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box mt={2} ml={2}>
        <CustomizedBreadcrumbs />
      </Box>
      <Box sx={{ width: '1440px', margin: '0 auto' }}>
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
            <Button startIcon={<ArrowRightAltIcon />} variant='oulined'>
              Button
            </Button>
            <Button endIcon={<ArrowRightAltIcon />} variant='contained'>
              Button
            </Button>
          </Box>
          <LizardCard />
          <Box
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
          >
            <Paper
              elevation={3}
              sx={{ padding: 2, display: 'grid', placeItems: 'center' }}
            >
              <TextField label='First Name' variant='outlined' />
              <TextField label='Last Name' variant='outlined' />
              <Button variant='contained'>apply</Button>
            </Paper>
          </Box>
        </Box>
        <Box mt={2}>
          <CustomAccordion />
        </Box>
      </Box>
    </>
  );
}
