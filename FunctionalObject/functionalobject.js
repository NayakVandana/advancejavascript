function language(name,lang)
{
    this.name = name;
    this.lang = lang;
    this.greet = ()=>
    {
        return `Hello ${this.name}`;
    }
}
let Vandana =  new language ("vandana" ,"hindi");
let Vandu =  new language ("vandu" ,"English");

console.log(Vandana.lang);
/* console.log(Vandana.greet()); 
 Hello vandana */


/*

console.log(Vandana.lang);
hindi


*/