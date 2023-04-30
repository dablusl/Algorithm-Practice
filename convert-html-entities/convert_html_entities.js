function convertHTML(str) {
    let entities = {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : "&quot;",
      "'" : "&apos;"
    }
  
    return str
            .split("")
            .map(val => { if (entities[val]){
                                return entities[val]
                            }else{
                                return val
                            }
            })
            .join("");
}
  
  console.log(convertHTML("Dolce & Gabbana"));