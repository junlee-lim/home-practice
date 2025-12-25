//짝수 값만 2가 추가된 값이 나온 배열 만들기

const arr = [3, 88, 76, 9, 34, 65];


const arr1 = arr.map(item => {
    if(item%2==1){
        return item;
    }else{
        return item + 2;
    }
})

console.log(arr1)
