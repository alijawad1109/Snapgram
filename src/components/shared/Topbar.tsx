import { Link, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { useSignOutAccount } from "@/lib/react-query/queries"
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";


const TopBar = () => {
    const {mutate:signOut , isSuccess}= useSignOutAccount();
    const navigate= useNavigate();
    const {user} = useUserContext();
    useEffect(()=>{
        if(isSuccess) navigate(0)
    },[isSuccess])
  return (
    <>
    <section className="flex justify-between py-4 px-5 items-center">
        <Link to='/' className="flex items-center gap-3">
            <img src="/assets/images/logo.svg" alt="logo" width={130} height={325} />
        </Link>
        <div className="flex gap-4">
            <Button variant='ghost' className="shade-button_ghost" onClick={() =>signOut}>
                <img src="/assets/icons/logout.svg" alt="logout" />
            </Button>
            <Link to={`/profile/${user.id}`} className="flex-center gap-3">
                <img src={user.imageUrl || 'assets/icons/profile-placeholder.svg'} alt="profile" className="h-8 w-8 rounded-full " />
            </Link>
        </div>
    </section>
    </>
  )
}

export default TopBar
