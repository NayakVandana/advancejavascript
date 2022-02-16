/* function Object banava mate*/



function human(name,city)
{
    this.name = name;
    this.city = city;

}
let aniket = new human ("ANI","PUNE");

/*output mate 

input aniket


output::::human {name: 'ANI', city: 'PUNE'}

*/

/*input   aniket.name
'ANI'
*/


/*aniket.city
'PUNE'*/





function Robot(name)
{
    this.name = name;
    this.age = 10;
    this.leg =2;
}

//let robo = new Robot ("MyRobo");


/* input robo.age
out put 10 */


human.prototype = new Robot();
let Arjun = new human ("Arjun","jaipur");



/* input Arjun
out:  human {name: 'Arjun', city: 'jaipur'}

input Arjun.age
out put 10 */


/* prototype working 
ek object mathi bija object ni properti use kare 6e

*/