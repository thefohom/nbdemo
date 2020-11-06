console.log("加载成功");
/*
  配置要引入的模块的路径 jquery也遵从AMD规范
*/
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    index: "index",
    banner: "banner"
  },
  //jquery-cookie 是依赖于jquery开发
  shim: {
    //设置依赖关系
    "jquery-cookie": ["jquery"],
    //parabola 不遵从AMD规范
    parabola: {
      exports: "_",
    },
  },
});

require(["index", "banner"], function(index, banner){
    index.download();

  })