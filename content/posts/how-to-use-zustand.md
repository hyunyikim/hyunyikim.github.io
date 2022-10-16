---
title: "zustand 사용법"
date: "2022-10-16T00:00:00.000Z"
template: "post"
draft: false
slug: "how-to-use-zustand"
category: "zustand"
tags:
  - "zustand"
description: "간단한 zustand 사용기"
socialImage: ""
---

기존의 프론트엔드 프로젝트를 새롭게 작성할 기회가 있어 상태관리 라이브러리들을 한 번 살펴보던 중 zustand가 눈에 들어왔고, zustand docs 기준으로 사용법을 한 번 정리해보았다.

# Zustand란?

> 단순화한 flux 패턴을 이용한 작고 빠르고 확장 가능한 상태 관리 솔루션

zustand의 소개 페이지의 첫 문장이 이렇게 시작한다. flux 패턴은 redux를 사용한 개발자라면 많이 들어보았을텐데 단방향으로 데이터를 관리할 수 있는 패턴이다.

## redux보다 나은점

- 간단하고 자기고집적이지 않다. (un-opinionated)
- 훅을 기반으로 동작한다.
- Context Provider로 앱을 감쌀 필요가 없다.
- 렌더링 없이 컴포넌트에 일시적으로 알릴 수 있다.

flux 패턴과 비슷하게 작성하지만 확실히 코드량이 많이 줄어들었다. 특히 redux-toolkit과 비슷하다는 느낌을 많이 받았는데 redux-toolkit에서는 slice를 생성할 때 name, initialState, reducers처럼 정해진 파라미터를 전달해야 하는 것과는 달리, state와 action을 하나의 store에서 생성할 수 있고 또 생성할 때의 제약 또한 없어서 훨씬 간단하고 자유도가 높았다고 느꼈다.

## Context보다 나은점

- 적은 보일러플레이트
- 변경되었을 때에만 컴포넌트를 렌더링 한다.
- 중앙집중화된, action 기반의 상태 관리

## Jotai와 다른 점

- Zustand는 하나의 전역적인 스토어를 갖고 있는 반면 Jotai는 여러 개의 atom으로 구성되어 있고 함께 조합할 수 있다.
- Zustand store는 외부 store로, react 외부에서 접근 할 때 더욱 적합하다.
- Jotai는 atom 기반으로 서로 결합하여 사용할 수 있다. (useState와 같이 useAtom으로 상태관리를 하면 끝)
- Zustand는 각각의 상태를 서로 결합하여 사용하기에는 좀 까다롭게 느껴졌다.

개발진이 같아서인지 zustand와 jotai의 궁합도 잘 맞는 것 같고 문서에서도 함께 사용할 수 있는 방법을 설명해놓았다.

# 사용법

## Store 생성하기

```jsx
import create from "zustand";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
```

## Store 접근하기

```jsx
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```

사용법은 정말 간단하다. create 함수로 상태와 액션을 함께 정의해주고 해당 store를 호출해 사용하면 된다. 따로 store별 name을 지정할 필요도 없다.

상태를 변경할 때는 set 함수를 호출해 변경할 상태를 넘겨주면 된다.

## 상태에 접근하기

```jsx
1)
const state = useBearStore()

2)
const nuts = useBearStore((state) => state.nuts)
const honey = useBearStore((state) => state.honey)
```

내가 생각했던 것과 가장 다르게 동작했던 부분이 여기였다. 분명 렌더링하고 있는 상태에 어떤 변화도 없었는데 다른 상태가 변할때에도 해당 컴포넌트가 계속해서 리렌더링 되는 것이었다. 이 부분의 문서를 제대로 읽었어야 했는데 껄껄.

zustand에서는 기본적으로 `strict-equality(old === new)`로 상태의 변화 여부를 판단한다. 따라서 1과 같이 store에 접근할 경우 A 컴포넌트에서 a라는 상태만 렌더링을 하고 있지만, b 상태에 변화가 일어날 경우 strict equality 비교로 인해 state가 변화가 일어났다고 판단하고 A 컴포넌트 또한 렌더링이 된다. 그래서 2와 같이 직접 사용할 상태만을 리턴해주도록 사용해야 한다.

```jsx
import shallow from "zustand/shallow";

// Object pick, re-renders the component when either state.nuts or state.honey change
const { nuts, honey } = useBearStore(
  (state) => ({ nuts: state.nuts, honey: state.honey }),
  shallow,
);

// Array pick, re-renders the component when either state.nuts or state.honey change
const [nuts, honey] = useBearStore(
  (state) => [state.nuts, state.honey],
  shallow,
);

// Mapped picks, re-renders the component when state.treats changes in order, count or keys
const treats = useBearStore((state) => Object.keys(state.treats), shallow);
```

만약, store 안의 여러 개의 상태에 접근하고 싶은데 리렌더링을 피하고 싶다면 store 함수를 호출할 때 2번째 인자로 equality function을 넘겨주면 된다. zustand에서 지원해주는 shallow 함수도 있는데 이를 넘겨줘도 가능하다.

## 상태 업데이트 하기

```jsx
import create from 'zustand'

const useCountStore = create((set) => ({
  count: 0,
  // 1)
	inc: () => set((state) => ({ ...state, cuont: state.count + 1 }))
	// 2)
  inc: () => set((state) => ({ count: state.count + 1 })),
}))
```

리액트의 `useState` 와 같이 zustand에서는 상태를 불변적으로 업데이트 해야 한다. 따라서 깊이 중첩된 객체를 수정해야 하는 경우 immer와 같은 라이브러리를 통해 상태를 업데이트 해주면 편하다.

또한, 제공되는 set 함수를 사용할 경우 이미 존재하는 상태와 얕게 merge하기 때문에 1번처럼 state를 spread operator를 통해 사용해 merge 하지 않아도 된다. 즉, 2번처럼 사용해도 초기에 정의해놓은 count나 inc 함수는 자동으로 merge가 된다.

## 상태 덮어쓰기

```jsx
const useFishStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteEverything: () => set({}, true), // clears the entire store, actions included
}));
```

action 함수 생성하며 set 함수를 호출하게 되는데 두 번째 인자로 true를 넘겨주면 해당 store의 모든 상태와 액션들이 모두 제거된다.

## get 함수로 상태 읽기

```jsx
const useSoundStore = create((set, get) => ({
  sound: "grunt",
  action: () => {
    const sound = get().sound
    // ...
  }
})
```

action 함수에서 상태를 읽기 위해선 get 함수를 사용하면 된다.

## 컴포넌트 밖에서 상태 읽고 쓰기

```jsx
const useDogStore = create(() => ({ paw: true, snout: true, fur: true }));

// Getting non-reactive fresh state
const paw = useDogStore.getState().paw;
// Listening to all changes, fires synchronously on every change
const unsub1 = useDogStore.subscribe(console.log);
// Updating state, will trigger listeners
useDogStore.setState({ paw: false });
// Unsubscribe listeners
unsub1();
// Destroying the store (removing all listeners)
useDogStore.destroy();
```

zustand는 리액트 컴포넌트 내부가 아닌, 외부 저장소를 이용하기 때문에 컴포넌트 외부에서 상태를 읽고 쓸 수 있다. 하지만 컴포넌트 내부에서 사용할 때처럼 상태가 변할 때마다 바로 반영이 되지는 않기 때문에 바로 상태의 변화를 알기 위해서는 subscribe 과정을 따로 거쳐야 한다.

## 상태 업데이트

```jsx
import create from 'zustand'

const useCountStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
})

// 1)
set((state) => ({ state, count: state.count + 1 }))
// 2)
set((state) => ({ ...state, count: state.count + 1 }))
```

- react의 useState처럼 상태를 immutably하게 업데이트 해야 한다.
- create의 set 함수에서 state를 병합 시켜 …state를 해줄 필요가 없다.
- 하지만, set 함수는 한 단계의 객체만 병합 시키기 때문에, 중첩된 객체를 병합 시킬 땐 주의해야 한다.
- set 함수에서 merge를 막기 위해선, 두 번째 인자로 true를 전달하면 된다.

```jsx
set((state) => newState, true);
```

set 함수에서 merge를 막기 위해서는, 두 번째 인자로 true를 전달하면 된다.

### 값 덮어쓰기

```jsx
const useStore = create((set) => ({
  salmon: 1,
  tuna: 2,
  deleteEverything: () => set({}, true), // clears the entire store, actions included
}));
```

set 함수의 두 번째 인자 기본값은 false인데 true를 넘기면 해당 store의 상태를 모두 지워준다. (action까지!)

## Store

- zustand는 어떤 패턴을 강요하지 않지만 추천하는 패턴이 몇 가지 있다.

1. 하나의 store를 생성한다.
2. 항상 set으로 store를 정의한다.
3. dispatch 함수를 root store에 정의하고 store slice로 store를 업데이트 한다.

**Single Store?**

- zustand의 단점 중 하나는 하나의 store에서 다른 store의 파생된 변화에 대응하기가 좀 까다롭다는 것이다.
- 그래서 single store 패턴을 추천하고 있는 것 같은데, single store로부터 얻는 단점이 더 많아보인다.
- 기존의 리덕스와 같이 flux 패턴 비슷하게도 사용이 가능하다.

[https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md](https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md)

### Persist middleware

- localStorage나 sessionStorage에 저장할 수 있는 미들웨어가 지원된다.

## 특이사항

기존에 recoil을 사용했다보니 recoil의 사용법에 익숙해 좀 헷갈렸던 부분들이다.

### selector

```tsx
// destructuring
const { value } = useStore((state) => ({
  value: state.value,
}));

// selector 적용
const value = useStore((state) => state.value);
```

- descturcturing으로 값을 가져오면 state 안에 다른 상태가 있고 값이 바뀔 경우 value를 사용하고 있는 컴포넌트에서 리렌더링이 일어난다.
- selector처럼 가져올 값을 바로 리턴하면 state 안에 있는 다른 값이 변하더라도 리렌더링을 발생시키지 않는다.
- 모든 store에서 상태를 가져올 때 selector를 적용 시키기 위해 다른 함수를 정의해 store를 감싸줄 수 있다.
- recoil, jotai처럼 리액트 기반에서 사용할 수 있는 상태 관리 라이브러리는 렌더링 최적화를 해준다. 추측컨대, zustand는 리액트에 의존하지 않기 때문에 굳이 최적화를 진행해줄 필요가 없기 때문인가 싶긴 하다.

**여러 상태 슬라이스 하기**

- 기본적으로 strict-equality(old===new)로 변화를 감지한다.
- 렌더링 최적화를 위해, 비교 함수를 두번째 인자로 전달할 수 있다.
- shallow 함수로 비교하면 얕은 비교를 할 수 있다.

[https://github.com/pmndrs/zustand/discussions/999](https://github.com/pmndrs/zustand/discussions/999)

### get 함수로 상태 읽기

```jsx
const useStore = create<{
  a: null | number;
  b: () => boolean;
  addA: (value: number) => void;
  removeA: () => void;
}>((set, get) => ({
  a: null,
 // a값을 가져와 연산된 값을 리턴함
 // 당연히, a가 바뀌었을 때 b도 재실행 되면서 바뀌어야 할 것 같았다.
  b: () => (get().a ? true : false),
  addA: (value) =>
    set({
      a: value,
    }),
  removeA: () =>
    set({
      a: null,
    }),
}));
```

zustand 자체가 리액트 내부가 아닌, 외부에서 상태 관리를 하는, 리액트에 의존적인 라이브러리가 아니다보니 리액트 상태관리 도구와는 약간 다른 점이 있는 것 같기도 하다.

특히 의아했던 점은 get() 함수이다. 당연히 A 상태가 변했을 때 get 함수로 A 상태를 가져와 연산을 거쳐 값을 리턴해주는 B 함수는 A 상태가 변했을 때 B 상태도 변경되는줄 알았는데 아니었다. 그냥 초기에 값을 가져올 때만 유용한 것 같은데, 상태가 계속해서 변할 수 있는 가능성이 충분히 있는데 왜 지원이 안되는지 의문이다.

→ get 함수를 set 함수와 함께 사용하거나, react와 관련이 없는 side effect에서 유용하다. 즉, 저 동작이 애초에 의도했던 동작이라는 것이다.

[https://github.com/pmndrs/zustand/discussions/774#discussioncomment-2102067](https://github.com/pmndrs/zustand/discussions/774#discussioncomment-2102067)

---

출처)

[https://github.com/pmndrs/zustand](https://github.com/pmndrs/zustand)
