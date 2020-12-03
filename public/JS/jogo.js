let cacto = {
    samambaia: 0,
    outubro: 0,
    raposa: 0,
    monge: 0
    }
    
    function startQuiz() {
        iniciar_quiz.style.display = 'none';
        title_quiz.style.display = 'block';
        q1.style.display = 'block';
        quiz_questions.classList.add("fadeIn");
    }

    // ------------------------QUESTÃO 1------------------------------

    function op1_1() {
        cacto.samambaia++;
        q1.style.display = 'none';
        q2.style.display = 'block';
    }

    function op2_1() {
        cacto.outubro++;
        q1.style.display = 'none';
        q2.style.display = 'block';
    }

    function op3_1() {
        cacto.raposa++;
        q1.style.display = 'none';
        q2.style.display = 'block';
    }

    function op4_1() {
        cacto.monge++;
        q1.style.display = 'none';
        q2.style.display = 'block';
    }

    // ------------------------QUESTÃO 2------------------------------

    function op1_2() {
        cacto.samambaia++;
        q2.style.display = 'none';
        q3.style.display = 'block';
    }

    function op2_2() {
        cacto.outubro++;
        q2.style.display = 'none';
        q3.style.display = 'block';
    }

    function op3_2() {
        cacto.raposa++;
        q2.style.display = 'none';
        q3.style.display = 'block';
    }

    function op4_2() {
        cacto.monge++;
        q2.style.display = 'none';
        q3.style.display = 'block';
    }

    // ------------------------QUESTÃO 3------------------------------
    function op1_3() {
        cacto.samambaia++;
        q3.style.display = 'none';
        q4.style.display = 'block';
    }

    function op2_3() {
        cacto.outubro++;
        q3.style.display = 'none';
        q4.style.display = 'block';
    }

    function op3_3() {
        cacto.raposa++;
        q3.style.display = 'none';
        q4.style.display = 'block';
    }

    function op4_3() {
        cacto.monge++;
        q3.style.display = 'none';
        q4.style.display = 'block';
    }

    // ------------------------QUESTÃO 4------------------------------

    function op1_4() {
        cacto.samambaia++;
        q4.style.display = 'none';
        q5.style.display = 'block';
    }

    function op2_4() {
        cacto.outubro++;
        q4.style.display = 'none';
        q5.style.display = 'block';
    }

    function op3_4() {
        cacto.raposa++;
        q4.style.display = 'none';
        q5.style.display = 'block';
    }

    function op4_4() {
        cacto.monge++;
        q4.style.display = 'none';
        q5.style.display = 'block';
    }

    // ------------------------QUESTÃO 5------------------------------

    function op1_5() {
        cacto.samambaia++;
        q5.style.display = 'none';
        carregando();
    }

    function op2_5() {
        cacto.outubro++;
        q5.style.display = 'none';
        carregando();
    }

    function op3_5() {
        cacto.raposa++;
        q5.style.display = 'none';
        carregando();
    }

    function op4_5() {
        cacto.monge++;
        q5.style.display = 'none';
        carregando();
    }

    // ------------------------RESULTADO DO QUIZ: PONTUAÇÃO MAIOR------------------------------

    function carregando() {
        loading.style.display = 'block';

        setTimeout(resultado, 2500);
    }

    
    function resultado() {
        loading.style.display = 'none';
        quiz_result.classList.add("fadeIn");

        if (cacto.samambaia > cacto.outubro && cacto.samambaia > cacto.raposa && cacto.samambaia > cacto.monge) {
            result1.style.display = 'block';
            
        }
        else if (cacto.outubro > cacto.samambaia && cacto.outubro > cacto.raposa && cacto.outubro > cacto.monge) {
            result2.style.display = 'block';
        }
        else if (cacto.raposa > cacto.samambaia && cacto.raposa > cacto.outubro && cacto.raposa > cacto.monge) {
            result3.style.display = 'block';
        }
        else if (cacto.monge > cacto.samambaia && cacto.monge > cacto.outubro && cacto.monge > cacto.raposa){
            result4.style.display = 'block';
        } else {
            result5.style.display = 'block';
        }

    }