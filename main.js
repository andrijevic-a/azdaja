// Smooth scrolling

$('.navbar a, header .container div a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    if (window.innerWidth > 768) {
    $('html, body').animate (
      {
        scrollTop: $(hash).offset().top - 90
      },
      800
    );} else {
      $('html, body').animate (
        {
          scrollTop: $(hash).offset().top - 50
        },
        800
      );
    }
  }
  });


  // Video

    $(document).ready(function(){
      $('.video-list video').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('src')
        $('.main-video video').attr('src',src)
      });
    });