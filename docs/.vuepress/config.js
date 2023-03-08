const sidebarConfig = require('./sidebar.config.json')

module.exports = {
  base: "/draftbook/",
  themeConfig: {
    sidebar: sidebarConfig,
    lastUpdated: '上次更新',
    navbar: false
  }
}
