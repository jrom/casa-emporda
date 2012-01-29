$(function () {
  var images_num = 49
    , images_el = $('#fotos');
  for(var i = 0; i <= images_num; i++) {
    var row = '';
    row += "<div class='row foto jumpable' id='foto-" + i + "'>";
    row += "<div class='map span4'>";
    row += "<img src='images/maps/" + i + ".png' alt='Mapa Casa Empordà'>";
    row += "</div>";
    row += "<div class='foto span12'>";
    row += "<a href='#foto-" + i + "'>";
    row += "<img class='thumbnail' src='images/fotos/" + i + "_big.jpg' alt='Casa Empordà'>";
    row += "</a>";
    row += "</div>";
    row += "</div>";
    images_el.append(row);
  }
});

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#][data-jumpable=true]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

});
