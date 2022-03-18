---
sidebar_position: 2
---

# Getting Started

## Prerequisites

- [pnpm](https://pnpm.io/installation)
  - If you're using [Node.js](https://nodejs.org/en/download/) version ^14.19 or ^16.9 you just need to enable pnpm via [corepack](https://github.com/nodejs/corepack).
  - Otherwise install via `npm i -g pnpm`

## Create a new `CoSpace`

### Initialize

```bash
npx cospace@latest init my-cospace
```

### Link your (mono)repos

```bash
cd my-cospace
```

1. Clone all the repos you want to link together under the `repos` sub directory.

1. Update the `pnpm-workspace.yaml` file with all the packages you want to add to your CoSpace. By default all packages under the `repos` directory will be added to your CoSpace, but you probably want to add them at a more granular level.

1. Update the `cospace.code-workspace` file with all the repos you want to add to your [vscode multi-root workspace](https://code.visualstudio.com/docs/editor/multi-root-workspaces).

1. Run `pnpm exec cospace override` to link all the packages in your CoSpace together.

1. Run `pnpm install` to install all the packages you've added to your CoSpace.

1. Run `pnpm build` to build all the packages you've added to your CoSpace using your monorepo task runner. By default we use [lage](https://microsoft.github.io/lage/), but [turborepo](https://turborepo.org/docs) should theoretically work.
