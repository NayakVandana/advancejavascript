class geo{
    constructore(){
        this.lat =43.22;
        this.lon = 32.33;
    }
}
class language extends geo{
    constructore (name,country)
    {
        super();
        this.name = name;
        this.country = country;
    }
    greet = ()=> {
        return`hello, ${this.name}`;
    }
}

let Arjun = new language("Arjun", "India");


/* input: Arjun*/
/* input: Arjun.greet()*/