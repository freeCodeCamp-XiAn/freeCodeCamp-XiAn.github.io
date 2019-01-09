module.exports = {
  plugins: [
    // minify css
    require('cssnano')({
      preset: 'default'
    }),
    require('postcss-easy-import')({
      prefix: '_',
      extensions: ['less', 'css']
    }),
    // 处理css前缀
    require('autoprefixer')({
      grid: true
    }),
    // 处理flex浏览器兼容性
    require('postcss-flexibility'),
    // 处理css中rgba颜色代码
    require('postcss-color-rgba-fallback'),
    // 处理css中opacity的IE兼容性。
    require('postcss-opacity')
  ]
}
