import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Profile} from './components/profile/profile.js'
import {UpdateProfile} from './components/profile/updateProfile.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/updateProfile" element={<UpdateProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
