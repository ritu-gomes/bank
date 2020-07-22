numbs = [1,2,4,5,7,10];

for(let i=0; i<numbs.length; i++){
    const um = numbs[i];
    if(um%2==0){
        console.log(um," is even");
    }
    else{
        console.log(um, " is odd");
    }
}