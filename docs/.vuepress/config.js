const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "vdoing-template",
  description: 'vdoing博客主题模板',
  base: '/vdoing-template/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
// vssue 评论插件
plugins: [
  [
    "vuepress-plugin-vssue-global",
    {
      platform: "github",
      title: "[Comment]<%- frontmatter.title %>",
      needComments: true,
      // 其他的 Vssue 配置
      autoCreateIssue: true,
      clientId: "58152abb02c3be52cf27",
      clientSecret: "236ab8bcb76ff196d520b0c7bfbac45182108344",
      owner: "Zhangchenhao",
      repo: "blog-template",
    },
  ],
],
