import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserProfile from "./pages/UserProfile";
import AddPet from "./pages/AddPet";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        {/* <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/faq" element={<FAQ />} /> */}

        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <UserProfile />
            </IsPrivate>
          }
        />

        {/* <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              <EditUser />
            </IsPrivate>
          }
        /> */}

        {/* <Route
          path="/pets"
          element={
            <IsPrivate>
              <PetProfile />
            </IsPrivate>
          }
        />  */}
        
        <Route
          path="/pets/add"
          element={
            <IsPrivate>
              <AddPet />
            </IsPrivate>
          }
        /> 

        {/* <Route
          path="/pets/edit"
          element={
            <IsPrivate>
              <EditPet />
            </IsPrivate>
          }
        /> */}


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
