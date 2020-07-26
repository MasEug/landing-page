let lastScroll = 64;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        $('.burger').removeClass('active');
        $('#menu').removeClass('active');
    }

    lastScroll = currentScroll;
})

$('.burger').on('click ', function(event) {

    console.log('--', event)
    $('.burger').toggleClass('active');
    $('.burger').find('div').removeClass('no-animation');
    $('#menu').toggleClass('active');
})

// close dropdown 
$(document).on("click", function(e) {
    if (e.target.id === 'menu') {
        $('.burger').removeClass('active');
        $('#menu').removeClass('active');
    }
})