$('#rating-form').on('change','[name="rating"]',function(){
    $('#selected-rating').text($('[name="rating"]:checked').val());
   });