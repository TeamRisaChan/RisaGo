//最初から情報ウィンドウを表示させる
function map_canvas() {
  //マーカーの情報
  var data = new Array();
  data.push({
    lat: '36.530187', //緯度
    lng: '136.62784899999997', //経度
    content: "KIT" //情報ウィンドウの内容
  });
  // data.push({
  //   latlang: '35.678187',
  //   lng: '139.76817',
  //   content: '<span style="color:#d50000">八重洲ブックセンター</span>'
  // });
  //初期位置に、上記配列の最初の緯度経度を格納
  var latlng = new google.maps.LatLng(data[0].lat, data[0].lng);
  var opts = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  //地図を表示させるエリアのidを指定
  var map = new google.maps.Map(document.getElementById("map"), opts);

  var markers = new Array();
  //マーカーを配置するループ
  for (i = 0; i < data.length; i++) {
    markers[i] = new google.maps.Marker({
      position: new google.maps.LatLng(data[i].lat, data[i].lng),
      map: map
    });
    markerInfo(markers[i], data[i].content);
  }
}

function markerInfo(marker, name) {
  new google.maps.InfoWindow({
    content: name
  }).open(marker.getMap(), marker);
}
//地図描画を実行
google.maps.event.addDomListener(window, 'load', map_canvas);