var image = alphaearth
  .filterDate('2024-01-01', '2024-12-31')
  .select('A01', 'A16', 'A09') // Replace with actual band name
  .median();
var visParams = {bands: ['A01', 'A16', 'A09'],
  min: -0.3,
  max: 0.3,
};
Map.setOptions('SATELLITE');
Map.setCenter(5.2122, 5.7737, 8);
Map.addLayer(image, visParams, 'AlphaEarth Foundations v1');
var apoi_styled = apoi.style({
  color: 'FF0000',      // Red outline
  width: 2,
  fillColor: '00000000' // Transparent fill
});
var ebuteoni_styled = ebuteoni.style({
  color: 'FFFF00',      // Yellow outline
  width: 2,
  fillColor: '00000000' // Transparent fill
});
Map.addLayer(apoi_styled, {}, 'Apoi Transparent');
Map.addLayer(ebuteoni_styled, {}, 'Ebuteoni Transparent');
