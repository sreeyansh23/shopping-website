const ulEle = document.querySelector("ul")
fetch("https://fakestoreapi.com/products").then(res => res.json()).then((data)=>{
    data.forEach((ele,i,array)=>{
let list = <li>${ele.id}</li>
ulEle.insertAdjacentHTML("beforeend",list)
    })
})
    
    