// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CoSpace",
  tagline: "Link multiple (mono)repos together!",
  url: "https://aruniverse.github.io/",
  baseUrl: "/cospace/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  // favicon: "img/favicon.ico",
  organizationName: "aruniverse",
  projectName: "cospace",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/aruniverse/cospace/tree/master/docs/docs/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/aruniverse/cospace/tree/master/docs/blogs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "CoSpace",
        // logo: {
        //   alt: "CoSpace Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
          // { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/aruniverse/cospace",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub Discussions",
                href: "https://github.com/aruniverse/cospace/discussions",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/aruniverse/cospace",
              },
            ],
          },
        ],
        copyright: `MIT Licensed | Copyright © ${new Date().getFullYear()} Arun George`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
