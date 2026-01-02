const productSales = {
  laptop: 120,
  mobile: 250,
  headphones: 400,
  smartwatch: 180,
  tablet: 90,
  camera: 60,
  printer: 45,
  keyboard: 210,
  mouse: 320,
  speaker: 150
};
// trending product
//var trend=Object.entries(productSales).reduce((it1,it2)=>it1[1]>it2[1]?it1:it2)
//console.log(trend);

// product with lowest sale
//var lowest=Object.entries(productSales).reduce((it1,it2)=>it1[1]<it2[1]?it1:it2)
//console.log(lowest);

// product with sale count >200
//var count=Object.entries(productSales).filter(item=>item[1]>200)
//console.log(count);

// total number of product sold
//var total=Object.entries(productSales).reduce((sum,it)=>sum+it[1],0)
//console.log(total);

// sort product sales order by decd
//var sort = Object.entries(productSales).sort((it1,it2)=>it2[1]-it1[1])
//console.log(sort);
