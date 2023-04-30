function pairElement(str) {
    let pairs = {
            "A" : "T",
            "T" : "A",
            "C" : "G",
            "G" : "C"
    }

    let ans = [];
    ans = str.split("").map( val => ([ val , pairs[val] ]));

    return ans;
  }
  console.log(pairElement("GCG"));