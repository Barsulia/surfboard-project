$('.interactive-avatar__link').on('click', e => {
  e.preventDefault();
  const itemTarget = $(e.currentTarget);
  const currentItem = itemTarget.closest('.interactive-avatar');
  const currentLink = itemTarget.attr('href');
  const needItem = $('.reviews__list').find(currentLink);
  needItem.addClass('active').siblings().removeClass('active');
  currentItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active');
});