import React, { useState } from 'react';
import './App.css';
import HomePageComponent from './components/HomePageComponent';

function App() {
  const [darkM, setDarkM] = useState<boolean>(false);

    const toggleDL = () => {
        setDarkM(!darkM);
    }

    const lBG: string = "lightbg min-h-full"
    const dBG: string = "darkbg min-h-full"


  return (
   <>
    <HomePageComponent />
   </>
    
  );
}

export default App;
