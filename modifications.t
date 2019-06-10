#charset "us-ascii"
#include <adv3.h>
#include <en_us.h>

transient menuBar: WebWindow

    vpath = '/menubar.htm'
    src = 'webuires/menubar.htm'
    
;

transient mapWin: WebCommandWin, WebBannerWin
   vpath = '/mapWin.htm'
   src = 'webuires/mapWin.htm'
       
;

modify initDisplay()

{
    
//  set up the command window and status line
    
    webMainWin.createFrame(statuslineBanner, 'statusline',
                           '0, 0, 100%, 10%');
    statuslineBanner.init();
    statusLine.statusDispMode = StatusModeBrowser;
    webMainWin.createFrame(commandWin, 'command','60%, statusline.bottom, 40%, 80%');
    webMainWin.createFrame(mapWin, 'map','0, statusline.bottom, 60%, 80%');
    mapWin.sendWinEvent('<map><ycoord><<me.location.ycoord>></ycoord><xcoord><<me.location.xcoord>></xcoord></map>');
    webMainWin.createFrame(menuBar, 'menubar', '0, 90%, 100%, 10%');  
}

;

modify TravelViaAction
    execAction()
    {
        inherited; 
        mapWin.sendWinEvent('<map><ycoord><<me.location.ycoord>></ycoord><xcoord><<me.location.xcoord>></xcoord></map>');
                 
    }
;