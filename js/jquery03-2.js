$(document).ready(function(){
//게시판에서 검색으로 찾는 기능 예제

    $("#myInput").on("keyup",function(){
        //$(this) : 현재 선택한 태그, 콜백함수내에서 현재 선택한 태그를 지칭할 때 사용하는 기호
        var value = $(this).val().toLowerCase();
        // var value = $("#myInput").val().toLowerCase();
        //알파벳문자를 다 소문자로 바꿔주는게 이 키알
        //var value = $(this).val();//input 태그의 value값을 받아옴
        //value =  value.toLowerCase();

        $("#myTable tr").filter(function(){
            $(this).toggle(
                //toggle : 일치하는 조건의 내용을 화면에 출력하거나 숨김.
                //indexOf(): 문자열안에서 지정한 글자의 위치를 반환
                $(this).text().toLowerCase().indexOf(value) >1);
        });
    });
});