import { Hero } from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import Layout from "./components/Layout/Layout";
import Houses from "./components/pages/Houses";
import  {QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from "react-toastify";
import {ReactQueryDevtools} from 'react-query/devtools'
import "react-toastify/dist/ReactToastify.css"
import UserLogin from "./components/UserLogin/UserLogin.jsx";
import UserRegister from "./components/UserLogin/UserRegister.jsx";


function App() {
  const queryClient = new QueryClient();

  return (
        <Routes>
         
          <Route element={<Layout />} />
          <Route path="/property" element={<Houses />} />
          <Route path="/" element={<Hero />} />
          <Route path="/loginuser" element={<UserProfile />} />
          <Route path="/registeruser" element={<UserRegister />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
        
        <ToastContainer/>
        <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
  );
}

export default App;
