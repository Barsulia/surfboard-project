const screenWidth = $(window).width();
const recWidthMath = (myItem) => {
  let recItemWidth = 0;
  const titleWidth = myItem.closest('.surfboards-menu__item').width();
  const titlesWidth = titleWidth * 3;

  const isTablet = window.matchMedia("(max-width: 768px)").matches;
  //const isPhones = window.matchMedia("(max-width: 480px)").matches;

  const textContent = myItem.find('.surfboards-menu__content');
  const paddingLeft = parseInt(textContent.css('padding-left'));
  const paddingRight = parseInt(textContent.css('padding-right'));

  if (isTablet) {
    recItemWidth = screenWidth - titlesWidth;
  } else {
    recItemWidth = 524;
  }
  //if (isPhones) {
   // recItemWidth = screenWidth - titleWidth;
  //} 

  return {
    container: recItemWidth,
    textContent: recItemWidth - paddingLeft - paddingRight
  }
};

const closeItems = (myItems) => {
  if (myItems.hasClass('active')) {
    myItems.removeClass('active');
    const container = myItems.find('.surfboards-menu__container');
    container.width(0);
  } 
};

$('.surfboards-menu__title').click(e => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const items = $('.surfboards-menu__item');
  const itemCurrent = $this.closest('.surfboards-menu__item');
  const openContainer = itemCurrent.find('.surfboards-menu__container');
  const recWidth = recWidthMath(openContainer);
  const textBlock = openContainer.find('.surfboards-menu__content');
  //const title = items.find('.surfboards-menu__title');

  if (itemCurrent.hasClass('active')) {
    itemCurrent.removeClass('active');
    openContainer.width(0);
  } else {
    closeItems(items);
    itemCurrent.addClass('active');
    openContainer.width(recWidth.container);
    textBlock.width(recWidth.textContent);
    //if ((itemCurrent.width() + recWidth.container) > screenWidth) {
      //console.log(itemCurrent);
      //title.css('width: 0');
    //}
  }
})