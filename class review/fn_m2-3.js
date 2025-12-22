function prinStarLine(num){
    let a=''
    for(let i=0; i<num; i++){
        a = a+'*'
    }
    console.log(a)
}

printStarBox(5);
function printStarBox(num){
    for(let i=0; i<num; i++){
        prinStarLine(num)
    }
}

console.log('---------------------')

printStarTriangle(5);
function printStarTriangle(num){
    for(let i=1; i<=num; i++){
        prinStarLine(i)
    }
}