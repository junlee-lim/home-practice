const myArr = {
    '0':3,
    '1':88,
    '2':76,
    '3':9,
    '4':34,
    '5':65,
    '6': 77,
    'length':7,
    'forEach': function(fn) {
        for(let i=0; i<myArr.length; i++){
            fn(this[i], i)
        }
    },
    'filter': function(fn1){
        const temp = [];
//여기 부분에 조건을 써서 아래 filter 함수 조건에 맞는 결과가 나오게 하기.
        for(let i=0; i<myArr.length; i++){
           if(fn1(this[i])){
            temp.push(this[i]);
           }
        }
        return temp;
    },

    'map': function(fn1){
        const temp = [];
//여기 부분에 조건을 써서 아래 map 함수 조건에 맞는 결과가 나오게 하기.
        for(let i=0; i<myArr.length; i++){
            temp.push(fn1(this[i]));
        }
        return temp;
    }
};

const arr2 = myArr.filter((item, i) => item <= 70 );
console.log(arr2); //[3, 9, 34, 65]

const arr3 = myArr.map( item => {
    return item + 2;
});
console.log(arr3); //[5, 90, 78, 11, 36, 67, 79]