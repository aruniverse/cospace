# CoSpace

Setup a `CoSpace` to link multiple (mono)repos together!

## Powered by

- [vscode multi-root workspace](https://code.visualstudio.com/docs/editor/multi-root-workspaces)
- [pnpm workspaces](https://pnpm.io/workspaces)
- [lage](https://microsoft.github.io/lage/)

## Getting started

### Initialize

```bash
npx cospace@latest init my-cospace
```

### Link your (mono)repos

```bash
cd my-cospace
```

1. Clone all the repos you want to link together under the `repos` sub directory.

1. Update the `pnpm-workspace.yaml` file with all the packages you want to add to your `CoSpace`. By default all packages under the `repos` sub directory will be added to your `CoSpace`; you will probably want to be more specific and build/link only what you need.

1. Update the `cospace.code-workspace` file with all the repos you want to add to your [vscode multi-root workspace](https://code.visualstudio.com/docs/editor/multi-root-workspaces).

1. Run `pnpm exec cospace override` to automatically update the `pnpm.overrides` section of the `CoSpace`'s `package.json`, to link all the dependencies together with the copy found in the workspace. This will ignore [semver](https://semver.org/) and always use the local package version from the workspace, very useful for when you have pre-release versions of packages in your workspace.

1. Run `pnpm install` to install all dependecies in your workspace and link all the packages you've added to your `CoSpace`.

1. Run `pnpm build` to build all the packages you've added to your `CoSpace` using your monorepo task runner. By default we use [lage](https://microsoft.github.io/lage/), but [turborepo](https://turborepo.org/docs) should work as well.

For more information visit the <a href="https://aruniverse.github.io/cospace/" target="_blank">docs site</a>.

## example usage

- <a href="https://github.com/aruniverse/itwin-cospace" target="_blank">itwin-cospace</a>, an example of a `CoSpace` to help develop with the iTwin Platform.

## Notes

### Additional Reading

- [git sparse-checkout](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)
- [git submodules](https://www.atlassian.com/git/tutorials/git-submodule)
- [git subtree](https://www.atlassian.com/git/tutorials/git-subtree)
- [pnpm](https://pnpm.io/pnpm-cli)
- [lage](https://microsoft.github.io/lage/)
- [turborepo](https://turborepo.org/docs)

### sparse-checkouts

```sh
git clone --filter=blob:none --no-checkout {repo}
cd {repo}
git checkout {branchName}
git sparse-checkout init --cone
git sparse-checkout set [...allSubDirs]
```
