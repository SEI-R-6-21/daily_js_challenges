
string = 'discovery'
function charCount(string) {
    let stringObj = {}
    for(i = 0; i < string.length; i++) {

        char = string.charAt(i)
        if(stringObj[char]) {
            stringObj[char++]
        } else {
            stringObj[char] = 1
        }
    }
    return stringObj

  }
  console.log(charCount(string))