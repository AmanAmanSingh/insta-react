
import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import HeaderInsta from './component/header/header';
import LoginPage from './component/loginpage/loginPage';
import InstaCard from './component/instacard/instacard';
import InstaClone from './component/instaclone';
import UploadPost from './component/uploadpost/uploadpost';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/insta-main' element={<InstaClone />} />
          <Route path='/uploadpost' element={<UploadPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
