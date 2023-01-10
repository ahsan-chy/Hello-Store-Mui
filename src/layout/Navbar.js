import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../redux/actions/userAction';
import { useState } from 'react';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../assets/css/navbar.css"
import { toast } from 'react-toastify';

const pages = [{
  title: "Home",
  path: "/",
},
{
  title: "Store",
  path: "/store",
}];

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  let { user, cart } = useSelector((state) => ({ ...state }));

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
const handleLogout = () => {
  // console.log(logout())
  localStorage.removeItem('jwt')
  dispatch(signOut())
  navigate("/login")
  toast.success('Logout Successfully', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

  return (
    <AppBar position="static" style={{backgroundColor:"#001E3C"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
              src="https://cdn-icons-png.flaticon.com/512/888/888865.png"
              alt="logo"
              style={{ width: "27px" }}
            /> &nbsp;
            <Link to="/" style={{
              color: '#FFF',
              textDecoration: 'none'
              }}>
            <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              // color: '#FFF',
              textDecoration: 'none',
            }}
          > 
            Hello Store
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link to={page.path}>
                  <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.path} key={page.title}>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
              </Link>
            ))}
          </Box>
          {!user ? 
          <Box sx={{display:'flex'}}>
            {!cart ?
              <Box>
                <Link to="/cart"   className="cart-icon-btn">
              <IconButton size="large" aria-label="show cart products quantity" color="inherit">
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              </Link>
            </Box>
            :
            <Box>
              <Link to="/cart"   className="cart-icon-btn">
              <IconButton size="large" aria-label="show cart products quantity" color="inherit">
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
                </Link>
            </Box>
            }
            <MenuItem>
            <Link to="/register">
            <Typography sx={{textDecoration:'none', color:"#FFF !important"}}>Sign Up</Typography>
            </Link>
          </MenuItem>
          </Box>
            :
          <Box sx={{ flexGrow: 0, display:'flex' }}>
            <Box sx={{mx:2}}>
              <Link to="/cart"  className="cart-icon-btn">
              <IconButton size="large" aria-label="show cart products quantity" color="inherit">
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              </Link>
            </Box>
            <Tooltip title="Open Profile DropDown">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" />
              </IconButton>
              
            </Tooltip>
            <Menu
              sx={{ mt: '50px', mr:'10px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" >
                    <Link to="/profile/orderdetails">Profile</Link>
                  </Typography>

                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={handleLogout}>LogOut</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
        }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;