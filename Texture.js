// Texture refers to image HAS pixels
Isowerk.Texture = function(){
   return {
     textureId : -1, // lookup ID for texture
     imageId : -1,   // lookup for image in assetmanager
     data : [],    // image data clipped by mask
     
     /* Rectangular Mask */
     maskX : -1,
     maskY : -1,
     maskWidth : -1,
     maskHeight : -1  
  
   };
};