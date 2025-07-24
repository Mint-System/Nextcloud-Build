import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from "@vuepress/plugin-search";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  bundler: viteBundler(),
  lang: "en-US",
  title: "Nextcloud Build",
  description: "The Mint System Nextcloud development environment.",
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules", "!tmp", "!venvmain"],
  theme: defaultTheme({
    logo: "/icon.png",
    repo: "mint-system/nextcloud-build",
    docsBranch: "main",
    editLink: true,
    navbar: [
      { text: "Home", link: "/" },
      { text: "Help", link: "/task" },
      { text: "Mint System", link: "https://www.mint-system.ch" },
    ],
  }),
  plugins: [
    searchPlugin({
      maxSuggestions: 10,
    }),
    shikiPlugin({
      theme: "catppuccin-latte",
      langs: [
        "bash",
        "yml",
        "yaml",
        "json",
        "css",
        "html",
        "xml",
        "groovy",
        "py",
        "python",
        "sql",
        "powershell",
        "txt",
        "csv",
        "mermaid",
        "md",
        "markdown",
        "toml",
        "php",
      ],
    }),
  ],
});
