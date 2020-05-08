import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Profile from './component/Profile/Profile';
import Messages from './component/Messages/Messages';
import { Route, BrowserRouter } from 'react-router-dom';



function App(props) {
  
  return (
    
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
