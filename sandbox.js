// function toCamelCase(string) {
//   let splitString = string.split(/[_-]/)
//   for (let i = 1; i < splitString.length; i++) {
//     splitString[i] =
//       splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1)
//   }
//   let camelString = splitString.join('')

//   console.log(camelString)
// }

// toCamelCase('can-I_do_This?')

function isPalindrome(string) {
  let lowerString = string.toLowerCase()
  let noSaceString = lowerString.replaceAll(' ', '')
  let stringArray = noSaceString.split('')
  let reverseArray = stringArray.reverse()
  let newString = reverseArray.join('')

  if (newString === noSaceString) {
    return true
  } else {
    return false
  }
  console.log(noSaceString)
  console.log(newString)
}

isPalindrome('A nut for a jar of tuna')
