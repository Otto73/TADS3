 function mapWinInit()
    {
        utilInit();
        getInitState();     
    }

var mapImages = new Array("entryway.png", "grass.png", "hallway.png", "hidden.png", "kitchen.png")
  
var imageTable = new Array
    imageTable[0]=[1, 1, 1]
    imageTable[1]=[1, 0, 1]
    imageTable[2]=[1, 2, 1]
    imageTable[3]=[1, 4, 1]
    imageTable[4]=[1, 1, 1]
    imageTable[5]=[1, 1, 1]

// The 'reveal' table keeps track of which rooms have been visited, so the mapper knows which 
// to blank and which to reveal. There should be a corresponding 0 or 1 'bit' for each 
// location on the map.

var revealTable = new Array
    revealTable[0]=[1, 1, 1]
    revealTable[1]=[1, 1, 1]
    revealTable[2]=[1, 0, 1]
    revealTable[3]=[1, 0, 1]
    revealTable[4]=[1, 1, 1]
    revealTable[5]=[1, 1, 1]
    
/* 
 *   The line 'xmlHasChild' checks for a response from the server with the XML
 *   tag of 'map'.
 *   The variable 'y' is sent from the server - it's the variable 'ycoord' of 
 *   the room the player is in, encoded between the two XML <map> tags.
 *   't2' selects a line from the array 'imageTable' according to the variable 'y'.
 *   cMidImgRef etc.  select a variable from the array t according to the array
 *   index, which will later become the x-coordinate
 *   
 */

// for some reason this doesn't work unless the variables are defined outside the function
var tileIndex, tile, imgSrc
    
function onGameEvent(req, resp) {
	if (xmlHasChild(resp, "map")) {
                var x=parseInt(xmlChildText(resp, "xcoord"));
                var y=parseInt(xmlChildText(resp, "ycoord"));
// use the x and y co-ordinates to adjust the reveal table if necessary
                revealTable[y][x] = 1;   
// the lowest row of the -now- 4x5 grid 
                tileIndex = imageTable[y-1][x+1]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y-1][x+1] == 1)
                        {document.getElementById("4,3").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("4,3").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
                tileIndex = imageTable[y-1][x-1]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y-1][x-1] == 1)
                        {document.getElementById("4,1").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("4,1").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
                tileIndex = imageTable[y-1][x]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y-1][x] == 1)
                        {document.getElementById("4,2").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("4,2").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}       
// the lower row of the -now- 4x5 grid 
                tileIndex = imageTable[y][x+1]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y][x+1] == 1)
                        {document.getElementById("3,3").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("3,3").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
                tileIndex = imageTable[y][x-1]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y][x-1] == 1)
                        {document.getElementById("3,1").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("3,1").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
                tileIndex = imageTable[y][x]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y][x] == 1)
                        {document.getElementById("3,2").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("3,2").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
// the centre row of the 4x5 grid        
                tileIndex = imageTable[y+1][x+1]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y+1][x+1] == 1)
                        {document.getElementById("2,3").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("2,3").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
                tileIndex = imageTable[y+1][x-1]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y+1][x-1] == 1)
                        {document.getElementById("2,1").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("2,1").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
                tileIndex = imageTable[y+1][x]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y+1][x] == 1)
                        {document.getElementById("2,2").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("2,2").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
// the upper row of the 4x5 grid            
                tileIndex = imageTable[y+2][x+1]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y+2][x+1] == 1)
                        {document.getElementById("1,3").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("1,3").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
                tileIndex = imageTable[y+2][x-1]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y+2][x-1] == 1)
                        {document.getElementById("1,1").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("1,1").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
                tileIndex = imageTable[y+2][x]
                tile = mapImages[tileIndex]
                imgSrc='webuires/Tiles/' + tile;
                    if (revealTable[y+2][x] == 1)
                        {document.getElementById("1,2").innerHTML='<img src="' + imgSrc + '"/>';}
                    else
                        {document.getElementById("1,2").innerHTML='<img src="webuires/Tiles/hidden.png"/>';}
    }
}

function onGameState(req, resp)
    {}