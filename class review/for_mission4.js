const star = parseInt(Math.random()*5)+3;
console.log(star);

let a = ''
for(let i=0; i<star; i++){
    for(let j=0; j<star; j++){
        j<star-1-i ? a=a+'a' : a=a+'*';
    }
    a=a+'\n'
}
console.log(a)