// 자바스크립트에서만 제공되는 특별한 연산들?

// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 =20;

let var4 = var1 ?? var2; // 존재하는 값만 출력
console.log(var4);
let var5 = var2 ?? var3; // 둘 다 존재하는 값인 경우 앞에 쓰인 값이 출력

let userName = "주유민";
let userNicName = "22";

let displayName = userName ?? userNicName;
console.log(displayName);


// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "Hello";

let t1 = typeof var7;
console.log(t1); // string 출력


// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 떄의 값을 다르게 반환한다. 
let var8 = 10;

// 요구사항: 변수 res에 var8의 값이 짝수라면 "짝", 홀수라면 "홀" 저장하기
let res = var8 % 2 === 0 ? "짝수" : "홀수";
// var8이 2로 나누어 떨어지면 ? true일 때 "짝수" : false일 떄 "홀수"