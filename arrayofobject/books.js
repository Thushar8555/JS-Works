
var books = [
  {
    id: 1,
    title: "Aadujeevitham (Goat Days)",
    author: "Benyamin",
    price: 350,
    genre: "Contemporary Fiction",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Indulekha",
    author: "O. Chandu Menon",
    price: 250,
    genre: "Classic Novel",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "The God of Small Things",
    author: "Arundhati Roy",
    price: 499,
    genre: "Literary Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Khasakkinte Ithihasam",
    author: "O. V. Vijayan",
    price: 320,
    genre: "Magical Realism",
    language: "Malayalam"
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    price: 550,
    genre: "Self-Help",
    language: "English"
  },
  {
    id: 6,
    title: "Balyakalasakhi",
    author: "Vaikom Muhammad Basheer",
    price: 180,
    genre: "Romance/Tragedy",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 399,
    genre: "Classic Fiction",
    language: "English"
  },
  {
    id: 8,
    title: "Chemmeen",
    author: "Thakazhi Sivasankara Pillai",
    price: 290,
    genre: "Social Realism",
    language: "Malayalam"
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 650,
    genre: "Non-Fiction/History",
    language: "English"
  },
  {
    id: 10,
    title: "Manjaveyil Maranangal",
    author: "Benyamin",
    price: 420,
    genre: "Mystery/Thriller",
    language: "Malayalam"
  }
];

// display all title of books

//var title=books.map(bk=>bk.title)
//console.log(title);

// display malayalam books

//var mal=books.filter(bk=>bk.language=="Malayalam").map(bk=>bk.title)
//console.log(mal);

// display all author 

//var author=books.map(bk=>bk.author)
//console.log(author);

// display english books

//var eng=books.filter(bk=>bk.language=="English").map(bk=>bk.title)
//console.log(eng);

// price > 250
//var gt250=books.filter(bk=>bk.price>=250).map(bk=>bk.title)
//console.log(gt250);

// price < 250
//var lt250=books.filter(bk=>bk.price<250).map(bk=>bk.title)
//console.log(lt250);

// display genre
//var gen=books.map(bk=>bk.genre)
//console.log(gen);

// acending order by pricing
//var sort=books.sort((bk1,bk2)=>bk1.price-bk2.price).map(bk=>bk.price)
//console.log(sort);
 
// total price of books
//var total=books.reduce((sum,bk)=>sum+bk.price,0)
//console.log(total);

// maxprice
//var max=books.reduce((bk1,bk2)=>bk1.price>bk2.price?bk1:bk2)
//console.log(max);

// acending order 
//books.sort((b1,b2)=>b1.title.localeCompare(b2.title))
//console.log(books);

// langauge summary
//var langaugebook={}
//var langauge=[]
//for(let b of books){
//  if(!langauge.includes(b.language)){
//    langaugebook[b.language]=1
//    langauge.push(b.language)
//  }
//  else{
//    langaugebook[b.language]+=1
//  }
//}
//console.log(langaugebook);

//var langaugecount={}
//for(let b of books){
//  let lang=b.language
//  if(lang in langaugecount){
//    langaugecount[lang]+=1
//  }
//  else{
//    langaugecount[lang]=1
//  }
//}
//console.log(langaugecount);

// language with most number of books
//var max=Object.entries(langaugecount).reduce((b1,b2)=>b1[1]>b2[1]?b1:b2)
//console.log(max);

// least
//var less=Object.entries(langaugecount).reduce((b1,b2)=>b1[1]<b2[1]?b1:b2)
//console.log(less);


