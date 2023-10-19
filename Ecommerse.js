import React, { useRef, useState } from 'react'
import { product } from './Products'
import './EComm.css'

function Ecommerse() {

    var [pro,setPro]=useState(product)
    var [cartp,setCartp]=useState([])
    var [carde,setCarde]=useState(true)
   
    
        var binp=useRef()
        var catinp=useRef()
        var minp=useRef()
        var maxinp=useRef()
        var ser=useRef()
        var carinp=useRef()
        
        


    var brandd=()=>{
      var bsel=binp.current.value
      var catsto=catinp.current.value
      var mvsto=minp.current.value
      var maxsto=maxinp.current.value
      var sersto=ser.current.value
   

console.log();
 if(bsel!="" && catsto==''&& mvsto==''&& maxsto==''){
      var br=product.filter((fi)=>{
        return fi.brand==bsel
      })
    setPro(br)}

// categeory

else if(catsto!=''&&bsel==''&&mvsto==''&&maxsto==''){
  var catfil=product.filter((ca)=>{
    return ca.categeory==catsto;
  })
setPro(catfil)
}


// min value

else if(mvsto!=''&&catsto==''&&bsel==''&&maxsto==''){
  var minfil=product.filter((max)=>{
    return max.price>=mvsto
  })
setPro(minfil)
}
    
// max value
else if(maxsto!=''&&mvsto==''&&catsto==''&&bsel==''){
  var maxfil=product.filter((max)=>{
    return max.price<=maxsto
  })
setPro(maxfil)
}

else if(maxsto==''&&mvsto==''&&catsto!=''&&bsel!=''){
  var brca=product.filter((ele)=>{
    return ele.brand==bsel && ele.categeory==catsto;
  })
setPro(brca)

}

else if(maxsto==''&&mvsto!=''&&catsto!=''&&bsel!=''){
  var mami=product.filter((ele)=>{
    return ele.price>=mvsto &&ele.brand==bsel&&ele.categeory==catsto
  })
setPro(mami)

}

else if(maxsto!=''&&mvsto==''&&catsto!=''&&bsel!=''){
  var mamx=product.filter((ele)=>{
    return ele.price>=maxsto &&ele.brand==bsel&&ele.categeory==catsto
  })
setPro(mamx)

}

else if(maxsto!=''&&mvsto==''&&catsto!=''&&bsel!=''){
  var mamx=product.filter((ele)=>{
    return ele.price>=maxsto &&ele.brand==bsel&&ele.categeory==catsto
  })
setPro(mamx)

}

else if(maxsto!=''&&mvsto!=''&&catsto==''&&bsel==''){
  var mxmi=product.filter((ele)=>{
    return ele.price>=maxsto === ele.price<=mvsto
  })
setPro(mxmi)

}

else if(maxsto!=''&&mvsto!=''&&catsto!=''&&bsel!=''){
  var mimi=product.filter((ele)=>{
    return ele.price>=maxsto == ele.price<=mvsto &&ele.brand==bsel&&ele.categeory==catsto
  })
setPro(mimi)

}

 if(maxsto==''&&mvsto==''&&catsto==''&&bsel==''&&sersto!=''){
  var sese=product.filter((ele)=>{
    return  ele.brand.includes(sersto)|| ele.categeory.includes(sersto)
  })

 setPro(sese)

}

    }
// adding to cart
var cart=(ele)=>{
cartp.push(ele)
console.log(cartp);
setCartp(cartp)
}

var showcart=()=>{
setCarde(!carde)

}
var deleteitem=(deldata)=>{
  var deleted=cartp.filter((ele,ind)=>{
    return ind!=deldata
  })
setCartp(deleted)
}


var homepage=()=>{
 
}


// cart delete
// var del=(ele)=>{
//   carde.slice(ele)
//   console.log(carde);
//   setPro(cartp)
// }
// cart items
// var cartitem=()=>{
//   setPro(cartp)
  
// }
   
  return (
    <div>
     
        <div >
            <div><div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./imgs/ban11.jpg" width={'1300px'} height={'360px'} alt="1"></img>
    </div>
    <div class="carousel-item">
      <img src="./imgs/ban13.jpg"  width={'1300px'} height={'360px'} alt="2"></img>
    </div>
    <div class="carousel-item">
      <img src="./imgs/ban15+.jpg" width={'1300px'} height={'360px'} alt="3"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div>
        </div>
<div >
<select  className='bto' ref={binp} onChange={brandd}  class="btn btn-outline-primary"> 
  <option value="">Brands</option>
  <option value="samsung">samsung</option>
  <option value="lg">lg</option>
  <option value="nike">nike</option>
  <option value="puma">puma</option>
</select>
<select   className='bto' onChange={brandd} ref={catinp}  class="btn btn-outline-secondary">
  <option value="">categeory</option>
  <option value="electronics">electronics</option>
  <option value="fashion">fashion</option>
  <option value="sports">sports</option>
  <option value="cloths">cloths</option>
</select>
<select className='bto' ref={minp} onChange={brandd}  class="btn btn-outline-danger" >
  <option value="">min</option>
  <option value="2000">2000</option>
  <option value="2500">2500</option>
  <option value="3000">3000</option>
  <option value="4000">4000</option>
</select>
<select  className='bto' onChange={brandd} ref={maxinp}  class="btn btn-outline-success">
  <option value="">max</option>
  <option value="3500">3500</option>
  <option value="4000">4000</option>
  <option value="5500">5500</option>
  <option value="6000">6000</option>
</select>
<input className='bto' ref={ser}  onChange={brandd}type='text'placeholder='search'></input>

<button onClick={showcart} className='bto'  class="btn btn-outline-warning">cart-items</button>
<button onClick={homepage} className='bto'  class="btn btn-outline-warning">all-items</button></div>

{/* <div id='prod'>
    {pro.map((ele)=>{
        <div><img src={ele.photo} height={"100px"} width={'60px'}></img>
   <div><p>id:{ele.id}</p><p>item:{ele.brand}</p><p>categeory:{ele.categeory}</p><p>price:{ele.price}</p>
   <p>rating:{ele.rating}</p></div></div>
    })}
</div> */}
{/* <h1 ref={pr}>{pro}</h1> */}

{carde?
<div>
{pro.map((ele)=>{
  return <div ref={carinp} className='disp'>
    <img src={ele.photo} width='120px' height="100px"></img>
    <p>id:{ele.id}</p>
    <p>brand:{ele.brand}</p>
    <p>categeory:{ele.categeory}</p>
    <p>price:{ele.price}</p>
    <p>pname:{ele.pname}</p>
    <p>rating:{ele.rating}</p>
    
    <button  onClick={()=>cart(ele)}  class="btn btn-dark" type='button' >add</button><br></br><br></br>
    
    {/* <button onClick={()=>del(ele)} class="btn btn-dark" type='button' >remove</button> */}

  </div>
})}
</div>


 : 
 <div>
{cartp.map((ele,ind)=>{
  return <div className='disp'>
    <img src={ele.photo} width='120px' height="100px"></img>
    <p>id:{ele.id}</p>
    <p>brand:{ele.brand}</p>
    <p>categeory:{ele.categeory}</p>
    <p>price:{ele.price}</p>
    <p>pname:{ele.pname}</p>
    <p>rating:{ele.rating}</p>
    
    <button  onClick={()=>deleteitem(ind)}  class="btn btn-dark" type='button' >delete</button><br></br><br></br>
    
    {/* <button onClick={()=>del(ele)} class="btn btn-dark" type='button' >remove</button> */}

  </div>
})}
</div>}





 <div>
<div class="card">
<marquee>
  <h5 class="card-header">VISIT AGAIN #HAVE A NICE DAY </h5>
  </marquee>
  <div class="card-body">
    <h5 class="card-title">#Save nature</h5>
   
    <a href="#" class="btn btn-primary">Go Top</a>
    <p class="card-text">for any quiries reach us.......</p>
    <div >
    <img className='ico' src='./imgs/call-footer.png'></img> : 7793919393
    <img  className='ico'src='./imgs/location.png'></img> : hyderabad@
    <img  className='ico'src='./imgs/whatsapp.png'></img> : 9573039917
    </div>
  </div>
</div>
</div>

    </div>
  )
}

export default Ecommerse;