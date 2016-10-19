function words(words){
  //split up into an array by space.
  //get each element of the array and check if the key exist in a dict, if absent, add, if pressent incrment the value by 1
  //words = words.replace(/  +/g, ' ')
  //words=words.replace(/\s\s+/g, ' ');
 //words=words.replace(/\n/g, " "); //only newlines
   //words = words.replace(/[^\x21-\x7E]+/g, ' ') //removes international xters too
  
  
  words = words.replace(/\s{2,}/g, ' '); //think this is for multispaces
   words = words.replace(/\t/g, ' '); // think this is for tab
  words = words.toString().trim().replace(/(\r\n|\n|\r)/g," "); //this is multiline
 
  
  var wordArray=words.split(' ');
  var arrkey=[];
  var arrVal=[];
  for(var i=0; i< wordArray.length; i++){
    if (arrkey.indexOf(wordArray[i])===-1){arrkey.push(wordArray[i]);arrVal.push(1);}
    else{arrVal[arrkey.indexOf(wordArray[i])]+=1;
    }
}
  var dictResult={} 
  for(var b=0; b < arrkey.length; b++){
     dictResult[arrkey[b]]= arrVal[b];
    }
    
    
  return  dictResult;

}