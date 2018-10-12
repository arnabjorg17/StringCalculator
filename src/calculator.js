function add(numbers){

  if(numbers == "")
  {
    return 0;
  }

  if (numbers.includes(",") || numbers.includes("\n"))
  {
    var re = RegExp("( |\\n|,)");
    var numberArray = numbers.split(re);
    
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
  var negatives = [];
  
  for(var i=0; i < numberArray.length; i++)
  {
    var num_to_add = parseInt(numberArray[i]);

    if(!isNaN(num_to_add) && num_to_add >= 0){
      sum += num_to_add;
    }
    else if (!isNaN(num_to_add) && num_to_add < 0){
      negatives.push(num_to_add);
    }
  }

  if(negatives.length > 0){
    var error = "Negatives not allowed: ";
    
    for(var i = 0; i < negatives.length; i++){
      error+= negatives[i];

      if(i < negatives.length-1)
        error += ",";
    }

    throw error;
  }

  return sum;
}

module.exports = add;