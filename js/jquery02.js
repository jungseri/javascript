

//html DOM조작을 위한 jquery 함수
//text(): 선택한 html 요소의 텍스트 내용을 설정하거나 반환함(html코드제외)
    //사용법
    //$(선택자).text(); : 텍스트 내용 가져오기
    //$(선택자).text("입력할 텍스트"); : 텍스트 내용 설정하기
//html(): 선택한 html 요소의 내용을 설정하거나 반환함(html 코드포함)
    //사용법
    //$(선택자).html(); : 내용 가져오기
    //$(선택자).html("입력할 내용"); : 내용 설정하기
//val(): 선택한 html요소의 속성값을 설정하거나 반환함(html의 요소가 value속성을 가지고 있을 경우 value속성값을 설정하거나, 반환함)
    //사용법
    //$(선택자).val(); : 내용 가져오기
    //$(선택자).val("value값"); : value 속성값 설정하기
//attr(): 선택한 html요소의 속성을 설정하거나 반환함
    //사용법
    //$(선택자).attr(속성명);  >>>속성값 가져오기
    //$(선택자).attr(속성명, 입력할 값); >>>속성값 설정하기



$(document).ready(function(){

    $("#div01btn1").on("click", function(){
        alert("text : " + $("#div01Test").text());
    });

    $("#div01btn2").on("click", function(){
        alert("html : " + $("#div01Test").html());
    });

    $("#div01Btn3").on("click", function(){
        alert("value : " + $("#div01Input").val());
    });

    $("#div01Btn4").on("click", function(){
        alert("href : " + $("#div01Link").attr("href"));
    });
console.log("------------------------------------");

    $("#div02Btn1").on("click",function(){
        $("#div02Test1").text("text()를 실행하여 변경된 텍스트");
        });
    $("#div02Btn2").on("click",function(){
        $("#div02Test2").html("html()을 실행하여 변경된 html");
        });
    $("#div02Btn3").on("click",function(){
        $("#div02Test3").val("제이쿼리 3.4.1버전 사용");
        });

    $("#div02Btn4").on("click", function(){
        $("#div02Link").attr("href", "https://www.google.co.kr");
    });
console.log("------------------------------------");  


});