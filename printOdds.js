function printOdds(){
    for(var i=1; i<=20; i++){
        if(i%2 !== 0){
            console.log(i);
        }else{
            continue;
        }
    }
}
printOdds();