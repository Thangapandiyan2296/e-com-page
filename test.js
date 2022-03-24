// console.log("Hello Thangapandiyan");
// console.log("Welcome");

// var id=16714;
// var fullName ="Thangapandiyan";
// var mobileNo = 8508098627;

// console.log(`
//     User Id is:${id}
//     FullName is : ${fullName}
//     and the mobile number is : ${mobileNo}
// `);


// var sellingPrice = 199;
// var listingprice = 799;

// var offerprice = ((listingprice - sellingPrice) / listingprice) *100;

// console.log(offerprice);

// displayDiscountpercentage = Math.round(offerprice);

// console.log(displayDiscountpercentage);

// var google = false;
// var facebook = false;
// var twitter = true;

// if(google || facebook || twitter)
// {
//     console.log("Login Success");
// }
// else{
//     console.log("Login Failed");
// }
// authenticated = false;

// authenticated ? console.log("Login") : console.log("Logut");

// var user = "sub-admin";

// switch (user){
//     case "admin": console.log("Full Access");
//     break;

//     case "sub-admin": console.log("Partially Access");
//     break;

//     case "emp": console.log("Particular Access");
//     break;

//     default: console.log("Not Permitted");
//     break;
// }

// function Namasthe(){
//     return "Hello Developers";
// }
// Namasthe();

// var result = Namasthe();

// console.log(result);

// var getUserRole = function (name, role)
// {
//     switch(role){
//         case "admin":
//             return `${name} All access`;
//             break;
//         case "subadmin":
//             return `${name}All partial access`;
//             break;
//          case "user":
//              return `${name} All particular access`;
//              break;
//         case "emp":
//             return `${name} All testing access`;
//             break;
//         default:
//             return `${name} No access`;
//     }
// }
// console.log(getUserRole("hithesh,user"));
// var getRole = getUserRole("Sammy", "user");
// console.log(getRole);



// tipper("55");
// function tipper(a){
//     var bill = parseInt(a);
//     console.log(bill + 5);
// };


// bigTipper("190");
// var bigTipper = function (a){
//     var bill = parseInt(a);
//     console.log(bill + 5);
// };

// console.log(name);
// var name = "Mr.T";

// function sayName(){
//     var name = "Thangapandiyan";
//     console.log(name);
// }
// console.log(name);
// sayName();

// function sayName(){
//     console.log("Thangapandiyan");
// }
// function myName(){
//     sayName()
// }
// function firstName(){
//     myName()
// }
// function name(){
//     firstName()
// }

// sayName();
// var i, n=15;
// function Fizz(){
//     for(i=1; i<=n; i++){
//         if(i/3 == 0 && i/5 == 0){
//             console.log("Fizz");
//         }
//     }

// }

var cart = 0;

var items = {
    food:1000,
    drinks:2000
};

function addCartValue(item) {
    return cart + item;
}

function addToCart(item) {
    cart = addCartValue(item);
}
addToCart(items.drinks);
console.log("cart value:", cart);


