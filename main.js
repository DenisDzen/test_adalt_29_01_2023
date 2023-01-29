let select =  document.getElementById('sex'),
     woman = document.querySelector('.woman'),
     man = document.querySelector('.man'),
     nothing = document.querySelector('.nothing'),
     input = document.querySelector('.input'),
     btn = document.querySelector('.btn'),
     noteighteen = document.querySelector('.noteighteen'),
     eighteen = document.querySelector('.eighteen'),
     warning = document.querySelector('.warning'),
     warningAge = document.querySelector('.warningAge');

let newChange = '',
     dateNow = new Date().getFullYear(),
     value = 0;
     


// Отримуємо вибір статі
select.addEventListener('change', (event) => {
    newChange = event.target.value;
    whoAreYou();
    return newChange;
});

// Відправлення данних року народження
btn.addEventListener('click', (e) => {
     fooAdalt();
});

// FUNCTION

function changeHandler(e) {
    value = e.value;
    e.value = value.replace(/\D/g, '');
    if (value.lendth < 4) {
        warning.classList.add('seewarning');
        warningAge.classList.remove('seewarningAge');
        eighteen.classList.remove('seeeighteen');
        noteighteen.classList.remove('seenoteighteen');
    }
    console.log(value);
};

function fooMan() {
    man.classList.add('seeman');
}

function fooWoman() {
    woman.classList.add('seewoman');
}

function fooNothing() {
    nothing.classList.add('seenothing');
}


function fooAdalt() {

    let adalt = dateNow - value;
    console.log(adalt)
    
    if (adalt < 18 && adalt > 0 && adalt < 150) { 
        warningAge.classList.remove('seewarningAge');
        noteighteen.classList.add('seenoteighteen');
        eighteen.classList.remove('seeeighteen');
    };

    if (adalt > 18 && adalt < 150) { 
        warningAge.classList.remove('seewarningAge');
        eighteen.classList.add('seeeighteen');
        noteighteen.classList.remove('seenoteighteen');
    };
    
    if (adalt < 0 || adalt > 150) { 
        warningAge.classList.remove('seewarningAge');
        warningAge.classList.add('seewarningAge');
        noteighteen.classList.remove('seenoteighteen');
        eighteen.classList.remove('seeeighteen');
    };

}

// Оброблюємо данні вибору
function whoAreYou() {
    if (newChange === 'man') {
        console.log(newChange);
        fooMan();
    } else if (newChange === 'woman') {
        console.log(newChange);
        fooWoman();
    } else {
        console.log('Обери значення, не задовбуй!')
        fooNothing();
    }

}







