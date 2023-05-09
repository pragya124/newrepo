let strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
let k = 2, f, j, len = [];
function arr(str, countlen, j, final){
  for(let i = 0; i<str.length-1; i++){
    let result = str[i].concat(str[i+1]);
    let count = result.length;
    countlen.push(count);
  }
  for(i=0; i<countlen.length-1; i++){
    if(countlen[i] > countlen[i+1]){
      j = countlen[i];
    }else{
      j = countlen[i+1];
    }
  }
  for(i=0; i<countlen.length-1; i++){
    if(countlen[i] == j){
        final = j;
        let result = str[i].concat(str[i+1]);
        console.log(result);
        break;
    }
  }
}
arr(strarr, len, j, f);