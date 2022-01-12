import Image from "next/image"
import Header from "../components/Header"

const checkout = () => {
    return (
        <div className="bg-gray-100">
            <Header/>
            {/* Left */}
            <div className=" m-1 p-1 max-w-screen-2xl  mx-auto">
                <div className="flex-grow mx-auto">
                    <Image
                        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                </div>
                
                <div className="flex flex-col p-2 m-2 bg-white boder-rounded">
                    <h1 className="text-black font-bold text-3xl underline ">Your shopping Basket</h1>
                </div>
            </div>
            {/* Right */}
            <div>

            </div>
        </div>
    )
}

export default checkout
