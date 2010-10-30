Isowerk.Game = function(){ 
   return {
      assetManager : -1,   // singleton asset manager
      world : -1,          // game world composed of blocks
      
      // Game Modes
      MODE_STARTUP :    0,
      MODE_PLAYING :    1,
      MODE_GAMEOVER :   2,
                 
            
      startUp : function(){
         // initiate canvas and buffer canvas objects
         // create assetmanager 
         // assetmanager => loadimages
         // assetmanager => createBlockPalette (takes materials list)        
         
         // prepare world
      },
            
      run : function(){ 
         // this = > startup 
         // start gameloop          
      },
            
      playingLoop : function(){
         // do playing display logic
      },
      
      titleLoop : function(){
         // do startup display logic
      },                  
      
      gameLoop : function (){
        // switch mode
        // ?normal - playingMode
        // 
      }
   };
}