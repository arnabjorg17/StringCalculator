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

    //ef stafur er tala og stærra en 0
    if(!isNaN(num_to_add) && num_to_add >= 0){
      //plussa saman
      if(num_to_add <= 1000)
      {
        sum += num_to_add;
      }
      
    }
    //annars bæta í fylki yfir mínus tölur
    else if (!isNaN(num_to_add) && num_to_add < 0){
      negatives.push(num_to_add);
    }
  }

  //ef ég er með eitthverjar mínus tölur
  //búa þá til error
  if(negatives.length > 0){
    var error = "Negatives not allowed: ";
    
    //setja tölurnar aftast á errorinn
    for(var i = 0; i < negatives.length; i++){
      error+= negatives[i];

      //ef talan er ekki síðust bæta þá kommu
      //svo það verði -1,-5 en ekki -1-5
      if(i < negatives.length-1)
        error += ",";
    }

    throw error;
  }
  

  return sum;
}

module.exports = add;