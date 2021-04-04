import React from 'react'
import styles from './Card.module.css'
import {AppContext} from './AppContext'

export default function ProductCard({children}) {
    const {product_name, image_url,description,price,id}=children
    const {AddingToCart,inCart}=React.useContext(AppContext)
    const [count,setCount]=React.useState(1)

    const handlingAdd=()=>{
        AddingToCart({...children,count:count})
    }
    const changingCount=(val)=>{
        setCount(prev=> prev+val)
    }
    return (
        <div id={id} className={styles.card}>
            <div className={styles.img}>
            <img src={image_url} alt=""/>   
            </div>
            <div className={styles.details}> 
            <h4>
                {product_name}
            </h4>
            <p>{description}</p>
            <h5>Price: Rs.{price}</h5>
            </div>
            <div className={styles.count}>
                <p><button onClick={()=>changingCount(-1)}>-</button></p>
                <p>{count}</p>
                <p><button onClick={()=>changingCount(1)}>+</button></p>
            </div>
            <button onClick={handlingAdd}>Add to Cart</button>
        </div>
    )
}
