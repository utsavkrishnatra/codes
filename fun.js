
let nf = function(fullName)
{
     fn = fullName.split(" ");
     return fn[0];
}

let nl=function(fullName)
{
    ln=fullName.split(" ");
    return fn[1];
}


function hof(fn,fullName)
{
    let name=fn(fullName);
    console.log(name);
}

hof(nf,"STEVE Jobs");
hof(nl,"STEVE Jobs");

