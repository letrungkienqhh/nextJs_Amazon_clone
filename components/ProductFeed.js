import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
    
    
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4'>
            
            {products.map(({id,title,image,price,rating,description,category}) =>
                (<Product
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    price={price}
                    rating={rating}
                    description={description}
                    category={category}
                />
                )
            )}
        </div>
    )
}

export default ProductFeed
