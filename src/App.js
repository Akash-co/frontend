
import { Button } from '@chakra-ui/react';
import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Chatpage from './Pages/Chatpage';

function App() {
  return (
    <div className="App">
    
      <Route path="/" component={Homepage} exact/>
      <Route path="/chats" component={Chatpage} />  

     
    </div>
  );
}

export default App;
