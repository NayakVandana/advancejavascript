let a = [10,20,30,40,50];
function mul (val)
{
    return`<p>${val}</p>`;
}
let b =a.map(mul);
console.log(b);
// ["<p>10</p>","<p>20</p>","<p>30</p>","<p>40</p>","<p>50</p>"]