function mindGame(number) {
  if ((number = Number(number))) {
    const multipicationResult = number * 3;
    const sumationResult = multipicationResult + 10;
    const divisionResult = sumationResult / 2;
    const subtractionResult = divisionResult - 5;
    return subtractionResult;
  } else {
    return "Warning! Input is NaN! Input should be a number.";
  }
}
const number = 33;
const result = mindGame(number);
console.log(result);

function evenOdd(str) {
  const strLength = str.length;
  if (strLength % 2 == 0) {
    return "even";
  } else if (strLength % 2 == 1) {
    return "odd";
  } else {
    return "Warning! Input is a number! Input should be a strings.";
  }
}
const strings = "chatgpt";
const result1 = evenOdd(strings);
console.log(result1);

function isLGSeven(num) {
  const subtraction = num - 7;
  if (subtraction < 7) {
    return subtraction;
  } else if (subtraction > 7) {
    return num * 2;
  } else {
    return "Warning! Input is NaN! Input should be a number.";
  }
}
const num = 15;
const result2 = isLGSeven(num);
console.log(result2);

function findingBadData(data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (element < 0) {
      count++;
    } else if (element != Number(element)) {
      return "Warning! Input is NaN! Please provide all vallid number.";
    }
  }
  return count;
}
const data = [-4, -9, -5, -33, -55];
const result3 = findingBadData(data);
console.log(result3);

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  const firstFriendTotalGems = firstFriendGems * 21;
  const secondFriendTotalGems = secondFriendGems * 32;
  const thirdFriendTotalGems = thirdFriendGems * 43;
  const totalDiamond = firstFriendTotalGems + secondFriendTotalGems + thirdFriendTotalGems;
  if (totalDiamond > 1000 * 2) {
    const totalGemsAfterSubtraction = totalDiamond - 2000;
    return totalGemsAfterSubtraction;
  } else if (totalDiamond < 1000 * 2) {
    return totalDiamond;
  } else {
    return "Warning! Input is NaN! Please provide all vallid number.";
  }
}
const firstFriend = 100;
const secondFriend = 5;
const thirdFriend = 1;
const result4 = gemsToDiamond(firstFriend, secondFriend, thirdFriend);
console.log(result4);
