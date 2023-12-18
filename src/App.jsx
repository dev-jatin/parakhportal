import React from 'react';
import {
  ChakraProvider, theme,
} from '@chakra-ui/react';

import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';


import ScrollToTop from './Components/Helper/ScrollToTop';
import Assesmentquiz from './Components/Assesmentquiz';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
    
      <ScrollToTop/>
     
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/quiz' element={<Assesmentquiz/>}/>
         
      
        </Routes>
      </Router>
     
    </ChakraProvider>
  );
}

export default App;
