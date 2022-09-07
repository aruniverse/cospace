/** @type {import("lage").ConfigOptions } */
module.exports = {
  pipeline: {
    build: ["^build"],
    test: ["build"],
    lint: [],
    clean: {
      cache: false,
    },
  },
  cache: true,
};
