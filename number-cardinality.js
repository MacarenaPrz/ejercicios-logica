function numberCardinality(n){

    if (n % 10 === 0){
        console.log("Zero");
    }
    if(n % 10 === 5){
        console.log("Five");
    }
    if( n % 2 === 0 && n % 10 !== 0){
        console.log("Even");
    }
   if(n % 2 !== 0 && n % 10 !== 5){
    console.log("Odd");
   }
}

console.log(numberCardinality(37));