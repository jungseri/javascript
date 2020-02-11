$(document).ready(function(){
//제이쿼리를 이용하여 html 태그의 크기 설정 및 반환
/*
width() :html 태그의 컨텐츠 영역의 너비(너비설정/반환)
height(): html 태그의 컨텐츠 영역의 높이(너비설정/반환)
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

    $("#div01Btn2").on("click", function(){
        $("#div01Div1").width("500px");
        $("#div01Div1").height("200px");  //넓어진 사각형 출력        
    });

console.log("----------제이쿼리 3일차------------")
    $("#div01Btn3").on("click", function(){
        var text="";
        text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 높이 : " + $("#div01Div1").height()+ "</p>";
        text +="<p>padding 까지의 너비 : " + $("#div01Div1").innerWidth() + "</p>";
        text +="<p>padding 까지의 높이 : " + $("#div01Div1").innerHeight() + "</p>";

        $("#div01Div1").html(text);
    });

    $("#div01Btn4").on("click", function(){
        var text="";
        text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 높이 : " + $("#div01Div1").height()+ "</p>";
        text +="<p>border 까지의 너비 : " + $("#div01Div1").outerWidth() + "</p>";
        text +="<p>border 까지의 높이 : " + $("#div01Div1").outerHeight() + "</p>";

        $("#div01Div1").html(text);
    });

    $("#div01Btn5").on("click", function(){
        var text="";
        text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
        text += "<p>div의 높이 : " + $("#div01Div1").height()+ "</p>";
        text +="<p>margin 까지의 너비 : " + $("#div01Div1").outerWidth(true) + "</p>";
        text +="<p>margin 까지의 높이 : " + $("#div01Div1").outerHeight(true) + "</p>";

        $("#div01Div1").html(text);
    });

console.log("----------제이쿼리 3-1일차------------")
/*제이쿼리를 이용한 트레버싱(자바스크립트 이용해서, html부분에서 봤을떄 부모와 자식태그를 
    선택하는 부분이 쉬워짐. 그부분임.)
    
    >>조상태그선택
    parent(): 지정한 html태그의 한단계 위의 부모태그 선택
    parents(): 지정한 html 태그의 모든 조상태그를 선택(html까지)
    parentsUntil(): 2개의 html태그를 선택하고 2개의 태그 사이에 있는 조상태그를 선택
*/
    $("#div02 span").parent().css({
        "color" : "red",
        "border" : "3px solid red"
    });

    $("#div03 span").parents("#div03 > div").css({
        "color" : "red",
        "border" : "3px solid red"
    });

    $("#div04 span").parentsUntil("#div04 > div").css({
        "color" : "red",
        "border" : "3px solid red"
    });
    /*
    >> 후손태그선택
    children(): 지정한 태그의 한단계 아래의 자손태그들을 선택
        옵션 사용으로, 형제 태그 선택자 사용시 자손태그 중에서 하나를 선택하는 것도 가능
    find() : 지정한 태그의 모든 후선 태그를 선택
    */
//    $("#div05 > div") .children().css({
//        "color" : "red",
//        "border" : "3px solid red"
//    });
   $("#div05 > div") .children("p").css({
    "color" : "blue",
    "border" : "3px solid blue"
});
//    $("#div06 > div") .find("span").css({
//     "color" : "red",
//     "border" : "3px solid red"
// });
//find에 *를 사용시 모든 후손태그를 선택함
    $("#div06 > div") .find("*").css({
         "color" : "red",
         "border" : "3px solid red"
    });
  /*
    >> 형제태그선택
   siblings(): 지정한 태그의 모든 형제 태그를 선택
   next(): 지정한 태그의 다음 형제 태그를 선택
   nextUntil(): 2개의 태그를 선택후 사이에 있는 모든 형제 태그를 선택
   prev(): 지정한 태그의 이전 태그를 선택
   prevAll(): 지정한 태그의 이전 모든 형제 태그를 선택
   prevUntil(): 2개의 태그를 선택후 2개의 태그 사이에 있는 모든 형제 태그를 선택 
    */
//    $("#div07 > div > h2") .siblings().css({
//         "color" : "red",
//         "border" : "3px solid red"
//         });
        //siblings()의 매개변수로 선택자 사용시 형제태그들 중에서 매개변수로 지정한 태그만 서택됨
    $("#div07 > div > h2") .siblings("p").css({
        "color" : "red",
        "border" : "3px solid red"
    });

    $("#divH2").next().css({
        "color" : "red",
        "border" : "3px solid red"
    });

    $("#div09 > div > span").nextAll().css({
        "color" : "red",
        "border" : "3px solid red"
    });
    
    // $("#div10 > div > span").nextUntil().css({
    //     "color" : "red",
    //     "border" : "3px solid red"
    // });

    $("#div10 >div> h2").nextUntil("#div10 >div> h6").css({
        "color" : "red",
        "border" : "3px solid red"
    });
    
    $("#div11 >div > h2").prev().css({
        "color" : "red",
        "border" : "3px solid red"
    });
    $("#div12 >div > span").prevAll().css({
        "color" : "red",
        "border" : "3px solid red"
    });
    $("#div13 >div > h6").prevUntil("#div13 >div > h2").css({
        "color" : "red",
        "border" : "3px solid red"
    });
});