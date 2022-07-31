// （API_KEY には、"取得したAPIキー" を記述）
const API_KEY = "021b3d45999af2be40642519c1647248";

$(function(){
  $('#btn').on('click',function(){
  // 入力された都市名でWebAPIに天気情報をリクエスト
  $.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
    dataType:'jsonp',
  //$('#cityname').val()で#citynameの値を受け取り、URLを結合させています。
  //val()は、HTMLのvalue属性(input等)を取得するメソッド
  }).done(function(data){
  //通信成功(引数内に結果が入る：data)
  //位置
  $('#place').text(data.name);
  // 最高気温
  $('#temp_max').text(data.main.temp_max);
  // 最低気温
  $('#temp_min').text(data.main.temp_min);
  //湿度
  $('#humidity').text(data.main.humidity);
  //風速
  $('#speed').text(data.wind.speed);
  // 天気
  $('#weather').text(data.weather[0].main);
  // 天気アイコン
  $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
  $('img').attr("alt",data.weather[0].main);
  //$(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加される
  //アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".png
  }).fail(function(data){
  //通信失敗
  alert('通信に失敗しました。')
  });
  });
});
//Ajax(エージャックス):JavaScriptの非同期通信を使って、Webサーバ間とデータのやり取りを行います。
//JSON（JavaScript Object Notation）は、テキストベースのデータ交換フォーマット