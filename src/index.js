module.exports = function toReadable (number) {
  let lessThanTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let answer = '';

  if (number == 0) {
    return 'zero';
  }

  if (number < 20) {
    answer = lessThanTwenty[number];
    return answer;
  }

  if (number >= 20 && number < 100) {
    answer = tens[parseInt(number/10)];
    if (number%10 == 0) {
      return answer;
    }
    answer += ' ' + lessThanTwenty[number % 10];
    return answer;
  }
  answer = lessThanTwenty[parseInt(number / 100)] + ' hundred';
  if (number % 100 == 0) {
    return answer;
  }
  if ((number/10)%10 < 2) {
    answer += ' ' + lessThanTwenty[parseInt(number%100)];
    return answer;
  }
  answer += ' ' + tens[parseInt((number/10)%10)];
  if (number % 10 != 0) {
    answer += ' ' + lessThanTwenty[number % 10];
  } 
  return answer;
}

//answer = lessThanTwenty[parseInt(number / 100)] + ' hundred' + ' ' + tens[parseInt(number/10)%10] + ' ' + lessThanTwenty[number % 10];