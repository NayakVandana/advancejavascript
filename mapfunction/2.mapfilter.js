let a =[5,10,15,20,25,30];
a.filter((data)=>
{
    return data > 10;
})

//(4) [15, 20, 25, 30]

//0: 15
//1: 20
//2: 25
//3: 30

let a= [5,10,15,20,25,30];
a.map((data)=>{
    return data > 10;
})

//(6) [false, false, true, true, true, true]


//filter and map diff

//filter: 1.condition check kari ne value true hase to value return kare 6e.and value false hase to false value return karse nai (4) [15, 20, 25, 30]

//map:1. condition check kari value sachi hase to true return karse and value false hase to false return karse  [false, false, true, true, true, true]   2.pehla condition hati atle true false value aavi but * karavanu hase to value return karavse




let a =[-1,0,1,2];
a.filter((data)=>
{
      return data * 2;
}
)

//(3) [-1, 1, 2] false value return nai karse



let a =[-1,0,1,2];
a.map((data)=>
{
      return data *2
})

//(4) [-2, 0, 2, 4]  1.ahiya * karvayu atle value return thase 2.condition sachi k khoti mate true false j return thase