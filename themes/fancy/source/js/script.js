// 等待整个页面的HTML加载完成后再运行脚本，这是个好习惯
document.addEventListener('DOMContentLoaded', function() {

  // 只选择 href 属性以 '#' 开头的 <a> 标签 (内部锚点链接)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // 阻止默认的、瞬间跳转的行为
      e.preventDefault();

      // 平滑滚动到对应的 section
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

});