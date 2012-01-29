$(function () {
  var images_num = 49
    , images_el = $('#fotos');
  for(var i = 0; i <= images_num; i++) {
    var row = '';
    row += "<div class='row'>";
    row += "<div class='map span4'>";
    row += "<img src='images/maps/" + i + ".png' alt='Mapa Casa Empordà'>";
    row += "</div>";
    row += "<div class='foto span12'>";
    row += "<a href='#'>";
    row += "<img class='thumbnail' src='images/fotos/" + i + ".jpg' alt='Casa Empordà'>";
    row += "</a>";
    row += "</div>";
    row += "</div>";
    images_el.append(row);
  }
});
