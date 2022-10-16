let textsearch = document.getElementById('box-search');
let btnsearcch = document.getElementById('btn-search');
let clearbtn = document.getElementById('clearbox');
const suggBox = document.querySelector('.autosearch');

const togglebox = () => {
    if (btnsearcch.name == "closebox") {
        btnsearcch.name = "openbox"
        clearbtn.style.visibility = "visible";
        textsearch.style.width = 220;
        textsearch.style.padding = 0; 6;
    } else {
        openPage()
        btnsearcch.name = "closebox"
        suggBox.classList.remove('active');
        textsearch.style.width = 0;
        clearbtn.style.visibility = "hidden";
        textsearch.style.padding = 0;
    }
}

function openPage(){
    var valueetext = textsearch.value
    if(valueetext == "gendarmerie nationale"){
        window.open("/vente.html", "_parent")
    }
}

btnsearcch.addEventListener('click', togglebox);

// let btncookie = document.getElementById('btn-cookie');
// let boxcookie = document.getElementById('boxcookie');

// const toogleboxcookie = () => {
//     boxcookie.style.visibility = "hidden"
// }

// btncookie.addEventListener('click', toogleboxcookie);

textsearch.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];

    if (userData) {
        emptyArray = suggestion.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        suggBox.classList.add('active');
        showSuggestion(emptyArray);
        let allList = suggBox.querySelectorAll('li');
        for (let i =0; i < allList.length; i++) {
            allList[i].setAttribute('onclick', "select(this)", openPage);
        }
    }else{
        suggBox.classList.remove('active');
    }
}

function select(element){
    let selectUserData = element.textContent;
    textsearch.value = selectUserData;
}

function showSuggestion(list) {
    let listdata;
    if (!list.length) {
       userValue = textsearch.value;
       listdata = '<li>'+ userValue +'</li>'; 
    } else {
        listdata = list.join('');
    }
    suggBox.innerHTML = listdata;
}


let Bouton = document.getElementById('com');
let BoxChoix = document.getElementById('boxchoix');
let list = document.getElementById('list');

const OpenChoix = () => {
    if (BoxChoix.name == "close"){
        BoxChoix.name = "open";
        BoxChoix.style.opacity = 1;
    }else{
        BoxChoix.name = "close";
        BoxChoix.style.opacity = 0;
    }
}

Bouton.addEventListener("click", OpenChoix);






