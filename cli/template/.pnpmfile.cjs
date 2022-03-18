// A hack only to be used when packages have incorrect dependencies
function readPackage(pkg) {
  // if (pkg.name == "foo") {
  //   pkg.dependencies["bar"] = "workspace:*";
  //   pkg.devDependencies["baz"] = "workspace:*";
  // }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
