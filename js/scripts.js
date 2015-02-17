$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var placeLocale = $("input#place-locale").val();
    var placeDateStart = $("input#visit-start").val();
    var placeDateEnd = $("input#visit-end").val();
    var placeDescription = $("input#place-description").val();
    var placeHighlights = $("input#place-highlights").val();
    var newPlace = { placeLocale: placeLocale,
                       travelTime: [placeDateStart, placeDateEnd],
                         placeDescription: placeDescription,
                           placeHighlights: placeHighlights };

    $("ul#places-travelled").append("<li><span class=''>"
                      + newPlace.placeLocale
                        + "</span></li>");
  });
});
