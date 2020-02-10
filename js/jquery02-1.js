//문제 1) a태그를 사용하여 링크를 생성하고, 아래 버튼을 클릭시 링크와 해당 설명글 모두 변경하는 
//프로그램을 작성하세요
//링크는 총 3개

//문제2)a태그를 사용하여 링크를 생성하고, 버튼을 클릭시 링크와 해당 링크의 설명글을 
//모두 변경하는 프로그램을 작성하세요
//각각의 링크 뒤에 input 태그를 사용하여 링크 주소와 설명글을 입력.

$(document).ready(function(){
    $("#div01Btn1").on("click", function(){
        $("#div01Link1").text("구글 홈페이지");    
        $("#div01Link1").attr("href", "https://www.google.co.kr");  
    });      
    $("#div01Btn2").on("click", function(){
        $("#div01Link2").text("다음 홈페이지"); 
        $("#div01Link2").attr("href", "https://www.daum.net");       
    });    
    
    $("#div01Btn3").on("click", function(){
        $("#div01Link3").text("애플 홈페이지");      
        $("#div01Link3").attr("href", "https://www.apple.com/");  
    });
   
    $("#div01Btn4").on("click", function(){
        /*var linkAddr =  "https://";
        linkAddr =  linkAddr + $("#div01text4").val();*/
        var linkAddr = $("#div01text4").val();
        var linkText = $("#div01text4").val();

        $("#div01Link4").text(linkText);   
        $("#div01Link4").attr("href", linkAddr);  
    });
    
   
    console.log("------------------------------------");  


});