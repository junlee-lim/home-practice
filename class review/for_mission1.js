let First=true;

for(let i = 1; i<11; i++){
    if(First){
        First=false;
    }else{
        console.log('--------------')
    }
    for(let a=1; a<10; a++){
        console.log(`${i} x ${a} = ${i*a}`);
    }
};