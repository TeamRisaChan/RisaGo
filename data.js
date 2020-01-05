var data = new Array();
var pin = new Array();

$(".chip").click(function(){

//   // レスポンスが返ってきた時の処理
  if(num ==1){
    pin=data1;
    dataPush();
    google.maps.event.addDomListener(window, 'click', map_canvas);
    
  }else if(num==2){
    pin=data2;
    dataPush();
    google.maps.event.addDomListener(window, 'click', map_canvas);
  
  }else if(num==3){
    pin=data3;
    dataPush();
    google.maps.event.addDomListener(window, 'click', map_canvas);
  
  }else if(num==4){
    pin=data4;
    dataPush();
    google.maps.event.addDomListener(window, 'click', map_canvas);
  
  }else if(num==5){
    pin=data5;
    dataPush();
    google.maps.event.addDomListener(window, 'click', map_canvas);
  
  }else if(num==6){
    pin=data6;
    dataPush();
    google.maps.event.addDomListener(window, 'click', map_canvas);
  
  }else if(num==7){
    pin=data7;
    dataPush();
    google.maps.event.addDomListener(window, 'click', map_canvas);
  
  }else{
    pin=data8;
    dataPush();
    google.maps.event.addDomListener(window, 'click', map_canvas);
  
  }

  function dataPush(){
    if(data != null){
      data=null;
      data = new Array();
    }
    
    for(var j=0;j<pin.length;j++){
      data.push({
        lat: pin[j].lat, //緯度
        lng: pin[j].lon, //経度
        content: pin[j].name //情報ウィンドウの内容
      });
    }
  }
}
)
