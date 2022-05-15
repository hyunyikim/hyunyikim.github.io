---
title: "자바스크립트 - isNaN()"
date: "2022-05-14T00:00:00.000Z"
template: "post"
draft: false
slug: "javascript-isnan"
category: "javascript"
tags:
  - "javascript"
description: "isNaN(null)의 결과가 false다. 왜..?"
socialImage: ""
---

# isNaN()

```javascript
isNaN(null)   // false
```

위와 같이 결과가 나오는 것을 보고 혼란스러웠다. 왜..?

```javascript
isNaN(Number(null))    // false

isNaN(NaN)  // true
isNaN(undefined)  // true
isNaN({})  // true

isNaN(true)  // false
isNaN(null)  // false
isNaN('1')  // false
isNaN('')  // false
isNaN([])  // false
```

isNaN() 함수는 넘겨받은 인수를 숫자로 변환한 후, 그 결과로 NaN 여부를 확인한다. 즉, Number로 변환 후 숫자로 리턴되는 boolean값, null, 문자열 같은 경우는 숫자로 판단된다. 

## 대체 방법

```javascript
1. typeof n === 'number'
2. isNaN(parseInt(n))
```

# Number(), parseInt() 차이

```javascript
Number('123')     // 123
parseInt('123')   // 123

Number('123가나다')     // NaN
parseInt('123가나다')   // 123

Number('가나다123')     // NaN
parseInt('가나다123')   // NaN
```

### Number()

- Number 생성자로 Number 객체를 생성

### parseInt()

- 인자의 첫 문자가 숫자라면 숫자 리턴
- 인자의 첫 문자가 숫자가 아니라면 NaN 리턴

---

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
[https://mygumi.tistory.com/335](https://mygumi.tistory.com/335)
[http://megaton111.cafe24.com/2018/05/07/문자열을-숫자로-형변환하기-nuber-와-parseint의-차이/](http://megaton111.cafe24.com/2018/05/07/%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84-%EC%88%AB%EC%9E%90%EB%A1%9C-%ED%98%95%EB%B3%80%ED%99%98%ED%95%98%EA%B8%B0-nuber-%EC%99%80-parseint%EC%9D%98-%EC%B0%A8%EC%9D%B4/)