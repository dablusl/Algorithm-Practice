function translatePigLatin(str) {
    let startConsonant =/^[^aeiou]+/;
  
    if (startConsonant.test(str)){
      let consonants = str.match(startConsonant);
      return str.replace(startConsonant, "") + consonants + "ay"
    }
    return str + "way"
  
  
}
  
translatePigLatin("consonant");