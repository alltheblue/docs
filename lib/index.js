let gitalkConfig = {
  clientID: '\u0031\u0062\u0039\u0039\u0038\u0030\u0064\u0030\u0039\u0039\u0062\u0038\u0032\u0030\u0030\u0063\u0033\u0033\u0030\u0033',
  clientSecret:
    '\u0063\u0032\u0066\u0032\u0031\u0039\u0031\u0030\u0066\u0066\u0065\u0030\u0034\u0035\u0063\u0061\u0062\u0039\u0061\u0063\u0033\u0030\u0034\u0065\u0031\u0039\u0033\u0037\u0033\u0031\u0063\u0062\u0062\u0036\u0039\u0034\u0063\u0033\u0061\u0038',
  language: '\x7a\x68\x2d\x43\x4e',
  repo: '\x64\x6f\x63\x73',
  owner: '\u006f\u006e\u0065\u0070\u0069\u0065\u0063\u0065\u002d\u0073\u006d\u0069\u006c\u0065',
  githubID: '\u006f\u006e\u0065\u0070\u0069\u0065\u0063\u0065\u002d\u0073\u006d\u0069\u006c\u0065',
  id: location['\x70\x61\x74\x68\x6e\x61\x6d\x65'],
  perPage: 20,
  admin: ['\x78\x66\x6c\x69\x68\x61\x69\x62\x6f'],
  createIssueManually: true,
  labels: ['Gitalk'],
  distractionFreeMode: false
};

window.$docsify = {
  el: '#app',
  themeColor: '#39BAE8',
  name: 'eTest',
  logo: './img/logo1.jpg',
  auto2top: true, //切换页面后是否自动跳转到页面顶部
  coverpage: true, //封面图
  maxLevel: 3, //配置最大支持渲染的标题层级
  onlyCover: false, // 主页仅加载封面，不能滚动到其他页
  loadSidebar: true, //加载自定义侧边栏
  loadNavbar: true, //加载自定义导航栏
  mergeNavbar: true, // Navbar将在较小的屏幕上与侧边栏合并
  // routerMode: 'history', //路由方式 默认hash
  // basePath: '/',
  // nameLink: '/docs/',
  // subMaxLevel: 2, //自定义侧边栏同时也可以开启目录功能
  subMaxLevel: 3, //自定义侧边栏同时也可以开启目录功能
  repo: 'https://github.com/onepiece-smile/docs', // 右上角小部件
  formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}', //变量显示文档更新日期
  notFoundPage: 'error.md',
  search: {
    placeholder: '  🔍  搜索试试',
    noData: '抱歉！找不到对应的结果'
  },
  pagination: {
    previousText: '上一节',
    nextText: '下一节',
    crossChapter: true
  },
  plugins: [
    // DocsifyCodefund.create('xxxx-xxx-xxx'), // change to your codefund id
    function (hook, vm) {
      hook.beforeEach(function (html) {
        return html + '\n' + ':alarm_clock: 更新于： {docsify-updated} ';
      });

      hook.doneEach(function () {
        var label, domObj, main, divEle, gitalk;
        label = vm.route.path.split('/').pop();
        domObj = Docsify.dom;
        main = domObj.getNode('#main');
        Array.apply(null, document.querySelectorAll('div.gitalk-container')).forEach(function (ele) {
          ele.remove();
        });
        divEle = domObj.create('div');
        divEle.id = 'gitalk-container-' + label;
        divEle.className = 'gitalk-container';
        divEle.style = 'width: ' + main.clientWidth + 'px; margin: 0 auto 20px;';
        domObj.appendTo(domObj.find('.content'), divEle);
        gitalk = new Gitalk(gitalkConfig);
        gitalk.render('gitalk-container-' + label);
      });
    }
  ]
};
