// ==UserScript==
// @name        Facepunch Forum Restorer
// @version     1.0
// @description Miss your favorite Facepunch sections? Shed your tears no longer!
// @match       https://facepunch.com
// @match       https://www.facepunch.com/
// @match       http://facepunch.com/
// @match       http://www.facepunch.com/
// @include		http://facepunch.com/*
// @include		http://www.facepunch.com/*
// @include		https://facepunch.com/*
// @include		https://www.facepunch.com/*
// @run-at      document-end
// @require     //ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @copyright   WitheredGryphon, 2014
// @license     WTFPL
// ==/UserScript==

// Begin terrible userscript
$(function() {

    // Div IDs are being assigned because otherwise it will pull duplicates from each category of the forums and not append properly.
    // This also allows me to easily add data to the new section far easier than I would be able to otherwise.
    
    // Source Filmmaker //
    
    $("#cat413").append("<tr id='forum412' class='forumbit_post L2'>");
    $("#forum412").append("<td class='foruminfo' id='sfm' style=\"background-image: url('/fp/forums/412.png?1');background-position: 6px center;background-repeat: no-repeat;padding-left: 29px;\">");
    $("#sfm").append("<div class='forumdata' id='sfminfo'>");
    $("#sfminfo").append("<h2 class='forumtitle' id='sfmtitle'>");
    $("#sfmtitle").append("<a href='forumdisplay.php?f=412' title='Placeholder Info Here'>Source Filmmaker (Gabe Edition)</a>");
    $("#sfminfo").append("<span class id='viewing'>(Hidden)</span>");
    $("#sfminfo").append("<p class='forumdescription'>Creating HD Team Fortress 2 movies since July 2012.</p>");
    $("#forum412").append("<td class='alt forumlastpost last_post_column' id='sfmlastpost'>");
    $("#sfmlastpost").append("<div class='LastPostAvatar' id='sfmLastPostID' style=\"background-image: url('/image.php?u=185135&dateline=1389291862')\">");
    $("#sfmLastPostID").append("<a href='/members/185135' id='sfmAvatar'>");
    $("#sfmAvatar").append("<img src='/p.gif' width='100%' height='100%' alt='MaxOfS2D' title='MaxOfS2Baguettes'>");
    $("#sfmlastpost").append("<p class='lastposttitle' id='sfmlastpostid'>");
    $("#sfmlastpostid").append("<a href='http://facepunch.com/showthread.php?t=1250094&goto=newpost' class='threadtitle' title='Go to first unread post in thread \'SFM Posters Megathread v2\''>SFM Posters Megathread v2</a>");
    $("#sfmlastpostid").append("<p class='lastpostdate'>Link for latest post.</p>");
    
    ////////////////////
    
});
