// const arr = [3, 8, 11, 86, 43, 22, 27];
// let a = new Array();
// let b = new Array();

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         a[i] = arr[i]
//     }else{
//         b[i] = arr[i]
//     }
// }
// console.log(a)
// console.log(b)

const arr = [3, 8, 11, 86, 43, 22, 27];
let a = new Array();
let b = new Array();

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        a.push(arr[i])
    }else{
        b.push(arr[i])
    }
}
console.log(a)
console.log(b)