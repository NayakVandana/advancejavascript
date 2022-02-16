let obj = {};

obj.user = [
    {
        name : "Vandana",
        city : "Vapi"
    },
    {
        name : "Vandu",
        city : "valsad"
    },

]


/*
console.log(obj);

{user: Array(2)}
user: Array(2)
0:
city: "Vapi"
name: "Vandana"
[[Prototype]]: Object
1:
city: "valsad"
name: "Vandu"
[[Prototype]]: Object
length: 2
[[Prototype]]: Array(0)
[[Prototype]]: Object*/

obj.query = {
    sum : function(a,b) {return a+b},
    sub : function(a,b) {return a-b}

}

module.exports = obj;