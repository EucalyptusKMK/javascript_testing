const fs = require("fs");

class IO 
{
    constructor(fn)
    {
        this.fn = fn;
    }

    run()
    {
        return this.fn();
    }

    map(fn) // wrap
    {
        return new IO(() => fn(this.run()));
    }

    bind(fn) // flapMap
    {
        return new IO(() => fn(this.run()).run());
    }
}

function ioPure(val)
{
    return new IO( () => val );
}

function ioPrompt(question)
{
    return new IO( () => prompt(question) );
}

let result = ioPure(5)
                .map( x => x * 2 )
                .map( x => x + 1 )
                .bind( x => ioPure(100).map( y => x + y) )
                .bind( x => ioLog(x) );
console.log("not run yet");
result.run();