$(document).ready(function(){
   
        function widthheight(){
            var text = "";
            text += "<p>div의 너비 : " + $("#div01").width() + "</p>";
            text += "<p>div의 높이 : " + $("#div01").height()+ "</p>";
            
            return text;
        }

        function innerwidthheight(text){
            var text = "";
            text += "<p>div의 너비 : " + $("#div01Div1").width() + "</p>";
            text += "<p>div의 높이 : " + $("#div01Div1").height()+ "</p>";
            return text;
        }
      
     
      
//거이 동일한 코드를 자바 함수로 작업
    $("#div01Btn1").on("click" , function(){
        var text = widthheight();
        text = innerwidthheight();
        
        $("#div01Div1").html(text);

        });
    });


});