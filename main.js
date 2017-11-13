(function() {
    
    function showResults() {
       
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
       
      let numCorrect = 0;
  
       
      myQuestions.forEach((currentQuestion, questionNumber) => {
        
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
         
        if (userAnswer === currentQuestion.correctAnswer) {
          
          numCorrect++;
  
           
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
           

          answerContainers[questionNumber].style.color = "red";
        }
      });
  
       
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function Quiz() {
        
          const output = [];
    
        
        myQuestions.forEach((currentQuestion, questionNumber) => {
         
          const answers = [];
    
          
          for (letter in currentQuestion.answers) {
            
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
    
           
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
          );
        });
    
         
        quizContainer.innerHTML = output.join("");
      }
    

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "What is 2+2?",
        answers: {
          a: "8",
          b: "6",
          c: "4"
        },
        correctAnswer: "c"
      },
      {
        question: "What is 2*8(8/2)?",
        answers: {
          a: "89",
          b: "64",
          c: "6"
        },
        correctAnswer: "b"
      },
      {
        question: "What is 8*78?",
        answers: {
          a: "9866",
          b: "486",
          c: "589",
          d: "624"
        },
        correctAnswer: "d"
      }
    ];
  
    Quiz();
  
      submitButton.addEventListener("click", showResults);
  })();