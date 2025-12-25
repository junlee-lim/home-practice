const arr = [2, 3, 4, 5, 8, 11];

let a = [];
let b = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        a.push(arr[i]);
    }else{
        b.push(arr[i])
    }
}
console.log(a);
console.log(b);