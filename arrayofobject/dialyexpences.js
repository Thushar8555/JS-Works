
    var expenses = [
  { id: 1, title: "Dosa and Tea", amount: 40, category: "food", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 2, title: "Bus Fare", amount: 25, category: "transport", owner: "jazeel", payment_method: "cash", priority: "need" },
  { id: 3, title: "Mobile Recharge", amount: 299, category: "utilities", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 4, title: "Movie Ticket", amount: 150, category: "entertainment", owner: "jazeel", payment_method: "card", priority: "want" },
  { id: 5, title: "Snacks", amount: 60, category: "food", owner: "jazeel", payment_method: "cash", priority: "want" },
  { id: 6, title: "Gym Membership", amount: 1200, category: "health", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 7, title: "Coffee", amount: 120, category: "food", owner: "sarah", payment_method: "card", priority: "want" },
  { id: 8, title: "Books", amount: 450, category: "education", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 9, title: "Uber Ride", amount: 200, category: "transport", owner: "sarah", payment_method: "upi", priority: "want" },
  { id: 10, title: "Internet Bill", amount: 799, category: "utilities", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 11, title: "Petrol", amount: 500, category: "transport", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 12, title: "Dinner Out", amount: 850, category: "food", owner: "rahul", payment_method: "card", priority: "want" },
  { id: 13, title: "Rent", amount: 8000, category: "housing", owner: "rahul", payment_method: "bank_transfer", priority: "need" },
  { id: 14, title: "Netflix Subscription", amount: 199, category: "entertainment", owner: "rahul", payment_method: "upi", priority: "want" },
  { id: 15, title: "Groceries", amount: 1200, category: "food", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 16, title: "Laundry", amount: 100, category: "services", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 17, title: "Pizza", amount: 400, category: "food", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 18, title: "Medicine", amount: 250, category: "health", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 19, title: "Gaming Skin", amount: 80, category: "entertainment", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 20, title: "New Shirt", amount: 900, category: "shopping", owner: "amit", payment_method: "card", priority: "want" }
];

// owner summary
var ownersummary={}
for(let t of expenses){
    let owner=t.owner
    let amount=t.amount
    if(owner in ownersummary){
        ownersummary[owner]+=amount
    }
    else{
        ownersummary[owner]=amount
    }
}
//console.log(ownersummary);

// transaction with highest amount
var highestraction=expenses.reduce((t1,t2)=>t1.amount>t2.amount?t1:t2) 
//console.log(highestraction);

//cash transaction
var cash=expenses.filter(t=>t.payment_method=="cash")
//console.log(cash);

//amount>1000
var gt1000=expenses.filter(t=>t.amount>=1000)
//console.log(gt1000);

//total expences
var totalexpenses=expenses.reduce((sum,t)=>sum+t.amount,0)
//console.log(totalexpenses);

//most used payment method

var paymentmethodcount={}
for(let t of expenses){
    let type=t.payment_method
    if(type in paymentmethodcount){
        paymentmethodcount[type]+=1
    }
    else{
        paymentmethodcount[type]=1
    }
}
//console.log(paymentmethodcount);

// sarah + food + expence
var sarahfoodexpenceamount=expenses.filter(t=>t.owner=="sarah" && t.category=="food").reduce((s,t)=>s+t.amount,0)
//console.log(sarahfoodexpenceamount);

// priority-summary
var prioritysummary={}
for(let t of expenses){
    let priority=t.priority
    let amount=t.amount
    if(priority in prioritysummary){
            prioritysummary[priority]+=amount
    }
    else{
        prioritysummary[priority]=amount
    }
}
//console.log(prioritysummary);

// transaction of jazeel
var transactionofjazeel=expenses.filter(t=>t.owner=="jazeel")
//console.log(transactionofjazeel);


// highst paid category

var categorysummary={}
for(let t of expenses){
    var category=t.category
    var amount=t.amount
    if(category in categorysummary){
        categorysummary[category]+=amount
    }
    else{
        categorysummary[category]=amount
    }
}
//console.log(categorysummary);

var wantsummary={}
for(let t of expenses){
    let priority=t.priority
    let owner=t.owner
    let amount=t.amount
    if(priority=="want"){
        if(owner in wantsummary){
            wantsummary[owner]+=amount
        }
        else{
            wantsummary[owner]=amount
        }

    }
}
//console.log(wantsummary);

var paymentmethod=[]
for(let t of expenses){
    let methods=t.payment_method
    if(!paymentmethod.includes(methods)){
        paymentmethod.push(methods)
    }
}
console.log(paymentmethod);
