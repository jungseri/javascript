$(document).ready(function(){
//1.버튼 클릭시 화면에 내 점수와 등급을 출력하는 점수를 작성 하세요
/*
1. 버튼클릭
2. 데이터 가져오기
3. 점수를 등급으로 변환
4. 화면출력
*/  

        console.log("--------------------------")
        $("#div01Btn1").on("click",function(){ // 1. 버튼을 클릭해서 동작할때
            var score = $("#div01Input").val();
            //input태그의 value속성값을 설정하거나 가지고 오는 함수 val()을 사용하여 데이터 가져오기    
            score = Number(score);//데이터를 가져와서 숫자로 바꿈
            //문제는 함수로 빼 달라는 거였음

            // return 쓰는 방식
            //매개변수로 함수 안에서 함수를 호출한 방식
            checksocre(score); //이친구는 함수라서 어디에서 출력을 하든 상관없음!
            //변수는 함수 안에서만 사용됨.
        });


        function checksocre(score) {
            if(score>=90 && score<101){
                level ="A"
            }
            else if(score>=80 && score<89){
                level ="B"
            }
            else if(score>=70 && score<79){
                level ="C"
            }
            else if(score>=60 && score<69){
                level ="D"
            }
            else{level ="E"}

            //return level;
            printscore(score,level);
        }

        function printscore(sc,lv){
            var sc2 = "당신의 점수는 " + sc +"점이고,  등급은 " + lv +" 입니다.";
            console.log(sc2);
            $("#sss").text(sc2);
        }



/*2.로그인 버튼을 클릭시 입력된 아이디와 페스워드를 비교하여 컴퓨터에 저장된 아이디 와 패스워드가 맞을경우 
로그인 메세지 출력 틀릴 경우 오류 메세지 출력*/
//1. 버튼 클릭
//2. 데이터 불러오기
//3. 불러온 데이터와 저장된 데이터 비교
//4. 결과출력


//1. 버튼 클릭
$("#div02BtnLogin").on("click",function(){
    //2. 데이터 불러오기
    var Id = $("#div02UserId").val();
    var Pw = $("#user2UserPw").val();
id12(Id,Pw);
});

//3. 불러온 데이터와 저장된 데이터 비교
//원래 저장된 데이터는 DB를 연결하여 데이터를 불러와야함
//현재 DB연결이 되어 있지 않기 때문에 전역변수를 사용함

    function id12(Id,Pw) {
      
        if(Id == "jjest7754" && Pw == "123456789"){
          alert("로그인 되었습니다.");
          window.location.href="https://www.naver.com";   //현재창에서 새창으로 넘어가는 태그   
        }
        else{alert("ID 혹은 PW를 잘못입력하셨습니다.");}

        }

        $("#div02BtnLogin").on("click",function(){
            //2. 데이터 불러오기
            var Id = $("#div02UserId").val();
            var Pw = $("#user2UserPw").val();
        id12(Id,Pw);
        });
        console.log("--------------------------")
        //3. 불러온 데이터와 저장된 데이터 비교
        //원래 저장된 데이터는 DB를 연결하여 데이터를 불러와야함
        //현재 DB연결이 되어 있지 않기 때문에 전역변수를 사용함
        
        /*var userDBs=[
            {},{},{},{},{}
        ]
        */
            var userDB = {id= "testid", pw : "testpw"};
            
            function logincheck(id,pw) {
            var result =  false;

            /*
            for(var i=0; i<userDBs.length; i++){
            if(id == userDBs[i].id && user DBs[i].pw){
                    if(pw == userDB.pw){
                        result = true;
                    }
                    return result;
                }
            }
            */
                if(id == userDB.id){
                    if(pw == userDB.pw){
                        result = true;
                    }
                    return result;
                }
            }
            function printloginstate(state) {
                if(state == true){
                    alert("로그인 되었습니다.");
                }
                else{alert("ID 혹은 PW를 잘못입력하셨습니다.");}        
                }



});