import React from 'react'
import { AppContext } from '../Components/AppContext'
import styled from "styled-components";

const TD = styled.td`
width:200px;
padding:8px;`
const TH = styled.td`
width:200px;
padding:8px;`
export default function ShowCart() {

    const {cart}=React.useContext(AppContext)
    let total = 0
    // console.log(cart)
    cart.map(item=>{
        total=total+(Number(item.count)*Number(item.price))
    })
    
    return(
        <table border="2" style={{display:'grid' , placeItems:"center"}}>
            <thead style={{padding:"10px"}}>
                <TH>item</TH>
                <TH>QTY</TH>
                <TH>Price</TH>
                <TH>FinalPrice</TH>
            </thead>
            <tbody>
                {
                    
                    cart?.map(item=>(
                        <tr key={item.id}>
                            <TD>{item.product_name}</TD>
                            <TD>{item.count}</TD>
                            <TD>{item.price}</TD>
                            <TD>{Number(item.price) * Number(item.count)}</TD>
                            
                        </tr>
                    ))
                    
                }
                <tr>
                    <td colSpan="3"><h1>Total</h1></td>
                    <td>Rs.{total}</td>
                </tr>
            </tbody>
        </table>
    )
}
