
function checnum(as)
{
    var dd = as.value;
	
    if(isNaN(dd))
    {
        dd = dd.substring(0,(dd.length-1));
        as.value = dd;
    }		
}
 
function feetconv(val){
    with(document.conv){
        
        meter.value = ((feet.value * 0.3048)).toFixed(2);
        miles.value = ((feet.value * 1.8900000000000001) * Math.pow(10, -4)).toFixed(2);
    }
}

function meterconv(val){
    with(document.conv){
        feet.value = ((meter.value * 3.28084)).toFixed(2);
        miles.value = ((meter.value * 0.000621371)).toFixed(2);
    }
}
function milesconv(val){
    with(document.conv){
        feet.value = ((miles.value * 5280)).toFixed(2);
        meter.value = ((miles.value * 1.61*1000)).toFixed(2);
    }
}
function sqfeetconv(val) {
    with (document.conv) {
        sqmile.value = ((sqfeet.value * 0.0000000358700643));
        acre.value = ((sqfeet.value * 0.00002295684109463915))
    };

}
function sqmileconv(val) {
    with (document.conv) {
        sqfeet.value = ((sqmile.value * 27878400.000206374));
        acre.value = ((sqmile.value *640))
    };

}
function acreconv(val) {
    with (document.conv) {
        sqfeet.value = ((acre.value * 43560));
        sqmile.value = ((acre.value * 0.0015625000029845565))
    };
}
function ounceconv(val) {
    with (document.conv) {
        quarts.value = ((ounce.value * 0.03125));
        liters.value = ((ounce.value * 0.0295735))
    };
}
function quartsconv(val) {
    with (document.conv) {
        ounce.value = ((quarts.value * 32));
        liters.value = ((quarts.value * 0.946353))
    };
}
function litersconv(val) {
    with (document.conv) {
        ounce.value = ((liters.value * 33.814));
        quarts.value = ((liters.value * 1.05669))
    };
}
