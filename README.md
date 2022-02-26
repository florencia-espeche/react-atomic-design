# Crypto Avisos Component Library

This repo aims to be used as a design system for CryptoAvisos.com
contains several components written in react

# Storybook

Publish is WIP

## Figma references

Publish is WIP

## Core Technologies

-   [ReactJS](https://reactjs.org/)
-   [Styled Components](https://styled-components.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Jest](https://jestjs.io/)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Storybook](https://storybook.js.org/)
-   [ts-jest](https://github.com/kulshekhar/ts-jest)
-   [ts-node](https://github.com/TypeStrong/ts-node)

## How to use this repository

If you don't have yarn installed

```
    npm install -g yarn
```

Install all dependencies

```
    yarn
```

Executes the storybook in http://localhost:6006/

```
    yarn storybook
```

Execute tests

```
    yarn test
```

Execute test by name

```
    yarn test -- 'Button'
```

## Component's structure

Every componente has the same structure

-   `Button/__test__` A folder to keep all tests of the component

-   `Button/__test__/__snapshots__` Where are generated all snapshots of this component

-   `Button/__test__/Button.tsx` Where we craft all the tests of this component

-   `Button/Button.tsx` Where we craft the component

-   `Button/Button.style.ts` Where we craft the styled components to use in Button.tsx

-   `Button/Button.types.ts` Where we craft all types used in Button.tsx

## Atomic design structure

The component archicture is set up following the atomic design methodology.

![Atomic Design](https://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png)

## How to contribute

We use trunk based development

-   We have a branch MAIN
-   To contribute you have to create a branch based on a main branch
-   Generate a Pull Request
-   After Merge your Pull Request
-   Your code will be on the Main branch waiting for a release publish
