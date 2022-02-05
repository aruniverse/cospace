# CoSpace

Setup a `CoSpace` to link multiple (mono)repos together!

## Powered by

- [vscode multi-root workspace](https://code.visualstudio.com/docs/editor/multi-root-workspaces)
- [pnpm workspaces](https://pnpm.io/workspaces)
- [lage](https://microsoft.github.io/lage/)

## Getting started

1. Clone all the repos you want to link together under the `repos` directory. You can use [sparse checkouts](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/) to only clone the directories you need.

1. Update the [pnpm-workspace.yaml](pnpm-workspace.yaml) file with all the packages you want to add to your CoSpace.

1. (Optional) Run `pnpm setOverrides` to automatically update the `pnpm.overrides` section of the CoSpace's [package.json](package.json), to use the local package version from the workspace, disregarding semver. Useful for when you have pre-release versions of packages in your workspace.

1. Run `pnpm install` to install all the packages you've added to your CoSpace.

1. Run `pnpm build` to build all the packages you've added to your CoSpace using your monorepo task runner. I'm using [lage](https://microsoft.github.io/lage/), but [turborepo](https://turborepo.org/docs) should theoretically work.

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

### pnpm

#### [link-workspace-packages](https://pnpm.io/workspaces#link-workspace-packages)

- "If you need local packages to also be linked to subdependencies, you can use the `deep` setting"

  ```json
  "pnpm": {
      "link-workspace-packages": "deep"
  }
  ```

#### [prefer-workspace-packages](https://pnpm.io/workspaces#prefer-workspace-packages)

- pros: don't have to explicitly list all packages in the `pnpm.overrides` section.
- cons: if you're linking a repo with HEAD pointing to pre-release packages, those won't be used/linked due to semver 😕
  
  ```json
  "pnpm": {
      "prefer-workspace-packages": true
  }
  ```
