$(function() {
    $('.type_Tap ul li').click(function() {
        var activeTab = $(this).attr('data-tab');
        $('.type_Tap ul li').removeClass('active');
        $('.tap_Content').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
    })
});