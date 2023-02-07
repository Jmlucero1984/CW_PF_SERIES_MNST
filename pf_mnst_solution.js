function pathFinder(maze, endTurn){
 let monsterPath = '';
 let coord_y_W;
 let mazeDims=[];
 let path="";
 let lines = maze.split('\n');
 mazeDims=[lines.length,lines[0].length]
 lines.forEach((el, i) => {
    if (el.indexOf("W") > -1) coord_y_W = i;
  })
 /* this can be refactor...
  for(let i=0;i<mazeDims[0]-2;i++) path+="S";
  for(let i=0;i<mazeDims[0]-coord_y_W-1;i++) path+="N";
  for(let i=0;i<mazeDims[1]-1;i++) path+="E";
  for(let i=0;i<mazeDims[0]-coord_y_W;i++) path+="S";
  to this: */
  
  path = 'S'.repeat(mazeDims[0]-2)+ 
        'N'.repeat(mazeDims[0]-coord_y_W-1)+
        'E'.repeat(mazeDims[1]-1)+
        'S'.repeat(mazeDims[0]-coord_y_W);
        
  for (let way of path) monsterPath += endTurn(way);
  console.log("monster's path:", monsterPath);
}
  
