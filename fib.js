console.log('fib.js loaded');

(function(){ // wrapping everything within an annonymous function
//var f= '<form name="frm"> '
//f +='<tr><td>Enter the degree</td>'
  var h = '<h3 style="color:navy">Fibonacci generator</h3>'
h +='<td><input type=text name="txt" size=12"></td>'
//h +='<td><select name="myoption">'
//h +='<option name="Faren" value="Fahrenheit">F</option>'
//h +='<option name="Cels" value="Celsius">C</option>'
//h +='</select></td>'
h +='<td><input type="button" value="Calculate" onclick="apply()"></td></tr>'
h +='<tr><td>Equal Value</td>'
h +='<td><input type=text name="txt1" size="12" READONLY></td><td></td>'
h +='<td align=right>&copy<a href="https://www.hscripts.com" style="color:#3D366F;text-decoration:none;cursor:pointer;font-size:13px">hscripts.com</a></td></tr>'

//f +='</form>'
if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
    sbmApps.render(h)
}else{ // if fib.js is being called without any help
    var dv = document.createElement('div')
    dv.innerHTML = h
    document.body.appendChild(dv)
}
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
