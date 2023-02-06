
import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import HeaderInsta from './component/header/header';
import LoginPage from './component/loginpage/loginPage';
import InstaCard from './component/instacard/instacard';
import InstaClone from './component/instaclone';
import UploadPost from './component/uploadpost/uploadpost';
import Register from './component/register/register';
import Protected from './component/protectedRoutes/protected';
import Logout from './component/logout/logout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/insta-main' element={<Protected> <InstaClone /> </Protected>} />
          <Route path='/uploadpost' element={<Protected> <UploadPost /> </Protected>} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
