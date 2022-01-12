import { StarIcon } from '@heroicons/react/outline'
import Currency from 'react-currency-formatter';
import Image from 'next/image'
import React, { useState } from 'react'
import {addItem} from '../slices/basket'
const   MAX_rating =5
const    MIN_rating =1
const Product = ({id,title,image,price,description,category}) => {
    const [rating]=useState(
        Math.floor(Math.random()*(MAX_rating-MIN_rating+1)+MIN_rating),
    )
    const [hasPrime]=useState(Math.random()<0.5)

    const dispatch = useDispatch()

    const addItemtoBasket = () =>{
        const product={
            id,title,image,price,description,category
        , }
        dispatch(addItem(product))
    }
    return (
        <div className="relative flex flex-col m-5 z-30 p-10 bg-white ">
            <p className="absolute top-2 right-3 text-sm text-gray-400 italic">{category}</p>
            <div>
                <Image src={image} height={200} width={200} objectFit="contain"/>
            </div>
            <h4 className="my-2 font-extrabold align-center ">{title}</h4>
            <div className="flex">
                {Array(rating).fill().map(i=>
                <StarIcon className="h-5 text-yellow-400"/>
                )}
            </div>
            <div className="my-2 text-xs line-clamp-2">{description}</div>
            <div>
                <Currency quantity={price} currency={"JPY"}/>
            </div>
            {hasPrime &&(
                <div className="flex space-x-2 my-1 items-center">
                    <img className="w-12" src="https://images-na.ssl-images-amazon.com/images/G/01/prime/sameday/Misc/New_Prime_Logo_80x80._FMpng_SY80_.png"></img>
                    <p className="text-green-700 font-semibold">FREE delivery tomorrow</p>
                </div>

            )}
            <button onclick={() => addItemToBasket()} className="absolute bottom-1 left-15  button_add ">Add to Cart</button>

        </div>
    )
}

export default Product
