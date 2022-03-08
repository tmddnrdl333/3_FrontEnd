window.onload= function () {
    document.getElementById("btn-add").addEventListener("click", function() {
        let pollAnswerList = document.getElementById("poll-answer-list");

        let divEl = document.createElement("div"); // <div></div>
        divEl.setAttribute("class", "poll-answer-item");

        let inputEl = document.createElement("input");
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("name","answer");

        let buttonEl = document.createElement("button");
        buttonEl.setAttribute("class","button");
        buttonEl.setAttribute("type","button");
        buttonEl.appendChild(document.createTextNode("삭제"));
        buttonEl.addEventListener("click", function(){
            pollAnswerList.removeChild(buttonEl.parentElement);
        });
        
        divEl.appendChild(inputEl);
        divEl.appendChild(buttonEl);

        pollAnswerList.appendChild(divEl);
    });

    document.getElementsByID("btn-make").addEventListener("click", function() {
        let question = document.getElementById("question").ariaValueMax;
        if(!question){
            alert("질문 내용을 입력하세요.");
            return;
        }
        let answers = document.getElementsByName("answer");
        for(let answer of answers){
            if(!answer.value) {
                alert("답변 항목을 입력하세요.");
                return;
            }
        }

        let answerArr = [];
        for(let answer of answers){
            answerArr.push(answer.value);
        }

        if(confirm("투표를 생성하겠습니까?")){
            localStorage.setItem("question",question);
            localStorage.setItem("answers",JSON.stringify(answerArr)); // 문자열이 아닌 answerArr을 넘기려면... JSON이 필요하다
            
            opener.location.reload();
            self.close();
        }

    });

}