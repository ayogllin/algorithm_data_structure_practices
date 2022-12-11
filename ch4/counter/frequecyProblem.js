function sameFrequency(str1, str2) {
  const arr1 = str1.split("")
  const arr2 = str2.split("")
  const input = arr1.concat(arr2)

  if (arr1.length !== arr2.length) {
    return false
  }
  
  let counter = {}
  for(i = 0; i < input.length; i++) {
    if (!counter[input[i]]) {
      counter[input[i]] = 1
    } else {
      counter[input[i]]++
    }
  }

  const letterAmount = Object.values(counter)
  const result = letterAmount.every(amount => amount % 2 === 0)

  return result
}

// console.log(`${sameFrequency('aabca', 'abcaa') ? 'Having' : 'Not having'} the same frequency.`)

function sameFrequencyFromCourse(str1, str2) {
  const arr1 = str1.split("")
  const arr2 = str2.split("")
  const input = arr1.concat(arr2)

  if (arr1.length !== arr2.length) {
    return false
  }
  
  let counter1 = {}
  let counter2 = {}
  for(i = 0; i < arr1.length; i++) {
    if (!counter1[arr1[i]]) {
      counter1[arr1[i]] = 1
    } else {
      counter1[arr1[i]]++
    }
  }


  for(i = 0; i < arr2.length; i++) {
    if (!counter2[arr2[i]]) {
      counter2[arr2[i]] = 1
    } else {
      counter2[arr2[i]]++
    }
  }

  
  for (let property in counter1) {
    console.log('property', property)
    if(!counter2[property]) return false

    if(counter2[property] !== counter1[property]) return false
  }

  return true

}

console.log(sameFrequencyFromCourse('aabc', 'caca'))