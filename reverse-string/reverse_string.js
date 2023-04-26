//reverse a string

function rvrsString (str){
    //using array methods
    return str
            .split("")
            .reverse("")
            .join("")
            
}

function rvrsStringLoop (str){
    //Using loop
    let ans="";

    for (let i = str.length -1; i>=0; i--){
        ans+= str[i];
    }
    return ans;
}

console.log(rvrsString("Dabluslemon"))
console.log(rvrsString("Anti-Dabluslemon"))

console.log(rvrsStringLoop("Dabluslemon"))
console.log(rvrsStringLoop("Anti-Dabluslemon"))