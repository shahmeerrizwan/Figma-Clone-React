import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import FirstSection from './Components/Sections/FirstSection';
import ClientSection from './Components/Sections/ClientSection';
import Card1 from './Components/Sections/Card1';
import SecsondSection from './Components/Sections/SecsondSection';
import ThirdSection from './Components/Sections/ThirdSection';


function App() {
  return (
    <div >
      <Navbar />
      <FirstSection />
      <ClientSection />
      <Card1 />
      <SecsondSection />
      <ThirdSection />
    </div>
  );
}

export default App;
