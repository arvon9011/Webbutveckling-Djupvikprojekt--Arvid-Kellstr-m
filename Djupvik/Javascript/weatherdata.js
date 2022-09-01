 export function getinformation(){
  return fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json')
  .then(function(response){
    return response.json();
  })
  
  .then (function (data) {
 console.dir(data.timeSeries[0].parameters[11].values);
  
  return data.timeSeries[0].parameters[11].values;
  
  })
  
  };