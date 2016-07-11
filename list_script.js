// JavaScript source code


var loopct = 0;
var sw = 0;
var summ = 0;
var low = 0;
var high = 0;
var sortarray = new Array();



function ClearForm()
{
    document.DataForm1.Value1.value = "";
    document.DataForm1.Value2.value = "";
    document.DataForm1.Value3.value = "";
    document.DataForm1.Value4.value = "";
    document.DataForm1.Value7.value = "";
    document.DataForm1.Value8.value = "";
    document.DataForm1.Value11.value = "";
    document.DataForm1.Value12.value = "";

    loopct = 0;
    sw = 0;
    summ = 0;
    low = 0;
    high = 0;
    sortarray.length = 0;

}



function DataIn() {

    var crlf = "\r" + "\n"; // CR and LF to append
    var sw = document.DataForm1.Value4.value; // Window
    x = eval(document.DataForm1.Value1.value);
    if (isNaN(x)) {
        document.DataForm1.Value1.focus();
        return 0;
    }

    loopct = (loopct) + 1;
    y = (x);

   
        sortarray.push(y);
        summ = (summ + y);

        document.DataForm1.Value1.value = "";
   
   
    if (loopct == 1) {
        document.DataForm1.Value4.value = (y) + crlf;
    } else {
        document.DataForm1.Value4.value = sw + (y) + crlf;
    }

    document.DataForm1.Value11.value = summ;
    document.DataForm1.Value1.focus();
    last = (x); //always the last
           
    if (eval(low) == 0) {

        low = (x); // get the low from the first entry

    }
    if (eval(high) == 0) {

        high = (x); // get the high from the first entry

    }
    if (eval(low) > eval(x)) {

        low = (x); // get the low by comparison

    }
    if (eval(high) < eval(x)) {

        high = (x); // get the high by comparison
    }
}



function DataReturn() {

    z = (summ / loopct);
    document.DataForm1.Value2.value = z;
    document.DataForm1.Value3.value = loopct;
    document.DataForm1.Value7.value = (low);
    document.DataForm1.Value8.value = (high);
    // only display when "calculate average" is clicked

    // re-evaluate and calculate each time it is clicked

}
function DataSort()
{
    var crlf = "\r" + "\n"; // CR and LF to append
    var sw = document.DataForm1.Value12.value; // Window
    var temp;
    for (var i = 0; i < sortarray.length-1; i++)
    {
        for (var j = 0; j < (sortarray.length - i-1 ) ; j++)
            if (sortarray[j] > sortarray[j + 1])
            {
                temp = sortarray[j];
                sortarray[j] =sortarray[j + 1];
                sortarray[j + 1] = temp;
                        
            }
    }
    for (var i = 0; i < sortarray.length; i++)
        sw = sw+(sortarray[i]) + crlf;
    document.DataForm1.Value12.value =sw;
}
