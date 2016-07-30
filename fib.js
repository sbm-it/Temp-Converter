console.log('fib.js loaded');

(function(){ // wrapping everything within an annonymous function
//var f= '<form name="frm"> '
var f ='<table style="border:solid green 1px">'
f +='<tr><td>Enter the degree</td>'
f +='<td><input type=text name="txt" size=12"></td>'
f +='<td><select name="myoption">'
f +='<option name="Faren" value="Fahrenheit">F</option>'
f +='<option name="Cels" value="Celsius">C</option>'
f +='</select></td>'
f +='<td><input type="button" value="Calculate" onclick="apply()"></td></tr>'
f +='<tr><td>Equal Value</td>'
f +='<td><input type=text name="txt1" size="12" READONLY></td><td></td>'
f +='<td align=right>&copy<a href="https://www.hscripts.com" style="color:#3D366F;text-decoration:none;cursor:pointer;font-size:13px">hscripts.com</a></td></tr>'
f +='</table>'
//f +='</form>'
sbmApps.render(f)
  //var h = '<h3 style="color:navy">Temp Caclulator</h3>'
  //  h +='<button id="fibButton" type="button" class="btn btn-primary">Generate</button> '
  //  h +='Lenght: <input id="fibLength" size=4 value="20"> '
  //h +='Seed: <input id="fibSeed" size=5 value="0,1"> '
  //  h +='<p id="fibArray" style="color:navy"></p>'
  //  if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
    //    sbmApps.render(f)
    //}else{ // if fib.js is being called without any help
      //  var dv = document.createElement('div')
        //dv.innerHTML = f
        //document.body.appendChild(dv)
  ///  }
    // style

    }
    // generate
  
    //fibSeed.onblur=fibLength.onblur=function(){fibButton.click()}
})()
