import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

export default function MyAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Button variant="contained" href='/' endIcon={<HomeIcon fontSize="large"/>}/>
            
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h1 className="container d-flex align-items-center justify-content-center">Employee Data</h1>
          </Typography>
          <Button color="inherit">Taswik Sri</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}