// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환한다.
let arr1 = [
    {name: "주유민", hobby: "독서"},
    {name: "김예원", hobby: "독서"},
    {name: "이수아", hobby: "영화보기"},
]

const readPeople = arr1.filter((item) => item.hobby === "독서" );
console.log(readPeople);

// 2. map 자주 활용
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환한다.
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2 ;// 반환값 설정
});

console.log(mapResult1);

// 활용 예제
let names = arr1.map((item) => item.name);
console.log(names);


// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"]; // 숫자메서드라면 제대로 동작하지 않는다
arr3.sort();
console.log(arr3);

// 숫자 오름차순 정렬(조건문을 활용해야 한다.)
let arr_3 = [10, 3, 5];
arr_3.sort((a, b) => {
    if (a >b) { // b가 a 앞에 위치해라
        return 1;
    } else if (a <b) { // a가 b 앞에 와라
        return -1;
    } else {
        return 0; // a, b 자리 그대로 유지
    }
})

console.log(arr_3);


// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "yumin"];
const joined = arr6.join(" ");

console.log(joined);