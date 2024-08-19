$(document).ready(function() {
    $('.add-product').on('click', function() {
        $('#product-modal').css('display', 'flex');
    });

    $('.close-btn').on('click', function() {
        $('#product-modal').fadeOut();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#product-modal')) {
            $('#product-modal').fadeOut();
        }
    });

    $('#add-product-form').on('submit', function(event) {
        event.preventDefault();

        var title = $('#product-title').val();
        var description = $('#product-description').val();
        var imageFile = $('#product-image')[0].files[0];

        if (imageFile) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var newProductHtml = `
                    <div class="product">
                        <img src="${e.target.result}" alt="${title}">
                        <div class="product-title">${title}</div>
                        <aside>
                            ${description}
                        </aside>
                    </div>`;
                
                $(newProductHtml).insertAfter('.add-product');
                $('#product-modal').fadeOut();
                $('#add-product-form')[0].reset();
            };
            reader.readAsDataURL(imageFile);
        }
    });
});
