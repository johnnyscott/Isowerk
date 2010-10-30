// AssetManager has images
Isowerk.AssetManager = function(){
   return {    
      images : [],
      textures : [],
      materials : [],
      
      // creates palette of blocks
      createBlockPalette : function(materialList){ 
         //  parse material list
         //    create materials
         //       create textures from images
      },
      
      
      // image onload hander
      imageLoaded : function(e){
         // get image pixel array from buffer
         console.log(e.target);
         // how to do image data load from buffer canvas
         //Isowerk.Game.bufferCanvas_context.drawImage(e.target, 0, 0);
         //images[].data = Isowerk.Game.bufferCanvas_context.getImageData(0, 0, e.target.width, e.target.height);

      },

      // function loads images from list of paths
      loadImageList : function(imageList) {

         for( var key in imageList){                    
            var length = images.push( { data:[], object: new Image()} ); 
            images[length - 1].object.onload = imageLoaded;
            images[length - 1].object.src = imageList[key];   
            
         }
      },




      getImageById : function (id){
        
      }
   };
}