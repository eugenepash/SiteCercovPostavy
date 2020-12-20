const redScrap = document.querySelector('.red_scrap');
const blackScrap = document.querySelector('.black_scrap');

const redScrapCheck = document.getElementById('redScrapCheck');
const blackScrapCheck = document.getElementById('blackScrapCheck');

const zdravieList = document.querySelector('.zdravieList');
const panixidaList = document.querySelector('.panixidaList');

const addnewnameBtnRed = document.querySelector('.addnewnameBtnRed');
const addnewnameBtnBlack = document.querySelector('.addnewnameBtnBlack');
let cnameRed = document.querySelector('.cnameRed');
let cnameBlack = document.querySelector('.cnameBlack');
let addRed = document.querySelector('.addRed');
let addBlack = document.querySelector('.addBlack');





redScrapCheck.onclick = function(){
    redScrap.style.display = 'flex';
    blackScrap.style.display = 'none';
    zdravieList.style.display = 'block';
    panixidaList.style.display = 'none';
    
}

blackScrapCheck.onclick = function(){
    redScrap.style.display = 'none';
    blackScrap.style.display = 'flex';
    zdravieList.style.display = 'none';
    panixidaList.style.display = 'block';
}


addnewnameBtnRed.onclick = function(){
    let divClone = cnameRed.cloneNode(true);
    addRed.appendChild(divClone);
}
addnewnameBtnBlack.onclick = function(){
    let divClone = cnameBlack.cloneNode(true);
    addBlack.appendChild(divClone);
}