import React from 'react';
import './App.css';

// Import dei vari material-ui
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';


// I miei component
import HomePage from '../components/HomePage';

// Gatsby
import SEO from "../components/seo"

let theme = createMuiTheme({
  palette: {
    primary: { main: '#ffd000' },
    secondary: { main: '#40bd47' },
  },
  status: {
    danger: 'orange',
  },
});
theme = responsiveFontSizes(theme);


function App() {
  // L'equivalente del main
  return (
      <div>
        <SEO title="Home" />
        <ThemeProvider theme={theme}>
          <HomePage/>
        </ThemeProvider>
      </div>
  );
}

export default App;