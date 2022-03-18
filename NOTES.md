# Notes

## Additional Reading

- [git sparse-checkout](https://github.blog/2020-01-17-bring-your-monorepo-down-to-size-with-sparse-checkout/)
- [git submodules](https://www.atlassian.com/git/tutorials/git-submodule)
- [git subtree](https://www.atlassian.com/git/tutorials/git-subtree)
- [pnpm](https://pnpm.io/pnpm-cli)
- [lage](https://microsoft.github.io/lage/)
- [turborepo](https://turborepo.org/docs)

## sparse-checkouts

```sh
git clone --filter=blob:none --no-checkout {repo}
cd {repo}
git checkout {branchName}
git sparse-checkout init --cone
git sparse-checkout set [...allSubDirs]
```

## pnpm

### [link-workspace-packages](https://pnpm.io/workspaces#link-workspace-packages)

- "If you need local packages to also be linked to subdependencies, you can use the `deep` setting"

  ```json
  "pnpm": {
      "link-workspace-packages": "deep"
  }
  ```

### [prefer-workspace-packages](https://pnpm.io/workspaces#prefer-workspace-packages)

- pros: don't have to explicitly list all packages in the `pnpm.overrides` section.
- cons: if you're linking a repo with HEAD pointing to pre-release packages, those won't be used/linked due to semver 😕
  
  ```json
  "pnpm": {
      "prefer-workspace-packages": true
  }
  ```