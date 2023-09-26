import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import { PrimaryLayout } from "./layout/PrimaryLayout/PrimaryLayout";
import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignIn } from "./pages/SignIn/SignIn";
import { ProfileSettings } from "./pages/ProfileSettings/ProfileSettings";
import { AuthLayout } from "./layout/AuthLayout/AuthLayout";
import {Playlist} from "./pages/Playlist/Playlist.tsx";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route index element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/profilesettings" element={<ProfileSettings />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
      
      <Route path="*" element={ <h1>Sorry. Page wasn't found.</h1>} />
    </Routes>
  </BrowserRouter>  
  )
}

export default App
