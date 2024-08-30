
import './App.css';

import Name from './component/Name/Name';
import Section from './component/Section/Section';
import Description from './component/Description/Description';


function App(){
  const userInformation = {
firstName: 'Regiemon',
lastName: 'Marcelo',
Section: "IT3A",
Description:"BAKIT KASI MAY 7AM CLASS HAYS"

  }

  return (
    <div className="App"> 
    <Name firstName={userInformation.firstName}lastName={userInformation.lastName}/>
    <Section Section={userInformation.Section}/>
    <Description Description={userInformation.Description}/>

    
    </div>
  );
}

export default App;
