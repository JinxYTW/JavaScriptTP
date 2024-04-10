function HelloWorld() {
    document.body.innerHTML = "<h1>Hello World !</h1>"; 
}


function modifyHtml(Title, Strong_color, Link){
    const titles = document.querySelectorAll('h1');
    titles[0].innerHTML = Title;
    
    const strong = document.querySelectorAll('strong');
    strong[0].style.color = Strong_color;

    let links = document.querySelectorAll('a');
    links[0].href = Link;
    links[1].href = 'https://github.com/JinxYTW/JavaScriptTP.git';
}

modifyHtml('Polytech Dijon !', '#4691ff ', 'https://neal.fun/password-game/');

function testValue(){
    let input = document.querySelector('input');
    if (input.value === isNaN){
        input.style.backgroundColor = 'red';  
    }
    if (input.value % 2 === 0 ){
        input.style.backgroundColor = 'yellow';
    }
    else{
        input.style.backgroundColor = 'blue';
    }
}

function connectClickEvent(){
    let button = document.querySelector('button');
    button.addEventListener('click', testValue);

}

const txtMail = document.querySelector("#mail-button");
txtMail.addEventListener('click', connectClickEvent);