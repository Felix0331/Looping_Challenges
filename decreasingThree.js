function divisableByThree(){
    for(var i=100; i>=0; i--){
        if(i%3 === 0){
            console.log(i);
        }else{
            continue;
        }
    }
}
divisableByThree();