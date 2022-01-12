import Image from 'next/image'
import React from 'react'

import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-16 bg-gradient-to-t from-gray-200 to-transparent bottom-0 z-20"></div>
            <Carousel
                autoplay
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >

                <div>
                    <img loading="lazy" src={"https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"}></img>
                </div>
                <div>
                    <img loading="lazy" src={"https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"}></img>
                </div>
                <div>
                    <img loading="lazy" src={"https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"}></img>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner

