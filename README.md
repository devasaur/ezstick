EZStick.js
=======

A simple script that allows you to make an element stick when it reaches the top of the page, and also lets you set scroll duration for a temporary stick.

The first version of this script is simply the isolated code for this scroll effect from the fadeM.js plugin.

To Initiate
=======

- Apply a class "ezs" to the element you wish to stick. (Note: you can apply to more than one element, and each element will stick when it is scrolled to top. In future updates, I hope to make this a useful feature that allows a stacking effect. For now, the script is best with one sticking element in most cases.)

- Reference jquery in your document
- Reference the ezstick.js file
- Include the following code to initiate the function:

<pre>
$(document).ready(function(){
var ShortStick = "off";
var StickTime = "500";
var StickDistance = "0";
initEZS(ShortStick,StickTime,StickDistance);
});
</pre>

Variables
========

- Shortstick : accepted values - on / off | tells the script to use the StickTime variable or not. If on, the element will stick for the number of pixels equal to the StickTime value.

- StickDistance : accepted values - integers | tells the script how many pixels from the top of the window to stick.
