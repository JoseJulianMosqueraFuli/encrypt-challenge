const message = document.getElementById('message');
const encryptBtn = document.getElementById('encrypt');
const decryptBtn = document.getElementById('decrypt');
const noMessageFound = document.getElementById('noMessageFound');
const foundMessage = document.getElementById('foundMessage');
const copyMessage = document.getElementById('copyMessage');
const encryptedMessage = document.getElementById('encryptedMessage');
const modal = document.getElementById("modal");
const modalButton = document.getElementById("modalButton");

const keys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
}

const reversedKeys = Object.keys(keys).reduce((accum, next) => {
    const value = keys[next];
    accum[value] = next;
    return accum;
}, {})

/**
 * 
 * @param {Record<string,string>} dictionary
 * 
 */
function preRegExp(dictionary) {
    const preRegex = Object.keys(dictionary).reduce((accum, next) => accum + "|" + next);
    return new RegExp(preRegex, 'g')
}

function encryptText(text, dictionary) {
    return text.replace(preRegExp(dictionary), (match) => dictionary[match]);
}

function checkString(string) {
    let check = /[^a-z\! 0-9]/g.test(string);
    if (check) {
        modal.style.display = "flex";
    }
    return !check;
}

function toggleMessage(text, encryptedText) {
    if (checkString(text) && text != "") {
        if (foundMessage.classList.contains('aside__content--none')) {
            foundMessage.classList.toggle('aside__content--none');
            noMessageFound.classList.toggle('aside__content--none');
        }
        encryptedMessage.innerHTML = encryptedText;
    }
}

modalButton.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = "none";
});

encryptBtn.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMessage(message.value, encryptText(message.value, keys));
});

decryptBtn.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMessage(message.value, encryptText(message.value, reversedKeys));
});

copyMessage.addEventListener('click', () => {
    navigator.clipboard.writeText(encryptedMessage.innerHTML);
});
