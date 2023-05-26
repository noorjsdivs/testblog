import React from 'react'
import "flowbite"
import logoUrano from "../public/images/Academia1.png";
import Image from "next/image";
import { useSession, signIn, signOut} from "next-auth/react"

function Header() {
  const { data: session} = useSession();
  
  return (
    <div>
   


<div>
  
</div>
    </div>
  )
}

export default Header