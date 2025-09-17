// Google Earth Engine Visualization Script
// Visualize AlphaEarth Foundations Model Dataset v1 with custom polygons for 'apoi' and 'ebuteoni'

// 1. Load the AlphaEarth Foundations Model Dataset v1
// (Replace 'ALPHAEARTH/DATASET/V1' with the correct GEE asset ID if it differs)
var alphaearth = ee.ImageCollection('ALPHAEARTH/DATASET/V1');

// 2. Filter to 2024 and select relevant bands for visualization
var image = alphaearth
  .filterDate('2024-01-01', '2024-12-31')
  .select('A01', 'A16', 'A09') // Replace with actual band names if needed
  .median();

// 3. Visualization parameters for AlphaEarth data (RGB composite)
var visParams = {
  bands: ['A01', 'A16', 'A09'],
  min: -0.3,
  max: 0.3,
};

// 4. Define your locations of interest (apoi and ebuteoni)
// Replace these with your actual FeatureCollections if you have them uploaded as assets
// Example below assumes you have assets at 'users/yourusername/apoi' and 'users/yourusername/ebuteoni'
var apoi = ee.FeatureCollection('users/yourusername/apoi');
var ebuteoni = ee.FeatureCollection('users/yourusername/ebuteoni');

// 5. Add base map and center on your locations
Map.setOptions('SATELLITE');
Map.setCenter(5.2122, 5.7737, 8);

// 6. Add the AlphaEarth image layer
Map.addLayer(image, visParams, 'AlphaEarth Foundations v1');

// 7. Style your polygons for clear overlay
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

// 8. Add polygons to the map
Map.addLayer(apoi_styled, {}, 'Apoi Transparent');
Map.addLayer(ebuteoni_styled, {}, 'Ebuteoni Transparent');
