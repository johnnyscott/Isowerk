﻿Isowerk.World = function(){
   return {
      // Ambient light by direction
      light_top : 1.3,
      light_left : 1.0,
      light_right : 0.7,
      // ignore while rotation is not present
      light_left_back : 0.6,
      light_right_back : 1.0,
      light_bottom : 0.36,
      
      block_length : 5, // isometric length in pixels of a block side 
      zoom : 1.0, // this won't be implemented for a while 

/* Bryton's contribution:
              asas wjuikooikklll;00000000000000000HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

l,fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffhhhhhhhhhhhhhGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGFGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
*/
      
      blocks : [],
      blockGroups : [], // blocks connected as objects
      
   };
};