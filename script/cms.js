document.getElementById("formQuiz")
      .addEventListener('submit', checkQuiz)

    function checkQuiz(event){
      event.preventDefault();
      var p1Answers = document.getElementsByName("p1")
      var imgp1 = document.getElementById("checkImg1")
      var checkW3 = true
      for (i=0; i<p1Answers.length;i++){
        if (!p1Answers[i].checked){
          p1 = false
        }
      }
      if (!p1){
        imgp1.src="media/wrong.jpg"
      }else{imgp1.src="media/checked.jpg"}

      var p2Answer = document.getElementsByName("p2")
      var imgElement = document.getElementById("checkImg2")
      var radio2 = true
      if (p2Answer[0].checked){
        imgElement.src="media/checked.jpg"
      }else{imgElement.src="media/wrong.jpg"}


      var images = document.getElementsByClassName("checkImgs")
      for (i = 0; i < images.length; i++){
        images[i].style.visibility = 'visible'
      }

    }

    function cleanImages(){
      var images = document.getElementsByClassName("checkImgs")
      for (i = 0; i < images.length; i++){
        images[i].style.visibility = 'hidden'
        images[i].style
      }
    }