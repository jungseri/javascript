//html요소의 class 속성 추가하기
//addClass(): 선택한 html요소에 하나이상의 class를 추가함
    //기존에 존재하지 않는 class를 선택하지만 css영역에 추가할 class명에 대한 css속성을 설정해놔야함.
    //사용법 
    //$(선택자).addClass("추가할 class명1 class명2 ...");
//removeClass():선택한 html요소에서 하나이상의 class를 제거함
    //사용법
    //$(선택자).removeClass("삭제할 class명") : 동시에 여러개도 삭제할 수 있음
//toggleClass():선택한 html요소에서 클래스를 추가/제거 전환함
    //사용법
    //$(선택자)
//css():선택한 html요소의 css속성을 설정하거나 반환
//동시에 여러개의 css 속성을 설정하고자 할 경우 {속성명 : 속성값, 속성명2:속성값}
//를 사용하여 여러가지 속성을 동시에 적용 할 수 있음.

$(document).ready(function(){
    $("#div01btn1").on("click",function(){
        $("h1,h2,p").addClass("blue");
        $("#div01 > div").addClass("important");
    })

    $("#div01btn2").on("click", function(){
        $("#div01id1").addClass("important blue");
    });

    $("#div01btn3").on("click", function(){
        $("#div01id1").toggleClass("blue important");
    });

    $("#div02btn1").on("click", function(){
        $("h1,h2,p").removeClass("blue important");
    });

    console.log("------------------------------------")
    $("#div03btn1").on("click", function(){
        $("#div03 > p").css("background-color", "orange");
    });
    
    $("#div03btn2").on("click", function(){
        $("#div03 > p").css({
            "background-color" : "orange",
            "color" : "white",
            "font-size" : "32px",
            "border" : "1px solid white"});
    });

});