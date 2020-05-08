import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Messages from './component/Messages/Messages';
import { Route } from 'react-router-dom';



function App(props) {
  
  return (
    
    <div className="App">
      <Header/>
      <div className='info'>
        
        <Navbar/>
        <Route path='/profile' render={() => <Profile
        store={props.store}
        
        
        />} />
        <Route path='/messages' render={() => <Messages
        store={props.store}
        />} />
      </div>
    </div>
    
  );
}

export default App;
