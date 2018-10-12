function add(numbers){

  if(numbers == "")
  {
    return 0;
  }

  if (numbers.includes(",") || numbers.includes("\n"))
  {
    var re = RegExp("( |\\n|,)");
    var numberArray = numbers.split(re);
    console.log(numberArray);
    
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
    if(!isNaN(parseInt(numberArray[i])))
      sum += parseInt(numberArray[i]);
  }
  return sum;
}

module.exports = add;