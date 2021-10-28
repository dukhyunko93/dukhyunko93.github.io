import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
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
            <MenuIcon />
          </IconButton>
            <div>
              <Typography variant="h6" >
                Duke Dukhyun Ko
              </Typography>
              <nav color="inherit">About</nav>
              <nav color="inherit">Work</nav>
              <nav color="inherit">Project</nav>
              <nav color="inherit">Contact Me</nav>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
