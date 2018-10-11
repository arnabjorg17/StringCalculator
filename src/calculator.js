function add(numbers){
  if(numbers == "")
  {
    return 0;
  }
  if (numbers.includes(","))
  {
    var numberArray = numbers.split(",");
    return sum(numberArray);
  }
  else
  {
    return parseInt(numbers);
  }
}

function sum(numberArray)
{
  var sum = 0;
  for(var i=0; i < numberArray.length; i++)
  {
    sum += parseInt(numberArray[i]);
  }
  return sum;
}

module.exports = add;