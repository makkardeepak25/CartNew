import React from 'react'
import Axios from 'axios';
import ProductCard from '../Components/Card'
export default function Home() {
    const [data,setData]=React.useState([])
    

    const getData=()=>{
            Axios.get('https://fake-server-app-makkardeepak.herokuapp.com/cart')
            .then(res=> {
                        setData(res.data)})
    }
    React.useEffect(()=>{
        getData();
    },[])

    return (
        <div>
            <h2>Products</h2>
            <div style={{display:'grid', placeItems:'center'}}>
                {
                    data?.map(item=>(
                        <ProductCard key={item.id}>{item}</ProductCard>
                    ))
                }
            </div>
        </div>
    )
}
