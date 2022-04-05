---
sidebar_position: 3
---

# CLI Usage

```bash
npx cospace@latest <command> [<args>] 
```

## Commands

### `init`

```bash
npx cospace@latest init <dir>
```

- Initialize a new CoSpace under the directory specified with all the config files needed. If `<dir>` is not provided, will default to current directory.

### `override`

```bash
npx cospace@latest override
```

- Automatically update the `pnpm.overrides` section of the CoSpace's `package.json`, to ignore semver and always use the local package version (`"workspace:*"`) from the workspace. Useful for when you have pre-release or different major versions of packages in your workspace.

### `purge`

```bash
npx cospace@latest purge
```

- Recursievely delete all `node_modules` from the CoSpace.
