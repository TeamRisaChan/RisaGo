var app=new Vue({
  el: "#reso-list",
  data: {
    lists: ["あきびん", "あきかん", "ペットボトル", "段ボール","古紙","古着","食品トレイ","紙パック"]
  }, 
  methods: {
    sortWorks(tag) {
        console.log(tag);
    }
  }
});
  
//   var app = new Vue({
//   el: "#reso-list",
//   data: {
//     lists: ["あきびん", "あきかん", "ペットボトル", "段ボール","古紙","古着","食品トレイ","紙パック"]
//  }});

