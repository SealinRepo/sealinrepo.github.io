let a_idx = 0;
jQuery(document).ready(function ($) {
  $(".container").click(function (e) {
    var ele = $(e.target);
    if (ele[0].tagName === 'A') {
      return;
    }
    const a = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    const $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    const x = e.pageX,
      y = e.pageY;
    var isLight = false;
    var maxDepth = 20;
    var currentDepth = 0;
    for (var i = 0; i < maxDepth; i++) {
      if (ele.attr('id') === 'sidebar') {
        isLight = true;
        break;
      }
      ele = ele.parent();
    }
    $i.css({
      "z-index": 1050,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": isLight ? light() : s(),
      "opacity": 1,
      "font-family": "华文行楷, sans-serif"
    });
    // 如果鼠标已在屏幕边缘, 修正气泡位置
    if ($(window).width() - x < 40) {
      $i.css({
        "left": $(window).width() - 40
      });
    }
    $("body").append($i);
    $i.animate({
        "top": $(document).height() - y > 200 ? y + 180 : y - 180,
        "opacity": 0
      },
      2000,
      function () {
        $i.remove();
      });
  });
  setTimeout('delay()', 2000);
});

function delay() {
  $(".buryit").removeAttr("onclick");
}

function s() {
  return "rgb(" + ~~(150 * Math.random()) + "," + ~~(150 * Math.random()) + "," + ~~(150 * Math.random()) + ")"
}

function light() {
  return "rgb(" + ~~(250 * Math.random()) + "," + ~~(250 * Math.random()) + "," + ~~(250 * Math.random()) + ")"
}
