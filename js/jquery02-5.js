$(document).ready(function(){
//제이쿼리를 이용하여 html 태그의 크기 설정 및 반환
/*width() :html 태그의 컨텐츠 영역의 너비
height(): html 태그의 컨텐츠 영역의 높이
innerwidth(): html태그의 padding 영역 까지의 너비
innerHeight(): html 태그의 padding 영역까지의 높이
outerWidth(true): html 태그의 margin 영역까지의 너비
outerHeight(true): html태그의 margin 영역까지의 높이
*/
$("#div01Btn1").on("click", function(){
    var text ="";
        text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 높이 : " + $("#div01Div1").height()+ "</p>";
        $("#div01Div1").html(text); //html태그를 번역해서 사용.
        //$("#div01Div1").html(text); >>> hrml태그를 문자로서 인식. 
    });
});