$(document).ready(function(){
  console.log('hi')

  $('.dead-link').click(function(e){
    e.preventDefault();
  });

  $('.jumpto').click(function(e){
    e.preventDefault();
    var targetElement;

    switch(e.currentTarget.classList[0]){
      case 'jumpto-reviews':
        targetElement = '#reviews'
        break;
      case 'jumpto-desc':
        targetElement = '#description'
        break;
      case 'jumpto-specs':
        targetElement = '#specifications'
        break;
      case 'jumpto-related':
        targetElement = '#related-products';
        break;
      case 'jumpto-videos':
        targetElement = '#videos'
        break
      default:
        targetElement = '#product'
        break;
    }

    $('html, body').animate({
        scrollTop: $(targetElement).offset().top
    }, 1000);
  });
})