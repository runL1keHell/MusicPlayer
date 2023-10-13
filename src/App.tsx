import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import { PrimaryLayout } from "./layout/PrimaryLayout/PrimaryLayout";
import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignIn } from "./pages/SignIn/SignIn";
// import { ProfileSettings } from "./pages/ProfileSettings/ProfileSettings";
import { AuthLayout } from "./layout/AuthLayout/AuthLayout";
import {Playlist} from "./pages/Playlist/Playlist.tsx";
import {SearchResults} from "./pages/SearchResults/SearchResults.tsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {MailVerification} from "./pages/MailVerification/MailVerification.tsx";

function App() {

  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrimaryLayout />}>
              <Route index element={<Home />} />
              <Route path="/playlist" element={<Playlist />} />
              {/*<Route path="/profilesettings" element={<ProfileSettings />} />*/}
              <Route path="/search" element={<SearchResults />}>
                <Route path="/search/:searchText" element={<SearchResults />} />
              </Route>
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/mailverification/:user_id/:token" element={<MailVerification />} />
            </Route>

            <Route path="*" element={ <h1>Sorry. Page wasn't found.</h1>} />
          </Routes>
        </BrowserRouter>
      </Provider>
  )
}

export default App
