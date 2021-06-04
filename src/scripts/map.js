let myMap;
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.747890, 37.578576],
    zoom: 14,
    controls: [],
  });

  var myPlacemark = new ymaps.Placemark([55.752004, 37.576133], {}, {
    iconLayout: 'default#image',
    iconImageHref: '/img/map-marker.svg',
    iconImageSize: [58, 73],
    iconImageOffset: [0, 0]
  });

  myMap.geoObjects.add(myPlacemark);
  
  myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);