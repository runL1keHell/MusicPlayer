import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import { PrimaryLayout } from "./layout/PrimaryLayout/PrimaryLayout";
import { Home } from "./pages/Home/Home";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route index element={<Home />} />
        
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/activate/:uid/:token" element={<Activation />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registrationconfirmation" element={<RegistrationConfirmation />} />
        <Route path="/success" element={<Success />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<SinglePost />} /> */}

      </Route>
      <Route path="*" element={ <h1>Sorry. Page wasn't found.</h1>} />
    </Routes>
  </BrowserRouter>  )
}

export default App
