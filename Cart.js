import React, { useRef, useState } from 'react'
import { product } from './Products'
import './EComm.css'
function Cart() {

    var [pro,setPro]=useState(product)
    var [car,setCar]=useState([])
   
    var inp=useRef()

    var inc=()=>{
      setPro(car)
      console.log(car);
      }

    var abc=(ele)=>{
console.log(ele);
car.push(ele);
console.log(car);



//         var stoinp=inp.current.value
// di.current.innerHTML=stoinp
// setPros(stoinp)
// console.log(stoinp);
    }
  return (
    <div>
    
        {pro.map((ele)=>{
            return <div  ref={inp} className='disp'>
<img src={ele.photo}width={'80px'} height={'100px'}></img>
<p>{ele.id}</p>
<p>{ele.brand}</p>
<p>{ele.categeory}</p>
<p>{ele.price}</p>
<button type='button' onClick={()=>abc(ele) } >cart</button>
            </div>
        })}
<button onClick={inc}>show</button>           

    </div>
  )
}

export default Cart