//inline exports
export function add(a,b){
    console.log("sum",a+b);
}

function sub(a,b){
    console.log("sub",a-b);
}
function mul(a,b){
    console.log("mul",a*b);
}

function div(a,b){
    console.log("div",a/b);
}

//named exports
export {sub,mul}

//only one member can be exported as default
export default div;