function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    for (let i = 1; i < str.length; i++ ){
        if ( alphabet.indexOf(str[i]) - alphabet.indexOf(str[i-1])!= 1){
            return alphabet[alphabet.indexOf(str[i])-1];
        }
    }

}
  
console.log(fearNotLetter("abce"));