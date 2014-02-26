/**
 *
 * Version: 0.0.1
 * Author: Shawn Pavlas
 * Contact: shawnzabar@gmail.com
 * Website: http://www.devasaur.com/
 *
 MIT license
 *
 * Copyright (c) 2013 Shawn Pavlas
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/


function initezs(tempstick, stime, sdist) {

    //convert the values to a number string
	var sticktime = parseInt(stime);
	var stickdistance = parseInt(sdist);
    var iex = "0." + x;


    //Set defaults on all elements using stickHere
    var stickSet = $(".ezs").toArray();

    var stickTop = [];
    for (var i = 0; i < stickSet.length; i++) {

        $(stickSet[i]).css("position", "relative");
        $(stickSet[i]).css("z-index", "100000");
        //setting the default distance from top of page for each element

        stickTop.push($(stickSet[i]).offset().top);
    }
	
    //event responds to scrolling
    $(window).scroll(function () {


        //get the number of pixels scrolled from the top
        var doc = document.documentElement,
            body = document.body;
        var top = (doc && doc.scrollTop || body && body.scrollTop || 0);

     

        //makes elements with stickHere stick to top


        for (var i = 0; i < stickSet.length; i++) {
		
		
		   if(tempstick == "on"){


				if (top >= stickTop[i]-stickdistance && top <= (stickTop[i]+sticktime-stickdistance)) {

					$(stickSet[i]).css("position", "fixed");
					$(stickSet[i]).css("top", stickdistance+"px");
				}

				else if(top >= (stickTop[i]+sticktime-stickdistance))

					   {
					   
						$(stickSet[i]).css("position", "relative");
						$(stickSet[i]).css("top", top-top+sticktime + "px");


					   }
				
				else
				
				       {
					   
						$(stickSet[i]).css("position", "relative");
					    $(stickSet[i]).css("top", "0px");
						
				       }
			} 
			
			else 
			
			{
			    if (top >= (stickTop[i]-stickdistance)) {

					$(stickSet[i]).css("position", "fixed");
					$(stickSet[i]).css("top", stickdistance+"px");
				}

				else

				{
					$(stickSet[i]).css("position", "absolute");
					$(stickSet[i]).css("top", "0px");


				}
			}

        }




    });




}
