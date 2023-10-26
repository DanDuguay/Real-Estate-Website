import { Hero } from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import UserLogin from "./components/UserLogin/UserLogin.jsx";
import UserRegister from "./components/UserLogin/UserRegister.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/loginuser" element={<UserLogin />} />
        <Route path="/registeruser" element={<UserRegister />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
