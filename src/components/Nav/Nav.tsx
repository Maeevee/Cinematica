import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../utils/navItems";
import styles from "./Nav.module.css";
import { useState } from "react";


const drawerWidth = 240;

const Nav = () => {
    const [scrolled] = useState(false);

    const location = useLocation();

    // useEffect(() => {
    //     const onScroll = () => {
    //         if (window.scrollY > 10) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };
    
    //     window.addEventListener('scroll', onScroll);
    
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);

//   const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography className={styles.logo} variant="h6" sx={{ my: 2 }}>
        CINEMATICA
      </Typography>
      <Divider />
      <List className={styles.drawer}> 
        {navItems.map(({id, text, href}) => (
          <ListItem className={location.pathname === `/${href}` ? styles.activeNavItem : ""} key={id} disablePadding>
            <Link to={href}>{text}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  console.log(location.pathname);

//   const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className={`${scrolled ? styles.scrolled : ""} ${styles.navBar}`} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className={styles.logo}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CINEMATICA
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({id, text, href}) => (
              <Button key={id} sx={{ color: '#fff' }}>
                <Link  className={`${location.pathname === `/${href}` ? styles.activeNavItem : ""} ${styles.nav}`} to={href}>{text}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer 
        //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Nav


// import { Link } from "react-router-dom";
// import { navItems } from "../../utils/navItems";
// import styles from "./Nav.module.css";
// import { useEffect, useState } from "react";

// const Nav = () => {

//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const onScroll = () => {
//             if (window.scrollY > 10) {
//                 setScrolled(true);
//             } else {
//                 setScrolled(false);
//             }
//         };
    
//         window.addEventListener('scroll', onScroll);
    
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     return (
//         <div className={`${scrolled ? styles.scrolled : ""} ${styles.navBar}`}>
//             <h1 className={styles.logo}>CINEMATICA</h1>
//             <nav className={styles.nav}>{navItems.map(({id, text, href}) => <Link to={href} key={id}>{text}</Link>)}</nav>
//         </div>
//     )
// }

// export default Nav