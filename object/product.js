
var product={
    code:5432198,
    title:"watch",
    price:4500,
    color:"blue",
    

}
if("offer" in product){
    console.log("exist");
    
}
else{
    console.log("not exist");
    
}
product.price+=2000
console.log(product.price);
product.offer=500
console.log(product);

if("qty" in product){
    product.qty+=10
}
else{
    product.qty=10
}
console.log(product);
