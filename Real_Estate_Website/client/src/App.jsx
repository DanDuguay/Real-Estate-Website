import { Hero } from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import Layout from "./components/Layout/Layout";
import Houses from "./components/pages/Houses";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";
import UserLogin from "./components/Login/UserLogin.jsx";
import UserRegister from "./components/Login/UserRegister.jsx";
// import CreateProperty from "./components/PropertyCreate/CreateProperty";
import Property from "./components/pages/Property";
import UpdatePropertyForm from "./components/PropertyUpdate/UpdatePropertyForm";

import BrokerPage from "./components/Brokers/pages/BrokerPage.jsx";
import BrokerCreate from "./components/Brokers/pages/BrokerCreate.jsx";
import BrokerUpdate from "./components/Brokers/pages/BrokerUpdate.jsx";
import BrokerDelete from "./components/Brokers/pages/BrokerDelete.jsx";
import SeeBrokers from "./components/Brokers/pages/BrokerRead.jsx";
import BrokerProfile from "./components/Brokers/pages/BrokerProfile.jsx";

import Addproperty from "./components/AddProperty/Addproperty.jsx";
import PropertyOffer from "./components/PropertyOffer/PropertyOffer.jsx";
import BrokerLogin from "./components/Login/BrokerLogin.jsx";
import RequireAuth from "./components/Login/RequireAuth.jsx";
import AdminLogin from "./components/Login/AdminLogin.jsx";
import Unauthorized from "./components/Login/Unauthorized.jsx";
import MortgageCalculator from "./components/MortgageCalculator/MortgageCalculator.jsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Routes for all */}
      <Routes>
        <Route element={<Layout />} />
        <Route path="/property">
          <Route index element={<Houses />} />
          <Route path=":propertyId" element={<Property />} />
        </Route>
        <Route path="/" element={<Hero />} />
        <Route path="/user/loginuser" element={<UserLogin />} />
        <Route path="/user/loginbroker" element={<BrokerLogin />} />
        <Route path="/user/loginadmin" element={<AdminLogin />} />
        <Route path="/user/registeruser" element={<UserRegister />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          element={<RequireAuth allowedRoles={["User", "Broker", "Admin"]} />}
        >
          {/* Routes for users */}
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/mortgagecalculator" element={<MortgageCalculator />} />
          <Route path="/brokerpage" element ={<BrokerPage />} />
          <Route path="/brokerread" element={<SeeBrokers />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["Broker", "Admin"]} />}>
          {/* Routes for brokers */}
          <Route path="/propertyOffer" element={<PropertyOffer />} />
          <Route path="/property/update/:id" element={<UpdatePropertyForm />} />
          <Route path="/property/create" element={<Addproperty />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
          {/*Routes for Admin only */}
          <Route path="/brokercreate" element={<BrokerCreate />} />
          <Route path="/brokerupdate/:brokerId" element={<BrokerUpdate />} />
          <Route path="/brokerdelete/:brokerId" element={<BrokerDelete />} />
          <Route path="/broker/:brokerId" element={<BrokerProfile />} />
        </Route>
      </Routes>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
