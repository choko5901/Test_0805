const btns = document.querySelectorAll(".btns li");
const articles = document.querySelectorAll("section article");

// 버튼의 개수만큼 반복, 해당 요소 이벤트 등록
console.log(typeof  btns)
for(let i in btns ){
    // 각 버튼 클릭
    btns[i].addEventListener("click", (e) => {
        // btn의 모든요소가 다 나오니 let i of btns 로 하나씩 꺼낸다
        for(let element of btns) {
            //btns 의 버튼 모두 출력 된거임
            element.classList.remove('on');
            // on을 제거 했으니 모두 회색이됨
        };
        btns[i].classList.add('on');
    //    내가 선택한것만 on class 추가

        for(let element of articles) {
            element.classList.remove('on');
            
        };
        articles[i].classList.add('on')

              
        
        
    });
};
