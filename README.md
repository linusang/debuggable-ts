## Introduction

A project to be able to debug and step through simple TypeScript file in VS Code.

Useful to fiddle around your TypeScript code with the ability to stop at breakpoints and debug and inspect variables.

## Getting started

Make sure you have [git](https://git-scm.com/) and [node](https://nodejs.org/) installed.

1. Navigate to your desired folder to save the files
2. Execute the following commands in that terminal:

```
npx degit https://github.com/linusang/debuggable-ts.git
```

3. Say yes if prompted

```
npm install
```

## Usage

1. open project folder in VS Code
2. create any `.ts` file or go to `src/main.ts`
3. add in your code
4. put a breakpoint
5. go to Debug > Start Debugging
6. you should see that the running code stops at the breakpoint you set
