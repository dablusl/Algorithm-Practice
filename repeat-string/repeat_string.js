//repeat a string num times
//using recursivity

function repeatStr(str, num) {
    if (num <= 0){
      return ""
    }else{
      return str + repeatStr(str, num-1)
    }
}

console.log(repeatStr("abc",5))
console.log(repeatStr("lol",10))
