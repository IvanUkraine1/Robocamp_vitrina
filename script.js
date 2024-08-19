$(document).ready(function() {
    $('.product').on('click', function() {
        var imageSrc = $(this).find('img').attr('src');
        var title = $(this).find('.product-title').text();
        var description = $(this).find('aside').html(); 
        
        $('#modal-image').attr('src', imageSrc);
        $('#modal-title').text(title);
        $('#modal-description').html(description);
        $('#product-modal').css('display', 'flex'); 
    });
    

    $('.close-btn').on('click', function() {
        $('#product-modal').css('display', 'none'); 
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#product-modal')) {
            $('#product-modal').css('display', 'none'); 
        }
    });
});
