import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/Academia1.png";
import { useSession, signIn, signOut} from "next-auth/react"

const PantallaHeader = () => {
    const { data: session} = useSession();
  return (
    <div className="w-full h-20 border-b-[2px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="h-40">
            <Image width={250} height={180} src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
            <Link href="/">
                <li className="headerLi">Home</li> </Link> 
            <li className="headerLi">Instagram</li>
            <li className="headerLi">Discord Comunidad</li>
            <li className="headerLi"></li>
            <li className="headerLi">Contacto</li>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src="https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
              alt="logo"
            />
           <p className='text-xl font-semibold text-orange-500'>
      {session ? session?.user!.name : "Bienvenidos"}
  </p>

          </div>

          <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default PantallaHeader;