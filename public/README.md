# kuola-member

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

<!-- 组件的自动导入 在这个文件 vite.config.ts-->

<!-- ppinai 辅助函数  storeToRefs工具函数storeToRe可以辅助保持数据(state + getter) 的响应式解构 -->

<!-- git仓库   用处提交前做代码检查 -->
<!-- 1.初始化 git 仓库，执行 git init 即可 -->
<!-- 2.初始化 husky 工具配置，执行 pnpm dlx husky-init && pnpm install 命令即可https://typicode.github.io/husky/ -->
<!-- 再配置husky文件-->
<!-- 暂存区 eslint 校验
1.安装 lint-staged 包 pnpm ilint-staged -D
2.packagejson 配置lint-staged 命令
3..husky/pre-commit 文件修改 -->
<!-- 教学地址3-9  3-3 -->
