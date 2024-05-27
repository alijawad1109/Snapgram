import Bottombar from "@/components/shared/Bottombar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import TopBar from "@/components/shared/Topbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
      <>
      <div className="md:hidden block">
        <TopBar/>
      </div>
      <div className="w-full md:flex">
        <LeftSidebar/>
        <section className="flex h-full flex-1">
          <Outlet/>
        </section>
        <div className="md:hidden block bottom-0">
        <Bottombar/>
      </div>
      </div>
      </>
    )
  }
  
  export default RootLayout
  