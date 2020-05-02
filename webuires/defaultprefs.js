/*
 *   Default display preference settings for this game.  Edit this file if
 *   you want to customize the default appearance.
 */

var defaultPrefs = {

    // Main font.  This is the font used throughout the transcript
    // window and status line.  If you list multiple fonts with commas,
    // the browser will go through the list looking for one that's
    // installed on the run-time system.
    mainFont: "Calibri, Times New Roman, Times, New York, serif",
    mainFontSize: "12pt",
    mainColor: "#FFFFFF",

    mainLinkColor: "#0000ff",
    mainLinkHover: "#ff00ff",
    mainLinkActive: "#ff0000",

    // main window background color
    mainBkg: "#000000",

    // Command-line font.  Leave these null to inherit the main font
    // attributes for the command line.
    cmdFont: null,
    cmdFontSize: null,
    cmdColor: null,
    cmdBold: "bold",
    cmdItalic: "normal",

    // Status line font and background colors.  Leave these null to inherit
    // the main font attributes.
    statusFont: null,
    statusFontSize: null,
    statusColor: "#000000",
    statusBkg: "#3d4342",

    statusLinkColor: "#0000ff",
    statusLinkHover: "#ff00ff",
    statusLinkActive: "#ff0000",

    // Generic fonts.  These correspond to the HTML TADS "parameterized"
    // fonts - TADS-serif, TADS-sans, etc.  Null inherits the main font
    // settings.
    serifFont: "Georgia, Times New Roman, Times, New York, serif",
    serifFontSize: null,

    sansFont: "Verdana, Arial, Helvetica, sans-serif",
    sansFontSize: null,

    scriptFont: "Comic Sans MS, Zapf Chancery, ZapfChancery, cursive",
    scriptFontSize: null,

    ttFont: "Courier New, Courier, monospace",
    ttFontSize: null
};

