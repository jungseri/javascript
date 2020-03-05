$(document).ready(function(){
    //제이쿼리를 이용한 트레버싱(필터링)
    //first():지정한 요소의 첫번째 요소를 선택
    //last():지정한 요소의 마지막 요소를 선택
    //eq():지정한 요소의 특정색인 번호번째의 요소를 선택
    //filter():조건으로 입력한 요소를 선택
    //not():조건으로 입력한 요소와 반대되는 일치하지않는 요소를 선택
    // $("#div01 >div").first("").css(
    //     "background-color", "yellow");


    // $("#div01 >div").last().css(
    //     "background-color", "yellow");

    
    $("#div01 >div").eq().css(
    "background-color", "yellow");

    $("#div01 >p").eq(1).css(
        "background-color", "yellow");
   //eq사용시, index 번호는 0부터 시작 

   $("#div04 >p"). filter("intro").css(
    "background-color", "yellow");

    $("#div04 >p"). filter("intro").css(
    "background-color", "yellow");
    //filter()은 지정한 조건을 선택
    $("#div04 >p"). filter("intro").css(
        "background-color", "yellow");
        // not은 지정한 조건을 제외하고 선택
    $("#div04 >p"). filter("intro").css(
            "background-color", "yellow");
});