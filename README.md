Usage:

Examples:

var geo=require('Get-Geo);

geo.getGPS('Paris', '75019', function (results, err) {

console.log(results);
}

geo.getCity('France','75019',function(results,err){

console.log(results);
});