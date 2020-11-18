import React from 'react';
import {Typography} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig';
import Navbar from './components/Navbar';

function App() {


  return (
    
    <ThemeProvider theme={theme}> 
     <CssBaseline />
      <Navbar/>
      <Typography variant='h1' color="primary">
        Image Here
      </Typography>
    </ThemeProvider>


  );
}

export default App;
