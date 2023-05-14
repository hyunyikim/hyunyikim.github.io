---
title: "크롬에서 영상 자동재생 시키기"
date: "2023-05-12T00:00:00.000Z"
template: "post"
draft: false
slug: "auto-play-policy-in-chrome"
category: "web"
tags:
  - "auto-play-policy-in-chrome"
description: "크롬의 영상 자동재생 정책"
socialImage: ""
---

영상을 자동 재생시키기 위해 `<video>` 태그를 사용했는데 분명 소리가 없는 영상임에도 `muted` 속성을 넣지 않으면 영상이 자동재싱 되지 않아 찾아보았다.

```js
<video
	loop
	autoPlay
	**muted**
	src={''}/>
```

크롬에서는 사용자의 경험 개선을 위해 자동재생이 가능하게 하기 위해서는 몇가지 조건이 필요하다.

1. 소리가 없는 영상(`muted=true`)은 자동재생이 가능하다.
2. 소리가 있는 영상을 자동재생하기 위해서는
   1. 해당 도메인 내에서 사용자 이벤트가 발생했거나
   2. 사용자가 이전에 소리가 있는 영상을 재생했거나
   3. 사용자가 모바일 홈 화면에 사이트를 추가했거나 데스크톱에 PWA를 설치해야 한다.
3. iframe에서는 상위 프레임의 자동재생 정책을 위임받아 자동 재생을 허용할 수 있다.

---

## [https://developer.chrome.com/blog/autoplay/](https://developer.chrome.com/blog/autoplay/)
