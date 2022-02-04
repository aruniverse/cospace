# CoSpace

Setup a `CoSpace` to link multiple (mono)repos together!

## Powered by:

- [vscode multi-root workspace](https://code.visualstudio.com/docs/editor/multi-root-workspaces)
- [pnpm workspaces](https://pnpm.io/workspaces)
- [lage](https://microsoft.github.io/lage/)

## Getting started

1. Clone all the repos you want to link together under the `repos` directory.

1. Update the `pnpm-workspace.yaml` file with all the packages you want to add to your cospace.

1. You can run `pnpm list-pkgs` to get an exhaustive list of all the packages you've added to your cospace. All the packages you want to link will need to be defined in the `pnpm.overrides` section of the cospace's `package.json`, and you'll need to set their version to `"workspace:*"`. 

    > TODO: Automate this step

1. Run `pnpm install` to install all the packages you've added to your cospace.

2. Run `pnpm build` to build all the packages you've added to your cospace using your monorepo task runner. I'm using [lage](https://microsoft.github.io/lage/), but [turborepo](https://turborepo.org/docs) should theoretically work.


## Additional Reading:

- [git sparse-checkout](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)
- [turborepo](https://turborepo.org/docs)
- [lage](https://microsoft.github.io/lage/)
- [pnpm](https://pnpm.io/pnpm-cli)
- [git submodules](https://www.atlassian.com/git/tutorials/git-submodule)
- [git subtree](https://www.atlassian.com/git/tutorials/git-subtree)