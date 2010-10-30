// Material HAS 6 textures
Isowerk.Material = function(){
   return {
      materialName : 'NO NAME',
      
      color : 0x7777a0,
      
      // Texture References (Texture.textureId)
      left  : -1,
      right : -1,
      top : -1,

      // until rotation is implemented these are ignored
      bottom : -1,
      left_back : -1,
      right_back : -1,
   };
};      