## example-monorepo-api-type-bundling

This was created as an example to [this Stack Overflow question](https://stackoverflow.com/questions/69753952/bundling-typescript-types-from-a-local-yarn-workspace-with-rollup)

#### install

As we're using workspaces, we must install with `yarn`:

```
$ yarn install
```

#### build

The mono repo has two packages. To build them both, just:

```
$ yarn workspace api build && yarn workspace sdk build
```

#### results

What we want to see is the bundled package in `sdk/lib` contain a typescript definition file which has bundled the `api` definition. Currently, it references TypeScript types from `api` using an external import statement. Because the `api` package will not be available to the public, we want the definitions that are imported into the `sdk` to be compiled into the `sdk` build, without reference to the original `api`.