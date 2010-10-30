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
         
         // create world
         // world => buildWorld
      },
            
      run : function(){          
         // start gameloop      
         // this = > startup     
      },
            
      playingLoop : function(){
         // do playing display logic
      },
      
      titleLoop : function(){
         // do startup display logic
         // show title screen and debug trace
      },                  
      
      gameLoop : function (){
        // switch mode
        // ?normal - playingMode
        // ? startup - title loop
      }
   };
}