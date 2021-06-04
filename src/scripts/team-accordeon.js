const myWidth = $(window).width();
$(document).ready(() => {
  $('.team__link').on('click', function(e) {
    e.preventDefault();
    let linkTarget = $(this).closest('.team__item');
    let linkActive = elem => {
      $(elem).closest('.team__item').addClass('team__item--active');
      //if (myWidth <= 768) {
        //let teamAva = $(elem).prev('.team__avatar');
        //$(elem).after(teamAva);
      //};
    };
    let linkNotActive = element => {
      $(element).closest('.team__item').removeClass('team__item--active');
    };

    if (!$('.team__item').hasClass('team__item--active')) {
      linkActive(this);
    } else {
      if (linkTarget.hasClass('team__item--active')) {
        linkNotActive(this);
      } else {
        linkNotActive('.team__link');
        linkActive(this);
      }
    };
  });
});