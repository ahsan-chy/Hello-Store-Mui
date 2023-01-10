import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider'; 
import GridViewIcon from '@mui/icons-material/GridView';
import HttpsIcon from '@mui/icons-material/Https';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { NavLink } from 'react-router-dom';
import "../../assets/css/profile.css"
import { Typography } from '@mui/material';

const SideBar = ({user}) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 230, bgcolor: 'background.paper' }}>
          <Stack>
          <Avatar
            alt="Remy Sharp"
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            sx={{ width: 66, height: 66 }}
            style={{marginLeft:'auto', marginRight:'auto', marginBottom:4}}
          />
          <Typography variant='h5' sx={{color:"#001e3c", my:3, textAlign:"center", fontSize: 19, textTransform: 'uppercase'}}>
            {user.state.username}</Typography>
        </Stack>
            <List component="nav" >
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <GridViewIcon />
                </ListItemIcon>
                <NavLink to="dashboard" className="dashboard-link">
                    <ListItemText primary="Dashboard" />
                </NavLink>    
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <LocalMallIcon />
                </ListItemIcon>
                <NavLink to="orderdetails" className="dashboard-link">
                    <ListItemText primary="Orders" />
                </NavLink>
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemIcon>
                  <RememberMeIcon />
                </ListItemIcon>
                <NavLink to="updateprofile" className="dashboard-link">
                    <ListItemText primary="Profile Update" />
                </NavLink>
              </ListItemButton>
              <Divider />
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon>
                  <HttpsIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" className="dashboard-link" />
              </ListItemButton>

            </List>
          </Box>
    </>
  )
}

export default SideBar
