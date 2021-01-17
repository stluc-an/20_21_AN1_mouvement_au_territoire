const panoImage = document.querySelector('.pano-image');
const  miamiPano = 'pano.jpg';

const panorama = new PANOLENS.ImagePanorama(miamiPano);
const viewer =  new PANOLENS.Viewer({
  container: panoImage
});

Viewer.add(panorama);
