function truncateString(str, num) {
    if (str.length <= num){
      return str;
    }
    return str.substr(0,num)+"...";
    
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(truncateString("Absolutely Longer", 2));
