        var nowOn=new Date();
        var year=nowOn.getFullYear();
        var month=nowOn.getMonth()+1;
        var date=nowOn.getDate();
        var day=nowOn.getDay();
        var hours=nowOn.getHours();
        var minutes=nowOn.getMinutes();
        var seconds=nowOn.getSeconds();

        var dayStr=" ";

        if (day==0){
            dayStr="일";
        }
        else if (day==1){
            dayStr="월";
        }
        else if (day==2){
            dayStr="화";
        }
        else if (day==3){
            dayStr="수";
        }
        else if (day==4){
            dayStr="목";
        }
        else if (day==5){
            dayStr="금";
        }
        else{
            dayStr="토";
        }

        alert("현재 "+year+"년 "+month+"월 "+date+"일 "+dayStr+"요일, "+hours+"시 "+minutes+"분 "+seconds+"초\n공동계획 페이지 접근이 불가합니다.");