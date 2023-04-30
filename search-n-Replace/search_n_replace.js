function myReplace(str, before, after) {

    //test if first char is capital or lower
    let isCapital = /^[A-Z]/;
    let bol = isCapital.test(before);

    if ( bol == true ){
        after = after[0].toUpperCase() + after.slice(1);
    }else{
        after = after[0].toLowerCase() + after.slice(1);

    };

    str=str.replace(before,after);
    
    return str;
  }

  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  console.log(myReplace("I think we should look up there", "up", "Down"));
  console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
  console.log(myReplace("His name is Tom", "Tom", "john"));
