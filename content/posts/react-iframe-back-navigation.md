---
title: "리액트 내의 iframe에서 뒤로가기 버그"
date: "2022-12-03T00:00:00.000Z"
template: "post"
draft: false
slug: "react-iframe-back-navigation"
category: "react"
tags:
  - "react"
description: "리액트의 Key가 하는 일"
socialImage: ""
---
리액트 안에서 동작하는 iframe이 있는데 각 라우팅마다 iframe의 src를 바꿔주며 동작하게 구현을 해놓았다. 문제는 뒤로가기가 예상대로 동작이 안된다는 것이었다. 페이지가 한 번 바뀌었으니까 뒤로가기를 하면 이전 페이지가 나와야 하는데 두 번 눌러야 제대로 그제야 원하는 페이지가 나왔다. [이 블로그 포스팅](https://www.aleksandrhovhannisyan.com/blog/react-iframes-back-navigation-bug/)에서 내가 겪었던 문제를 동일하게 구현해놓았다. 

원인은 iframe이 브라우저의 뒤로가기를 방해하는 것이었다. iframe의 src 속성만 변경하며 해당 컴포넌트를 재사용한다면 iframe의 현재 src까지 브라우저의 history 스택에 쌓이게 된다. 실제로 iframe이 아닌 리액트 컴포넌트로만 이루어진 컴포넌트가 라우팅 되었을 때는 history가 1개 쌓였지만 iframe으로 라우팅이 되었을 때는 분명 라우팅이 한 번 바뀌었는데 history가 2개씩 쌓이는 것을 확인할 수 있었다. 

블로그에서는 해결책을 iframe에 고유의 key를 주어 페이지가 변경될 때마다 새로운 iframe이 렌더링 될 수 있도록 했다. key가 다르면 리액트는 다른 엘리먼트로 판단하고 리렌더링 하는 대신 언마운트하고 리마운트를 한다. 리액트 컴포넌트에서 key가 단순히 리스트를 렌더링 할 때 리액트가 각 아이템들을 판별하는데에서만 쓰이는줄 알았는데 이렇게 렌더링을 다시 하길 원할 때 명확하게 다른 key props를 넘기며 리액트에게 알려줄 수 있었다. 

---

출처) 

[React, Iframes, and a Back-Navigation Bug | Aleksandr Hovhannisyan](https://www.aleksandrhovhannisyan.com/blog/react-iframes-back-navigation-bug/)