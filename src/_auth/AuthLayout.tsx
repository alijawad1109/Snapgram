import { Outlet, Navigate } from "react-router-dom";
import bg from '../../public/assets/images/side-img.svg'
const AuthLayout = () => {
  const isAuthenticated= false;
  return (
    <>
    {
      isAuthenticated ? (
        <Navigate to='/'/>
      ):(
        <>
        <section className="flex flex-1 w-1/2 justify-center items-center flex-col py-10 ">
          <Outlet/>
        </section>
        <img src={bg} alt="logo" className="hidden xl:block h-[135vh] bg-center w-1/2 object-cover bg-no-repeat absolute top-0 right-0" />
        </>
      )
    }
    </>
  )
}

export default AuthLayout
