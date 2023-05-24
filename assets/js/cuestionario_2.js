/*Este fue un intento de usar la API quizapi.io utilizando vue.js para hacer el cuestionario. A diferencia de la api de opentdb, 
quizapi.io almacena preguntas de opciones multiples el usuario debe marcar la correcta en un casillero. Si bien pudimos hacerla 
funcionar, arrojaba codigo 404 muy frecuentemente. 
Ademas no pudimos traducir al español las preguntas y respuestas por que el traductor gratuito que utilizamos 
api.mymemory.translated.net arrojaba un objeto que nos costo interpretar*/

new Vue({
    el: '#app',
    data: {
      questions: [],
      userAnswers: {},
      showingQuiz: false
    },
    methods: {
      showQuiz() {
        this.showingQuiz = true;
        this.getQuestions();
      },
      getQuestions() {
        var API_URL = 'https://quizapi.io/api/v1/questions?apiKey=H2hF3A6sHPdzfqPGBBGU6BRm2OyIWU4FCuOeXDkP&difficulty=Medium&limit=3&tags=HTML,JavaScript,MySQL';
        axios.get(API_URL)
          .then(response => {
            this.questions = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      submitAnswers() {
        var API_URL = 'https://quizapi.io/api/v1/questions?apiKey=H2hF3A6sHPdzfqPGBBGU6BRm2OyIWU4FCuOeXDkP&difficulty=Medium&limit=3&tags=HTML,JavaScript,MySQL';
        axios.get(API_URL)
          .then(response => {
            var questions = response.data;
            var correctAnswers = questions.map(question => question.correct_answer);

            var userAnswersArray = Object.values(this.userAnswers);
            if (userAnswersArray.length === questions.length && userAnswersArray.every((answer, index) => answer === correctAnswers[index])) {
              // Respuestas correctas, muestra el código aleatorio
              var codigo = Math.floor(Math.random() * 90000) + 10000;
              alert('¡Excelente! Tu código de descuento es: ' + codigo);
            } else {
              // Al menos una respuesta incorrecta, redirige a una página web
              alert('no te precupes, si no te  segui este link:' );
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  });