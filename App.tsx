import { Route, Routes } from "react-router-dom";
import "./src/globals.css";
import AuthLayout from "@/_auth/AuthLayout";
import SigninForm from "@/_auth/forms/SigninForm";
import SignupForm from "@/_auth/forms/SignupForm";
import { Toaster } from "@/components/ui/toaster"
import RootLayout from "@/_root/RootLayout";
import { AllUsers, CreatePost, EditPost, Lolo, PostDetails, Profile, Saved, UpdateProfile } from "@/_root/pages";
import Explore from "@/_root/pages/Explore";
function App() {
  return (
    <main>
      <Routes>
        {/* public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm/>} />
        </Route>
        {/* private route */}
        <Route element={<RootLayout/>}>
         <Route index  element={<Lolo />} />
         <Route path='/explore' element={<Explore />} />
         <Route path='/saved' element={<Saved />} />
         <Route path='/all-users' element={<AllUsers />} />
         <Route path='/create-post' element={<CreatePost />} />
         <Route path='/update-post/:id' element={<EditPost />} />
         <Route path='/posts/:id' element={<PostDetails />} />
         <Route path='/profile/:id/*' element={<Profile />} />
         <Route path='/update-profile/:id' element={<UpdateProfile />} />
        </Route>
      </Routes>
      <Toaster/>
    </main>
  );
}

export default App;
