import React from 'react';
import {Link} from 'react-router-dom'

export default function NavBar() {
    const link=[
        {
            to:"/",
            title:"Home"
        },
        {
            to:"/showCart",
            title:"ShowCart"
        }
    ]
    return (
        <div style={{display:'flex', justifyContent:"space-around"}}>
            {link.map(item=>(
                <Link style={{padding:"10px"}} to={item.to} key={item.to}>
                {item.title}
                </Link>
            ))}
        </div>
    )
}
