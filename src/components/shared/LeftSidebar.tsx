import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { useSignOutAccount } from "@/lib/react-query/queries"
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants/sidebarLinks";
import { INavLink } from "@/types";
import path from "path";


const LeftSidebar = () => {
    const {mutate:signOut , isSuccess}= useSignOutAccount();
    const {pathname} =useLocation()
    const navigate= useNavigate();
    const {user} = useUserContext();
    useEffect(()=>{
        if(isSuccess) navigate(0)
    },[isSuccess])
  return (
    <>
    <nav className="leftsidebar">
        <div className="flex flex-col gap-11">
        <Link to='/' className="flex items-center gap-3">
            <img src="/assets/images/logo.svg" alt="logo" width={170} height={36} />
        </Link >
        <Link to={`/profile/${user.id}`} className="flex items-center gap-3">
        <img src={user.imageUrl || 'assets/images/profile.png'} alt="profile" className="h-14 w-14 rounded-full " />
        <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.username}</p>
        </div>
        </Link>
        <ul className="flex flex-col gap-2 h-screen">
            {sidebarLinks.map((link:INavLink)=>{
                const isActive = pathname == link.route
                return(
                    <>
                    <li className={`leftsidebar-link group ${isActive && 'bg-primary-500'}`} key={link.label}>
                    <NavLink to={link.route}  className="flex p-3 gap-4 items-center">
                        <img src={link.imgURL} alt={link.label} className={`group-hover:invert-white ${isActive && 'invert-white'}`} />
                        {link.label}
                    </NavLink>
                    </li>
                    </>
                )
            })}
        </ul>
        </div>
        <div className="flex items-center justify-start ml-[-7px]">
        <Button variant='ghost' className="shade-button_ghost" onClick={() =>signOut}>
                <img src="/assets/icons/logout.svg" alt="logout" />
                <p className="small-medium lg:base-medium ml-[30px]">Logout</p>
            </Button>
        </div>
    </nav>
    </>
  )
}

export default LeftSidebar
