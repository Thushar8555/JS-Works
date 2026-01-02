
var orders={
    pizza:10,
    burger:20,
    pepsi:25,
    alfham:27,
}
var neworderitem="burger"
var qty=2

if(neworderitem in orders){
    orders[neworderitem]+=qty
}
else{
    orders[neworderitem]=qty
}
console.log(orders);
