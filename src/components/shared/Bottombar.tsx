import { bottombarLinks} from "@/constants/sidebarLinks"
import { INavLink } from "@/types"
import { Link, useLocation } from "react-router-dom"


const Bottombar = () => {
  const {pathname} =useLocation();
  return (
    <>
  <section className=" justify-between w-[450px] flex items-center">
  {bottombarLinks.map((link:INavLink)=>{
                const isActive = pathname == link.route
                return(
                    <>
                    <Link to={link.route} className={`${isActive && 'bg-primary-500 rounded-[10px]'} flex-center flex-col gap-1 p-2`} key={link.label}>
                        <img src={link.imgURL} alt={link.label} className={` ${isActive && 'invert-white'}`} width={18} height={18} />
                        <p className="tiny-medium text-light-2">{link.label}</p>
                    </Link>
                    </>
                )
            })}
  </section>
    </>
  )
}

export default Bottombar
