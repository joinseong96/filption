$(function () {
  window.onload = function () {
    var bannerLeft = 0;
    var first = 1;
    var last;
    var imgCnt = 0;
    var $img = $(".tabs_icon_slide");
    var $first;
    var $last;

    $img.each(function () {
      $(this).css("left", bannerLeft);
      bannerLeft += $(this).width() + 5;
      $(this).attr("id", "banner" + ++imgCnt);
    });

    if (imgCnt > 6) {
      last = imgCnt;

      setInterval(function () {
        $img.each(function () {
          $(this).css("left", $(this).position().left - 1);
        });
        $first = $("#banner" + first);
        $last = $("#banner" + last);
        if ($first.position().left < -400) {
          $first.css("left", $last.position().left + $last.width() + 5);
          first++;
          last++;
          if (last > imgCnt) {
            last = 1;
          }
          if (first > imgCnt) {
            first = 1;
          }
        }
      }, 20);
    }
  };
  });