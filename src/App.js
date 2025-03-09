import Landing from "./LandingPage/landing";
import {Routes,Route} from 'react-router-dom';
import SignUp from "./Authentication/signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}
export default App;

