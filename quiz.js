$(document).ready(function(){
     let correct = [];
     let questions = [];
     let choice_options = [];

     // Generate quiz questions
     // ...

     questions.push("Which year Nazarbayev University was founded?");
     choice_options.push(["2009","2010","2011","2012"]);
     correct.push("2009");
     
     questions.push("What is 5 + 5?");
     choice_options.push(["11", "12", "10", "9"]);
     correct.push("10");

     questions.push("What is the capital of Kazakhstan?");
     choice_options.push(["Astana", "Almaty", "Shymkent", "Karaganda"]);
     correct.push("Astana");

     questions.push("Which one of the following keywords is used to declare a function in JavaScript?");
     choice_options.push(["def", "func", "define", "function"]);
     correct.push("function");

     
     // shuffling the arrays to randomize question order

     
     let i, j, k;
     for (i = questions.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         k = questions[i];
         questions[i] = questions[j];
         questions[j] = k;

         k = choice_options[i];
         choice_options[i] = choice_options[j];
         choice_options[j] = k;

         k = correct[i];
         correct[i] = correct[j];
         correct[j] = k;
     }


     //let quizBox = document.getElementById ("quiz-box"); // JS way
     quizBox = $("#quiz-box"); // Jquery

     for (let i = 0; i < questions.length; i++) {
          quizBox.append (`<div class='question${i}'>`); 
			
		  // ${} syntax is used to dynamically change the strings
		  // in order to randomize choice option combination of array's splice method and Math library
		  // functions is used
		  // each individual div's class is the indicative of the question index
          $(`.question${i}`).append (`<p class='d'> Q${i+1}. ${questions[i]} </p>`);
          $(`.question${i}`).append (`<label><input type='radio' name='q${i}' value='a'>${choice_options[i].splice(Math.ceil(Math.random()*choice_options[i].length-1), 1)}</label>`)
          $(`.question${i}`).append (`<label><input type='radio' name='q${i}' value='a'>${choice_options[i].splice(Math.ceil(Math.random()*choice_options[i].length-1), 1)}</label>`)
          $(`.question${i}`).append (`<label><input type='radio' name='q${i}' value='a'>${choice_options[i].splice(Math.ceil(Math.random()*choice_options[i].length-1), 1)}</label>`)
          $(`.question${i}`).append (`<label><input type='radio' name='q${i}' value='a'>${choice_options[i].splice(Math.ceil(Math.random()*choice_options[i].length-1), 1)}</label>`)
     }

     

     let countCorrect = 0;

     $("button").click (function (event){

          
          let children = $("#quiz-box")[0].children;
          if (children[children.length-1].tagName == "H2") {
               children[children.length-1].remove();
               countCorrect = 0;
          }

          for (let i = 0; i < questions.length; i++) {
               $(`input[name=q${i}]`).each (function (index){
                    choice = $(this).parent().text(); 
                    if ($( this ).prop("checked") == true && correct [i] == choice){
                         countCorrect += 1;
                    }
               });
          }
          
          $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
     }); 

});