$('.hamburger').on('click',function(){
    $('body').addClass('sidebar-open');
})
$('.close-sidebar').on('click',function(){
    $('body').removeClass('sidebar-open');
})

$('.notification').on('click',function(){
    $(this).fadeOut();
});

$('.select-file').on('click',function(){
    $('.hidden-select-file').click();
})

$('.three-dots').on('click',function(){
    $('.chat-action').toggleClass('active')
})
$('.chat-box').on('click',function(){
    $('.chat-action').removeClass('active')
})

// $(function() {
//     $(".three-dots").on("click", function(a) {
//       $(".chat-action").addClass("active");
//       a.stopPropagation()
//     });
//     $(document).on("click", function(a) {
//       if ($(a.target).is(".chat-action") === false) {
//         $(".chat-action").removeClass("active");
//       }
//     });
//   });