import Landing from "./LandingPage/landing";
import {Routes,Route} from 'react-router-dom';
import SignUp from "./Authentication/SignUp/signup";
import Login from "./Authentication/Login/login";
import PopQuizzer from "./HomePage/Home";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/Home" element={<PopQuizzer />}/>
      </Routes>
      
    </div>
  )
}
export default App;

