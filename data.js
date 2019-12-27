var data = new Array();
var pin = new Array();

// XMLHttpRequestオブジェクトの作成
// var request = new XMLHttpRequest();

// // URLを開く
// request.open('GET', "https://118.27.5.222/api/Risachan/"+"1", true);
// request.responseType = 'json';

// // レスポンスが返ってきた時の処理を記述 
// request.onload = function () {
//   // レスポンスが返ってきた時の処理
//   pin=this.response;

//   console.log(pin.length);
  
//   // import resoID from "./main.js"
//   // console.log(resoID);
  
//   for(var j=0;j<pin.length;j++){
//     data.push({
//       lat: pin[j].lat, //緯度
//       lng: pin[j].lon, //経度
//       content: pin[j].name //情報ウィンドウの内容
//     });
//   }
// }
// request.send();


// console.log(pin.length);

// import resoID from "./main.js"
$(".chip").click(function(){
  console.log(num)
})

// import aaa from "./map"
// console.log(aaa);



pin=[{"id":1,"name":"アルビス 野々市三納店","lat":36.517541,"lon":136.610414},{"id":4,"name":"アルビス 明倫通り店","lat":36.531074,"lon":136.601354},{"id":7,"name":"イオン 御経塚店","lat":36.548687,"lon":136.59834},{"id":10,"name":"イオン 野々市南店","lat":36.502134,"lon":136.605318},{"id":14,"name":"Aコープ 富奥店","lat":36.510829,"lon":136.612235},{"id":17,"name":"大阪屋ショップ 野々市三納店","lat":36.516418,"lon":136.608694},{"id":20,"name":"マックスバリュ 野々市店","lat":36.5264,"lon":136.612212},{"id":25,"name":"マルエー 押野店","lat":36.545463,"lon":136.618019},{"id":30,"name":"ローソン 野々市粟田店","lat":36.5141,"lon":136.60892},{"id":37,"name":"西村酒店","lat":36.543788,"lon":136.612481},{"id":39,"name":"野々市市役所","lat":36.519626,"lon":136.609862}];

for(var j=0;j<pin.length;j++){
  data.push({
    lat: pin[j].lat, //緯度
    lng: pin[j].lon, //経度
    content: pin[j].name //情報ウィンドウの内容
  });
}
