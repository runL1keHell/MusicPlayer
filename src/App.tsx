import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import { PrimaryLayout } from "./layout/PrimaryLayout/PrimaryLayout";
import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignIn } from "./pages/SignIn/SignIn";
import { AuthLayout } from "./layout/AuthLayout/AuthLayout";
import {Album} from "./pages/Album/Album.tsx";
import {SearchResults} from "./pages/SearchResults/SearchResults.tsx";
import {Provider} from "react-redux";
import store, {persistor}  from "./redux/store.ts";
import {MailVerification} from "./pages/MailVerification/MailVerification.tsx";
import {SuccessfullyVerifiedMail} from "./pages/SuccessfullyVerifiedMail/SuccessfullyVerifiedMail.tsx";
import {PersistGate} from "redux-persist/integration/react";
import {Artist} from "./pages/Artist/Artist.tsx";
import {UnsuccessfullyVerifiedMail} from "./pages/UnsuccessfullyVerifiedMail/UnsuccessfullyVerifiedMail.tsx";

function App() {

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrimaryLayout />}>
              {/*<Route index element={<Home />} />*/}
                <Route index element={<Home />} />
              <Route path="/album/:albumId" element={<Album />} />
              <Route path="/artist/:artistId" element={<Artist />} />
              {/*<Route path="/profilesettings" element={<ProfileSettings />} />*/}
              <Route path="/search" element={<SearchResults />}>
                <Route path="/search/:searchText" element={<SearchResults />} />
              </Route>
            </Route>

               <Route element={<AuthLayout />}>
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/mailverification/:user_id/:token" element={<MailVerification />} />
                  <Route path="/successfullyverified" element={<SuccessfullyVerifiedMail />} />
                  <Route path="/unsuccessfullyverifiedmail" element={<UnsuccessfullyVerifiedMail />} />
                </Route>

                <Route path="*" element={ <h1>Sorry. Page wasn't found.</h1>} />
              </Routes>
            </BrowserRouter>
        </PersistGate>

      </Provider>
  )
}

export default App
