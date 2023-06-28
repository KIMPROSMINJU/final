$(document).ready(function(){
    var width = $('[data-role = "slider"]').attr('data-width');
    var height = $('[data-role = "slider"]').attr('data-height');
    var count = $('[data-role = "slider"] div.item').length;

    $("[data-role='slider']").css({
        position: 'relative',
        overflow: 'hidden',
        width: width,
        height: height
    }).find(".container").css({
        position: 'absolute',
        overflow: 'hidden',
        width: count * width
    }).find(".item").css({
        width: width,
        height: height,
        float: 'left'
    });

    var currentPage = 0;
    var changePage = function(){
    $("[data-role='slider'] >.container").animate({
        left: -currentPage * width
        }, 500);
    };
                
    $("#left-button").click(function(){
        if(currentPage > 0){
            currentPage -= 1;
            changePage();
        }
    });

    $("#right-button").click(function(){
        if(currentPage < count - 1){
            currentPage += 1;
            changePage();
        }
    });
});

$(document).ready(function(){
    $('.outer-menu').hover(function(){
        $(this).find('.inner-menu').show();
    }, function(){
        $(this).find('.inner-menu').hide();
    });
});