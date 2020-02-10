  //jquery효과
        //hide/show/toggle : jquery에서 미리 만들어 놓은 css효과
        //hide(): 지정한 html태그를 숨김 (display : none과 같음)
        //$(선택자).hide(속도, 익명함수(콜백함수))
            //속도는 총 동작 시간으로 계산됨
            //1/1000초로 계산함 1000초가 1초
        //show(): 숨겨진 html태그를 보여줌
        //$(선택자).hide(속도, 익명함수(콜백함수))
        //toggle(): hide()/show()의 기능을 돌아가며 실행
         //$(선택자).hide(속도, 익명함수(콜백함수))

$(document).ready(function() {  //<<function이 익명함수 , 콜백함수
            $("#btnhide").on("click", function(){
                /*$("#div01p").hide(); >>>기본사용*/
                /*$("#div01p").hide(300); >>>실행속도추가*/
                /*$("#div01p").hide(300, function() {
                    alert("hide가 실행되었습니다.");
                });  >>>콜백 함수 사용*/
    
                $("#div01p").hide(300, function() {
                    alert("hide가 실행되었습니다.");
                });    
            });
            $("#btnshow").on("click", function(){
                $("#div01p").show(500, function() {
                    alert("show가 실행되었습니다.");
                });     
            });
            $("#btntoggle").on("click", function(){
                $("#div01p").toggle(500, function() {
                    alert("toggle가 실행되었습니다.");
                });    
            });
    
            console.log("---------------------------------------")
            //슬라이드 효과
            //slideDown(): 지정한 html요소를 아래로 슬라이드함
                //$(선택자).slideDown(속도, 콜백);
                //속도는 slow, fast, 숫자(1/1000 초)로 입력
            //slideUp(): 지정한 html요소를 위로 슬라이드함
            //slideToggle(): 지정한 html요소를 아래로 위로 돌아가며 동작
            $("#div02flip").on("click",function(){
                $("#div02panel1").slideDown("slow", function(){
                    $("#div02panel1").slideUp("1000", function(){
                        alert("실행후 콜백함수 동작");
                    });
                });
            });//여러가지 옵션 동시에 적용하기

            $("#div02flip2").on("click",function(){
                $("#div02panel2").slideUp();
            });
            

            $("#div02flip3").on("click",function(){
                $("#div02panel3").slideToggle();
            });

            console.log("---------------------------------------")
            //애니매이션 효과
            //animate() : 사용자 정의 애니매이션을 작성 할 수 있음
            //$(선택자).animate({옵션}, 속도, 콜백);
                //옵션 : css속성을 입력, object형을 사용하기 때문에 css속성을 여러개 사용 할 수 있음. 
                    //컬러 관련 CSS속성은 jquery.color 플러그인을 추가 설치해야함
                    //현재 적용된 값에 증가/감소 값을 넣어서 상대값으로 표현이 가능함
                //속도 : 1/1000초로 계산
                //콜백 : animate()가 실행된 이후 동작할 작업
                //애니메이션을 연속 여러개 실행 할 수 있음.
                //animate()를 여러개 입력시 입력된 순서에 따라 차례대로 실행됨

            $("#div03btn1").on("click", function(){
                /*$("#div03div").animate({left :"250px"});*/
                $("#div03div").animate(
                    {left :"250px", 
                   /* height: "500px",
                    width:"500px",*/
                    backgroundColor: jQuery.Color("blue")}, //컬러 플러그인 적용
                    function(){
                    alert("완료되었습니다");
                });
            });
/*
            //애니메이션 연속으로 주기1
            $("div03-1btn").on("click", function(){
                $("#div03-1div").animate({left :"500px"}); 
                $("#div03-1div").animate({width :"500px"});                
                $("#div03-1div").animate({height :"500px"});        
                $("#div03-1div").animate({backgroundColor :jQuery.Color("blue")});
            }); 
            */
            console.log("---------------------------------------")
            //애니메이션 연속으로 주기2
            /*var div=$("div03-1btn");
            div.animate({left :"500px"});
            div.animate({width :"500px"});
            div.animate({height :"500px"});
            div.animate({backgroundColor :jQuery.Color("blue")});*/

        //jquery chaining을 사용한 방식
        /*
            div.animate({left:"500px"}).animate({width:"400px"}).animate({height:"400px"})
            .animate({width:backgroundColor: jQuery.Color("blue")});
        */
        
        //jquery : 애니메이션 효과 멈추기
        //stop() : 애니메이션이나 제이쿼리 효과를 끝나기 전에 중지시킴(기본형)
        //$(선택자).stop(stopAll, goToEnd)
        //stopAll: 기본값 false, 연속된 효과가 있을 경우 모두 중지
        //stopAll : false, goToEnd : true >>애니메이션 효과의 끝부분으로 이동함
        //stopAll : true, goToEnd : false >>애니메이션이 여러개 있을 경우 모두 정지 
        //stopAll : true, true : >>
        //goToEnd: 기본값 false, 해당 효과의 끝으로 이동
        //애니메이션 효과를 여러개 사용했을 경우, stop() 기본형을 사용시 현재 동작중인 애니메이션 효과만 중지시킴
        //나머지 애니메이션은 자동으로 시작됨
        
        //제이쿼리 콜백함수
        //제이쿼리 함수를 사용시 해당 함수가 완전히 실행완료가 된 후 자동으로 호출되는 함수

        $("#div04flip1").on("click", function(){
            $("#div04panel").slideDown(5000);
        });

        $("#div04div1").on("click", function(){
            $("#div04div1").fadeOut(5000);
        });        
        
        $("#div04div2").on("click", function(){
            
            $("#div04div2").animate({left :"500px"},5000);
            });
        
        $("#div04btn1").on("click", function(){
            $("#div04panel").stop(true, true);
        });

        $("#div04btn2").on("click", function(){
            $("#div04div1").stop(true, true);
        });   

        $("#div04btn3").on("click", function(){
            $("#div04div2").stop(true, true);
        });

        
        $("#div04div3").on("click", function(){
            $("div04div3").animate({left :"500px"},5000);
        });

        $("#div04btn4").on("click", function(){
            $("div04div3").stop();
        });


        //제이쿼리 콜백함수
        //제이쿼리 함수를 사용시 해당 함수가 완전히 실행완료가 된 후 자동으로 호출되는 함수

        $("#div05btn1").on("click",function(){
            $("#div05 > h3").hide("fast");
            alert("콜백함수 미사용");
        });

        $("#div05btn2").on("click",function(){
            $("#div05 > h3").hide("slow");
            alert("콜백함수 사용");
        });
        
        //제이쿼리 체인
        //제이쿼리 함수 사용시 여러개의 함수를 한번에 연결해서 입력하는 방식
        //제이쿼리 체인 기능을 사용시 선택자를 통해서 2번이상 같은 .html요소를 찾을 필요가 없음
        //$(선택자).함수1().함수2().함수3()....

        $("#div06btn").on("click", function(){
            $("div06 > h3")
            .css("color","red")
            .slideUp(2000)
            .slideDown(2000)
            .fadeOut(2000)
            .fadeIn(2000);
        });

        $("#clickme").on("click", function() {
            $("#clickme").animate({top:"100px", left:"200px"}, function(){
              // Animation complete.
            });
          });

});