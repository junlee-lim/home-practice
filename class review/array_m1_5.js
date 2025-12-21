const arr = [8, 5, 2, 3, 4, 11];
let a=arr[0];
let b=arr[0];

for(let i=1; i<arr.length; i++){
    if(a<arr[i]){
        a=arr[i]
    }
    if(b>arr[i]){
        b=arr[i]
    }
}
console.log(a)
console.log(b)