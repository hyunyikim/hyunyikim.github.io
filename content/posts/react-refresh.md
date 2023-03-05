---
title: "webpack5에서 react HMR 적용하기"
date: "2023-01-15T00:00:00.000Z"
template: "post"
draft: false
slug: "react-refresh"
category: "react"
tags:
  - "react"
description: "(+esbuild-loader)"
socialImage: ""
---

webpack5 기반의 리액트 프로젝트에 HMR을 도입하려고 했다.

우선 webpack-dev-server의 Hot Module Replacement 설정을 true로 바꿔준다. (webpack-dev-server 4버전부터는 이 설정을 사용하는게 default다.)

```jsx
module.exports = {
  devServer: {
    hot: true,
  },
};
```

하지만 여전히 리액트의 상태는 변경되지 않는다. 따로 플러그인을 함께 사용해야 한다. 이전에는 react-hot-loader를 많이 사용했지만 리액트에서 직접 관리하는 react-refresh를 사용하는 추세이다. 아직 react-refresh는 공식적으로 릴리즈 되지는 않았지만 create-react-app에서도 사용되고 있는 것으로 보아 어느 정도는 안정적이라고 보는 것 같다.

우선 `react-refresh`와 `reaact-refresh-webpack-plugin`을 설치해준다.

```jsx
yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

현재 프로젝트에서는 babel-loader가 아닌 esbuild-loader이기 때문에 찾아보았는데 플러그인에 `new ReactRefreshWebpackPlugin()`를 추가만 해주면 리액트의 상태도 HMR이 적용된다.

```jsx
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  devServer: {
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
```

---

출처)  
[https://webpack.js.org/guides/hot-module-replacement/](https://webpack.js.org/guides/hot-module-replacement/)

[https://www.npmjs.com/package/react-refresh](https://www.npmjs.com/package/react-refresh)

[https://github.com/facebook/react/issues/16604#issuecomment-528663101](https://github.com/facebook/react/issues/16604#issuecomment-528663101)

[https://github.com/pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)

[https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/366](https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/366)
