

function getCity(country,zip,callback){
    var request = require("request")
    var city;
    var url="http://maps.googleapis.com/maps/api/geocode/json?address="+"'"+country+' '+zip+"'"+"&sensor=true;"
  
    request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        
        city=body.results[0].address_components[1].long_name.toString();
        
           callback(city, null);
         
    }
        else{
            callback(null,city);
        }
        
     
})
    
  
    
}

function getGPS(country,zip,callback){
    var request = require("request")
 
    var url="http://maps.googleapis.com/maps/api/geocode/json?address="+"'"+country+' '+zip+"'"+"&sensor=true;"
  
    request({
    url: url,
    json: true
}, function (error, response, body) {
        
    if (!error && response.statusCode === 200) {
        
         
        
           var city={
               lat:String,
               long:String
               
           }
           city.long=body.results[0].geometry.location.lng;
           city.lat=body.results[0].geometry.location.lat;    
          
        
        callback(city,null);
         
    }
        else{
            callback(null,city);
        }
        
     
})
    
  
    
}

exports.getGPS=getGPS;
exports.getCity=getCity;