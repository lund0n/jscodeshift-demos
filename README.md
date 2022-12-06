# JSCodeshift Demos

These examples were primarily created to demonstrate the use of [`jscodeshift`][jscodeshift].

## Getting Started

This project uses [`pnpm`][pnpm] and is compatible with NodeJS versions 16.10 and newer.

```bash
git clone https://github.com/lund0n/jscodeshift-demos
cd jscodeshift-demos
corepack enable # if you haven't previously used corepack
pnpm install
pnpm test
```

## AST Examples:

- Assignment statement: http://astexplorer.net/#/gist/905172d787caa3249a1d4a77cbdf0bd3/8f52b24b3d48f5d79ac1dbec69580bd0b5882b44
- Function declarations: http://astexplorer.net/#/gist/59d553dd71732444d00efc7833a9a344/ad7106e799552276b416dc3aa340bfe1f2a8cc36
- If statements: http://astexplorer.net/#/gist/59d553dd71732444d00efc7833a9a344/7d5aec7e56ea8192a8343ead8638a21b8c0e2028

## Code Mod Examples

To run the examples:

```bash
cd examples
pnpm example-1 # examples 1-6 are available.
```

### Example List

1. Rename an identifier.
2. Rename multiple identifiers.
3. Rename the identifier of a parameter in a function. (targeted selector)
4. Modify the source of an import statement.
5. Ensure curly braces/code block surrounds the results of every `if` and `else` statement.
6. Same as example 5, but uses remotely-published code.

[jscodeshift]: https://github.com/facebook/jscodeshift/
[pnpm]: https://pnpm.io/