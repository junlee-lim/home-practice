const arr = [2, 3, 4, 5, 8, 11]; 

let a=[];
let b=[];

for(let i=0; i<arr.length; i++){
    arr[i]%2==0 ? a.push(arr[i]) : b.push(arr[i]);
}
console.log(a)
console.log(b)