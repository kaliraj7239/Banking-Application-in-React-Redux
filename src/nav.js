import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
//import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import App4 from './home';
//import AdbIcon from '@mui/icons-material/Adb';
import { BrowserRouter,Routes,NavLink,Route } from 'react-router-dom';
import App from './App';
import App1 from './App1';
import App5 from './App5';
import Bank1 from './Credit';
import App6 from './Credit';
//import MediaControlCard from './music1';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <BrowserRouter>
   <AppBar style={{backgroundColor:'#ffff',}}>
          <Toolbar disableGutters>
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: 'none',
              borderWidth:'1',
              color: 'white',
              textDecoration: 'none',
            }}
            >
                    <div class="logo">
                    <h1 >KALIRAJ A</h1>
                    </div>         
            </Typography>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'san-serif',
              fontWeight: 70,
              letterSpacing: '.3rem',
              color: 'inherit',
           
              textDecoration: 'none',
            }}
            >
            <div class="logo">
                    <h1 >KALIRAJ A</h1>
                </div>         

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <NavLink to = '/home'exact className='nv'> <Button variant='contained' color='primary' 
              
                sx={{ my: 2, color: 'white', display: 'block',marginLeft:'100px',borderRadius:"35px" }}
              >
               Home    
              </Button></NavLink>
          <NavLink to = '/App1'exact className='nv'> <Button variant='contained' color='primary' 
              
                sx={{ my: 2, color: 'white', display: 'block',marginLeft:'25px',borderRadius:"35px" }}
              >
               Register    
              </Button></NavLink>
             <NavLink to = '/App' className='nv'> 
             <Button  variant='contained' color='primary'
             sx={{ my: 2, color: 'white', display: 'block',marginLeft:'25PX',borderRadius:"35px" }}
            >
             ATM
            </Button></NavLink>
            <NavLink to = '/App5' className='nv'> 
             <Button  variant='contained' color='primary'
             sx={{ my: 2, color: 'white', display: 'block',marginLeft:'25PX',borderRadius:"35px" }}
            >
             BANK
            </Button></NavLink>
            <NavLink to = '/Credit' className='nv'> 
             <Button  variant='contained' color='primary'
             sx={{ my: 2, color: 'white', display: 'block',marginLeft:'25PX',borderRadius:"35px" }}
            >
             App
            </Button></NavLink>
            </Box>
        </Toolbar>
        </AppBar>
    <Routes>
    
    <Route exact path='/home' element={<App4/>} />
    <Route exact path='/Credit' element={<App6/>} />

        <Route exact path='/App1' element={<App1/>} />
        <Route exact path='/App' element={<App/>}/>
        <Route exact path='/App5' element={<App5/>}/>


    </Routes> 
    </BrowserRouter>
  );
};
export default Navigation;

