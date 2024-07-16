// Avvio conteggio con ciclo for

const myList = document.querySelector('ul');

for (let i = 1; i <= 100; i++) {

    
    const newLi = document.createElement('li');
    
    //Volendo potremmo usare if (i % 15 == 0) cosi da semplificare la vita
    //Mettiamo più in alto la regola più specifica quando ci sono condizioni sovrapponibili
    
    if (i % 3 == 0 && i % 5 == 0) {

        //Prima Scrivere in console
        console.log('FizzBuzz');

        //Poi Scrivere in HTML
        newLi.append('FizzBuzz');
        newLi.classList.add('fizzbuzz');
    }
    else if (i % 3 == 0) {

        //Prima Scrivere in console
        console.log('Fizz');

       //Poi Scrivere in HTML 
        newLi.append('Fizz');
        newLi.classList.add('fizz');
    }
    else if (i % 5 == 0) {

        //Prima Scrivere in console
        console.log('Buzz');

        //Poi Scrivere in HTML
        newLi.append('Buzz');
        newLi.classList.add('buzz');
    }
    else {

        //Prima Scrivere in console
        console.log(i);

        //Poi Scrivere in HTML
        newLi.append(i);
    }

    myList.append(newLi);
}
