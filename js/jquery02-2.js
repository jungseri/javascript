$(document).ready(function(){
    //제이쿼리를 이용하여 새로운 html 태그를 추가
    //append(); 선택한 html 요소의 가장 끝에 추가
    //prepend(); 선택한 html 요소의 가장 앞에 추가
    //after(); 선택한 html 요소의 바로 뒤에 추가
    //before(); 선택한 html 요소의 바로 앞에 추가

    //사용법(다 동일함)
    //$(선택자).append(추가할 내용) : 추가내용은 html 코드 사용가능

    var prependtextcount =0;
    var prependlitcount =0;
    var prependtextcount =0;
    var prependlistcount =0;

    $("#div01Btn1").on("click", function(){
        var text = "<b>prepend</b>" + prependtextcount +"</b>";
        $("#div01p1").prepend(text);
    });
    $("#div01Btn2").on("click", function(){
        var text = "<b>append</b>" + appendtextcount +"</b>";
        $("#div01p1").append(text);
    });
    $("#div01Btn3").on("click", function(){
        var text = "<b>after</b>";
        $("#div01ol01").prepend("<li>prepend item</li>");
    });
    $("#div01Btn4").on("click", function(){
        var text = "<b>append</b>";
        $("#div01ol01").append("<li>append item</li>");

    });

    var beforetextcount=0;
    var aftertextcount=0;

    $("div01Btn5").on("click", function(){

    });

    //제이쿼리를 이용하여 html요소를 삭제하기
    //remove() : 선택한 요소 및 하위 요소를 모두 제거 
    //empty() : 선택한 요소의 하위 요소를 제거

    $("#div02Btn1").on("click", function(){
        $("#div02div1").remove();
    })
    $("#div02Btn1").on("click", function(){
        $("#div02div1").empty();
    })

});