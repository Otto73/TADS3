#charset "us-ascii"
#include "adv3.h"

/*   
 *   Modifying the status line is a good place to start in changing the overall
 *   look of a TADS 3 game. The status line is a separate iFrame within the main
 *   window. The files which relate to it are: status.t within the TADS
 *   adventure library, and statwin.htm, statwin.css and statwin.js in webuires.
 */


/*
 *   As some of the most common questions for new IF players are along the lines
 *   of 'what is the aim?', we can show this explicitly in the status line. The
 *   'goals' in the hint system correspond to this, but are hard to access, so
 *   we are going to set up a simpler system of 'aims' which can be placed in
 *   the status line.
 */

/* 
 *   We set up a class of aims and then create three instances for the demo
 *   game.
 */

class Aim : Thing
    text = ''
;

visitHallway: Aim
    text = 'Visit the hallway. '
    
;

visitKitchen: Aim
    text = 'Visit the kitchen. '
    
;

eatBread: Aim
    text = 'Eat the bread. '
    
;

/*
 *   We can now add a line in the 'entering room' method of the rooms that
 *   changes the aim when the player enters for the first time.
 */

modify entryway
    enteringRoom(traveler)
    {
        statusLine.currentAim = visitHallway.text;  
        statuslineBanner.sendWinEvent('<startBlink></startBlink>');
        statuslineBanner.sendWinEvent('<stopBlink></stopBlink>');
    }
    
;       

modify hallway
    enteringRoom(traveler)
    {
        statusLine.currentAim = visitKitchen.text; 
        statuslineBanner.sendWinEvent('<startBlink></startBlink>');
        statuslineBanner.sendWinEvent('<stopBlink></stopBlink>');
    }
    
;


/*
 *   ...and another one in the description of the kitchen that changes the
 *   aim when the player arrives for the first time.
 */

modify kitchen
    enteringRoom(traveler)
    {
        statusLine.currentAim = eatBread.text; 
        statuslineBanner.sendWinEvent('<startBlink></startBlink>');
        statuslineBanner.sendWinEvent('<stopBlink></stopBlink>');
    }
    
;  
    
/*
 *   Modify the status line, which is initially defined in status.t
 */

modify statusLine

/*
 *   Set up 'currentAims' as a vector to hold the current aim, and create a
 *   starting aim
 */
    
startingAim = visitHallway   
currentAim = startingAim.text
 

/* 
 *   This creates the left portion of the status line. It's originally set to
 *   show the room name, which gives a 'look around' command on click. However,
 *   since we're setting up a 'look around' command in the menu, and also
 *   creating a map, there's no need for this, so we'll replace it with 'aim'.
 */
    
showStatusLeft()
    {
//      This is modified to show what the player's current aim is
    "Aim: <<statusLine.currentAim>>";
    }
    
;