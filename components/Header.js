import React from 'react'
import Image from 'next/image'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { selectItem } from '../slices/basket'
import { useSelector } from 'react-redux'
const Header = () => {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    const router=useRouter()
    const itemList=useSelector(selectItem)
    
    return (
        <header className="sticky">
            <div className="flex flex-grow  bg-amazon_blue items-center p-2">
                <div className="flex flex-grow items-center m-1 sm:flex-grow-0">
                    <Image
                        onClick={() =>router.push('/')}
                        src={"https://m.media-amazon.com/images/G/09/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_jp-main._CB462229751_.png"}
                        width={150} height={40}
                        objectFit="contain"
                        className="cursor-pointer" />
                </div>
                <div className="hidden sm:flex items-center bg-yellow-400 hover:bg-yellow-300 rounded-md h-10  flex-grow cursor-pointer ">
                    <input className="p-2 h-full w-6 flex-grow rounded-md flex-shrink focus:outline-none mr-2 " type="text" />
                    <SearchIcon className="h-full p-3" />
                </div>
                <div className="flex flex-cols items-center text-xs text-white space-x-5 mx-6 ">
                    <div onClick={() => signIn()} className="link">
                        {status === "authenticated" ? 
                                <p>Hello, {session.user.name}</p> 
                                :<p> Hello, Login</p>
                        }
                    <p className="font-semibold sm:text-sm">Account & Lists</p>
                </div>
                <div className="link">
                    <p>Returns </p>
                    <p className="font-semibold sm:text-sm">&Orders</p>
                </div>
                <div className='relative link flex items-center cursor-pointer' onClick={()=>router.push('/checkout')} >
                    <span className="absolute md:right-5 right-0 top-0 bg-yellow-400 rounded-full text-center text-black h-4 w-4">{itemList.length}</span>
                    <ShoppingCartIcon className="h-10 p-1" />
                    <p className="hidden md:inline font-semibold sm:text-sm ">Cart</p>
                </div>
            </div>
        </div><div className="flex items-center space-x-3 p-2 pl-6 bg-[#232f3e] text-white sm:text-sm">
                <p className="flex items-center link">
                    <MenuIcon className="h-6 mr-2" />
                    All
                </p>
                <p className="link">Today's Deals</p>
                <p className="link">Customer Service</p>
                <p className="link">Register</p>
                <p className="link hidden md:inline">Gift Cards</p>
                <p className="link hidden md:inline">Sell</p>



            </div><div>

            </div>
        </header>
    )
}

export default Header
