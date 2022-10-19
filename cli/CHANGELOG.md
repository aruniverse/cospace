# CoSpace

## 0.6.0

- Add `update-lockfile` command to update all `pnpm-lock.yaml`s found in the CoSpace
  - Will update pnpm lockfiles used by [@microsoft/rush](https://rushjs.io/pages/intro/welcome/) by using [RUSH_PNPM_STORE_PATH](https://rushjs.io/pages/configs/environment_vars/#rush_pnpm_store_path) env var

## 0.5.0

- Converted to TypeScript
- `override` command will not delete manual user defined overrides

## 0.4.5

### Fix

- Create `pnpm.overrides` if it doesn't exist; happens if user deletes it from their CoSpace or if they didn't use the template

## 0.4.4

### Fix

- Remove pnpm options from template that were never applied

## 0.4.3

### Enhancement

- `override` command now provides a diff of `pnpm.overrides`

## 0.4.2

- miscellaneous updates

## 0.4.1

- Change dep on lage from `latest` to `^1.5.1`; reacting to change made in [microsoft/lage@a83120f](https://github.com/microsoft/lage/commit/a83120f54edad9526205765c7006d240772ef798)

## 0.4.0

### Breaking Change

- Change package name from `create-cospace` to `cospace`

## 0.3.0

### Enhancement

- Added `purge` command to delete all `node_modules` in the `cospace`

## 0.2.1

### Fix

- Pass dir arg to `init` command

## 0.2.0

### Enhancement

- Add `override` command to automatically update the `pnpm.overrides` section of the CoSpace's package.json, to ignore semver and always use the local package version, `"workspace:*"`, from the workspace.

## 0.1.0

- Initial release
