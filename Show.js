import React, { useRef, useState } from 'react'
import { product } from './Products'
function Show() {

//   var prod=[{id:1,brand:'samsung',price:1500,categeory:'electronics'},
// {id:2,brand:'samsung',price:2000,categeory:'electronics'},
// {id:3,brand:'samsung',price:2500,categeory:'electronics'},
// {id:4,brand:'samsung',price:3000,categeory:'electronics'},
// {id:5,brand:'samsung',price:3500,categeory:'electronics'},
// {id:6,brand:'samsung',price:4000,categeory:'electronics'}]


// var brandd=()=>{
// setBr(product)

// var dat=ref.current.value

// var sel=`<div>`
// if(ref.current.value=='samsung'){
//   for(var a=0;a<product.length;a++){
//     sel=sel+`<div><p>${product[a].id}</p><p>${product[a].brand}</p><p>${product[a].price}</p><p>${product[a].categeory}</p></div>
   
// </div>`
//   }
// }
// disp.current.innerHTML=sel


// console.log(dat);
// }
var [br,setBr]=useState(product)
// var [fi,setFi]=useState()

// var [pp,setPp]=useState()

var ref=useRef()
 var disp=useRef()
 
 var abc=()=>{
 
  var sel=ref.current.value
  var emp=[]
  var fil=product.filter((rrr)=>{
    if(rrr.sel==''){
      return 'brand'
    }
   
  })
 
 setBr(emp)

}
setBr()

  return (
    <div>
      <select ref={ref}>
  <option>Brands</option>
  <option>samsung</option>
  <option>lg</option>
  <option>nike</option>
  <option>puma</option>
</select>
<button onClick={abc}>click</button>
<h1 ref={disp}></h1>

{br.map((ele)=>{
  return <div className='disp'>
    <img src={ele.photo} width='120px' height="100px"></img>
    <p>id:{ele.id}</p>
    <p>brand:{ele.brand}</p>
    <p>categeory:{ele.categeory}</p>
    <p>price:{ele.price}</p>
    <p>pname:{ele.pname}</p>
    <p>rating:{ele.rating}</p>
  </div>
})}

{fil.map((el)=>{
  <div>
  <p>{el.id}</p>
  <p>{el.brand}</p>
  <p>{el.price}</p>
  <p>{el.categeory}</p>
  <p>{el.rating}</p>
</div> 
})}





    </div>
  )
}

export default Show