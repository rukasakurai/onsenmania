(function($) {
 $(function() {
   var eTypes = {'eSube': 'subesube',
                 'ePoka': 'pokapoka',
                 'eGutu': 'gutugutu',
                 'eKusa': 'kusakusa'};
   $(".tag").click(function() {
     var id = $(this).attr("id");
     if (eTypes[id] !== undefined) {
       $(".etype").css('color', '#aaa');
       $(".tag").css('background-color', 'salmon');
       $(this).css('background-color', '#bf0000');
       $("." + eTypes[id]).css('color', '#000');
     }
   });

   $(".onsen").click(function() {
     $("#right-navi").empty().hide();
     var keyword = $(this).text();
     $.ajax({
       url: '/search',
       dataType: 'jsonp',
       data: {keyword: keyword},
       success: function(data) {
         var hotels = data['Body']['KeywordHotelSearch']['hotel'];
         for (var i = 0; i < hotels.length; i++) {
           var hotel = hotels[i];
           console.log(hotel);
           var hotelName = hotel['hotelBasicInfo']['hotelName'];
           var hotelInformationUrl = hotel['hotelBasicInfo']['hotelInformationUrl'];
           var hotelThumbnailUrl = hotel['hotelBasicInfo']['hotelThumbnailUrl'];
           var linkHtml = '<p><img src="' + hotelThumbnailUrl + '"><a href="' + hotelInformationUrl + '" target="_blank">' + hotelName + '</a></p>';
           $(linkHtml).appendTo("#right-navi");
         }
         $("#right-navi").fadeIn();
       },
       error: function(e) {
         // TODO: error handling
       }
     });
   });
 });
})(jQuery);
