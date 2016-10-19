function findMinMax(arrayValue){
  //[1, 2, 3, 4]
  //[4, 66, 6, 44, 7, 78, 8, 68, 2])
  //Math.max(a, b);
  var maxnum=arrayValue[0]
  var minnum=arrayValue[0]
  for (i=0; i<arrayValue.length;i++){
  	if (arrayValue[i]>maxnum){
  		maxnum=arrayValue[i]
  	}
  	if (arrayValue[i]<minnum){
  		minnum=arrayValue[i]
  	}
  }
  if (maxnum==minnum){return [maxnum]}else{return [minnum,maxnum]}


  
}

