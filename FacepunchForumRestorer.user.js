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

$(function() {

    // Div IDs are being assigned because otherwise it will pull duplicates from each category of the forums and not append properly.
    // This also allows me to easily add data to the new section far easier than I would be able to otherwise.
    
    // Source Filmmaker //
    
    $("#cat413").append("<tr id='forum412' class='forumbit_post L2'>");
    $("#forum412").append("<td class='foruminfo' id='sfm' style=\"background-image: url('/fp/forums/412.png?1');background-position: 6px center;background-repeat: no-repeat;padding-left: 29px;\">");
    $("#sfm").append("<div class='forumdata' id='sfminfo'>");
    $("#sfminfo").append("<h2 class='forumtitle' id='sfmtitle'>");
    $("#sfmtitle").append("<a href='forumdisplay.php?f=412' title='Threads and Posts Hidden'>Source Filmmaker (Gabe Edition)</a>");
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
    
    // OIFY //
    
    $("#cat197").append("<tr id='forum56' class='forumbit_post L1'>");
    $("#forum56").append("<td class='foruminfo' id='oify' style=\"background-image: url('/fp/forums/56.png?1');background-position: 6px center;background-repeat: no-repeat;padding-left: 29px; background-color:green;\">");
    $("#oify").append("<div class='forumdata' id='oifyinfo'>");
    $("#oifyinfo").append("<h2 class='forumtitle' id='oifytitle'>");
    $("#oifytitle").append("<a href='forumdisplay.php?f=56' title='Threads and Posts Hidden' style=\"color: white;\">OIFY</a>");
    $("#oifyinfo").append("<span class id='viewing' style=\"color: black;\">(Hidden)</span>");
    $("#oifyinfo").append("<p class='forumdescription' style=\"color: black;\">Hottest place on the web.</p>");
    $("#forum56").append("<td class='alt forumlastpost last_post_column' id='oifylastpost' style=\"background-color:green;\">");
    $("#oifylastpost").append("<div class='LastPostAvatar' id='oifyLastPostID' style=\"background-color:green;\">");
    $("#oifylastpost").append("<p class='lastposttitle' id='oifylastpostid'>");
    $("#oifylastpostid").append("<a href='#' style=\"color: black;\">Hidden</a>");
    $("#oifylastpostid").append("<p class='lastpostdate' style=\"color: black;\">Gold members only.</p>");
    
    /////////////////////
    
    // Cooking Chums //
    
    $("#cat392").append("<tr id='forum388' class='forumbit_post L2'>");
    $("#forum388").append("<td class='foruminfo' id='cookchums' style=\"background-image: url('/fp/forums/388.png?1');background-position: 6px center;background-repeat: no-repeat; padding-left: 29px;\">");
    $("#cookchums").append("<div class='forumdata' id='cookchumsinfo'>");
    $("#cookchumsinfo").append("<h2 class='forumtitle' id='cookchumstitle'>");
    $("#cookchumstitle").append("<a href='forumdisplay.php?f=388' title='Threads and Posts Hidden'>Cooking Chums</a>");
    $("#cookchumsinfo").append("<span class id='viewing'>(Hidden)</span>");
    $("#cookchumsinfo").append("<p class='forumdescription'>Making bad food taste great is our specialty</p>");
    $("#forum388").append("<td class='alt forumlastpost last_post_column' id='cookchumslastpost'>");
    $("#cookchumslastpost").append("<div class='LastPostAvatar' id='cookchumsLastPostID'>");
    $("#cookchumsLastPostID").append("<a href='/members/495332' id='cookchumsAvatar'>");
    $("#cookchumsAvatar").append("<img src='/p.gif' width='100%' height='100%' alt='ZeeCaptain' title='ZeeCaptain'>");
    $("#cookchumslastpost").append("<p class='lastposttitle' id='cookchumslastpostid'>");
    $("#cookchumslastpostid").append("<a href='http://facepunch.com/showthread.php?t=1203996&goto=newpost' class='threadtitle' title='Go to first unread post in thread \'The Motherfuckin\' fastfood thread\''>The Motherfuckin' fastfood thread</a>");
    $("#cookchumslastpostid").append("<p class='lastpostdate'>Link for latest post.</p>");    
    
    ///////////////////
    
    // Golds Gaming //
    
    $("#cat348").append("<tr id='forum408' class='forumbit_post L2'>");
    $("#forum408").append("<td class='foruminfo' id='goldsgaming' style=\"background-image: url('fp/forums/408.png?1');background-position: 6px center;background-repeat: no-repeat; padding-left: 29px;\">");
    $("#goldsgaming").append("<div class='forumdata' id='goldsgaminginfo'>");
    $("#goldsgaminginfo").append("<h2 class='forumtitle' id='goldsgamingtitle'>");
    $("#goldsgamingtitle").append("<a href='forumdisplay.php?f=408' title='Threads and Posts Hidden'>Golds Gaming</a>");
    $("#goldsgaminginfo").append("<span class id='viewing'>(Hidden)</span>");
    $("#goldsgaminginfo").append("<p class='forumdescription'>Gaming with your fellow Glod Menbers.</p>");
    $("#forum408").append("<td class='alt forumlastpost last_post_column' id='goldsgaminglastpost'>");
    $("#goldsgaminglastpost").append("<div class='LastPostAvatar' id='goldsgamingLastPostID'>");
    $("#goldsgaminglastpost").append("<p class='lastposttitle' id='goldsgaminglastpostid'>");
    $("#goldsgaminglastpostid").append("<a href='#'>Hidden</a>");
    $("#goldsgaminglastpostid").append("<p class='lastpostdate'>Gold members only.</p>");

    // Golds Workshop //
    
    $("#cat228").append("<tr id='forum409' class='forumbit_post L1'>");
    $("#forum409").append("<td class='foruminfo' id='goldsworkshop' style=\"background-image: url('fp/forums/409.png?1');background-position: 6px center;background-repeat: no-repeat; padding-left: 29px;\">");
    $("#goldsworkshop").append("<div class='forumdata' id='goldsworkshopinfo'>");
    $("#goldsworkshopinfo").append("<h2 class='forumtitle' id='goldsworkshoptitle'>");
    $("#goldsworkshoptitle").append("<a href='forumdisplay.php?f=409' title='Threads and Posts Hidden'>Golds Workshiop</a>");
    $("#goldsworkshopinfo").append("<span class id='viewing'>(Hidden)</span>");
    $("#goldsworkshopinfo").append("<p class='forumdescription'>We make cool stuff for each other.</p>");
    $("#forum409").append("<td class='alt forumlastpost last_post_column' id='goldsworkshoplastpost'>");
    $("#goldsworkshoplastpost").append("<div class='LastPostAvatar' id='goldsworkshopLastPostID'>");
    $("#goldsworkshoplastpost").append("<p class='lastposttitle' id='goldsworkshoplastpostid'>");
    $("#goldsworkshoplastpostid").append("<a href='#'>Hidden</a>");
    $("#goldsworkshoplastpostid").append("<p class='lastpostdate'>Gold members only.</p>");
    
    ////////////////////
});
