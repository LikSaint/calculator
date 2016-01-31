'use strict';
let lastWasAction;
function addSymbol(){
    if (event.target.tagName == "INPUT") {
        let symbol = event.target.value;
        let resultBox = document.frm.resultBox;//Надо не забыть добавить обработчик и не добавлять точку, когда она уже есть.
        if (lastWasAction){
            resultBox.value = symbol;
            lastWasAction = false;
        } else {
            resultBox.value += symbol
        }
    }
}
function doAction(){
    if (event.target.tagName == "INPUT") {
        let action = event.target.value;
        let evoleBox = document.frm.evoleBox;
        let resultBox = document.frm.resultBox;
        if (!lastWasAction) { //здесь проверка нужна чтобы пресечь ошибку, когда кнопка действия нажимается дважды подряд если не проходит, то надо заменить знак.
            evoleBox.value += resultBox.value;
            evoleBox.value += action;
            lastWasAction = true;
        } else {
            evoleBox.value = evoleBox.value.slice(0,-1);
            evoleBox.value += action;
        }
    }
}
function evaler(){
    let evoleBox = document.frm.evoleBox;
    let resultBox = document.frm.resultBox;
    if (evoleBox.value != "") {
        if (!lastWasAction) { //когда последним был знак действия, то надо убрать этот знак.
            evoleBox.value += resultBox.value;
            lastWasAction = true;
        } else {
            evoleBox.value = evoleBox.value.slice(0, -1);
        }
        resultBox.value = eval(evoleBox.value);
        evoleBox.value = "";
    }
}

function clearAll(){
    let evoleBox = document.frm.evoleBox;
    let resultBox = document.frm.resultBox;
    evoleBox.value = "";
    resultBox.value = "";
    lastWasAction = false;
    event.cancelBubble=true
}