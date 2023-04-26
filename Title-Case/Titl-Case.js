//captitalize each word of the sentence

function titleCase(str) {
    return str
            .split(" ")
            .map(word => word[0].toUpperCase()+word.slice(1).toLowerCase())
            .join(" ");
}

console.log(titleCase("I'm a little tea pot"));