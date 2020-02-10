//문제1
//자신의 버킷 리스트를 5개 저장하고 있는 리스트를 ul 이나, ol로 생성하고 그아래 input태그를 사용하여 
//자신의 버킷리스트를 추가하는 프로그램을 작성하세요.
//append, prepend를 이용하여 항목 추가

//문제2
//자신의 버킷 리스트 5개를 저장하고 있는 리스트 아래에 버튼을 클릭시 스타일이 변경되는 프로그램을 작성하세요.
//테버마턴 3개, 삭제버튼 1개
//1번버튼 클릭시 글자크기 변경
//2번버튼 클릭시 글자색상 변경
//3번버튼 클릭시 글자굵기 변경
//4번버튼 클릭시 모든속성 삭제

$(document).ready(function(){
    var addlist = 0;

    $("#div01Btn1").on("click", function(){
        var addlist = $("#div01text1").val();
        var addlist = "<li>" + $("#div01text1").val() + "</li>";
         $("#div01list1").append(addlist);
         $("#div01list1").val(""); //기존에 입력된 input태그의 value값을 모두 삭제
         $("#div01list1").focus();
        });
   
/*
    $("#div01Btn2").on("click", function(){
         $("li").css({
        "font-size" : "32px"
        });
    });

    $("#div01Btn3").on("click", function(){
        $("li").css({
        "color" : "red"               
       });
     });

    $("#div01Btn4").on("click", function(){
        $("li").css({
        "font-weight" : "bolder"
    });
        });
*/

        $("#div01Btn2").on("click", function(){
        $("li").addClass("font-size");         
         });
   
        $("#div01Btn3").on("click", function(){
        $("li").addClass("color");      
        });
   
        $("#div01Btn4").on("click", function(){
        $("li").addClass("font-weight");     
        });


    $("#div01Btn5").on("click", function(){
        $("li").removeClass("font-size color font-weight");
    });
    
});
