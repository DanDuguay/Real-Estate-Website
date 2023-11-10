import { Hero } from "./components/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import Layout from "./components/Layout/Layout";
import Houses from "./components/pages/Houses";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";
import UserLogin from "./components/UserLogin/UserLogin.jsx";
import UserRegister from "./components/UserLogin/UserRegister.jsx";
// import CreateProperty from "./components/PropertyCreate/CreateProperty";
import Property from "./components/pages/Property";
import UpdatePropertyForm from "./components/PropertyUpdate/UpdatePropertyForm";
import RequestVisitForm from "./components/RequestVisit/RequestVisit.jsx";
import BrokerPage from "./components/Brokers/BrokerPage.jsx";
import BrokerCreate from "./components/Brokers/BrokerCreate.jsx";
import Addproperty from "./components/AddProperty/Addproperty";
import PropertyOffer from "./components/PropertyOffer/PropertyOffer.jsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/property">
          <Route index element={<Houses />} />
          <Route path=":propertyId" element={<Property />} />
        </Route>
        <Route path="/" element={<Hero />} />
        <Route path="/loginuser" element={<UserLogin />} />
        <Route path="/registeruser" element={<UserRegister />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/requestvisit" element={<RequestVisitForm />} />
        <Route path="/brokerpage" element={<BrokerPage />} />
        <Route path="/brokercreate" element={<BrokerCreate />} />

        {/* Add your new route here */}
        <Route path="/propertyOffer" element={<PropertyOffer />} />

        {/* Continue with your other routes */}
        {/* Not implemented yet
  <Route path="/brokerread" element={<BrokerRead />} />
  <Route path="/brokerupdate" element={<BrokerUpdate />} />
  <Route path="/brokerdelete" element={<BrokerDelete />} />
  */}
        {/* new */}
        {/* <Route path="/create" element={<CreateProperty />} /> */}
        <Route path="/property/update/:id" element={<UpdatePropertyForm />} />
        <Route path="/property/create" element={<Addproperty />} />
        {/* new */}
      </Routes>

      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
