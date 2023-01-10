// https://www.w3schools.com/js/js_arrays.asp
//https://www.w3schools.com/jsref/jsref_filter.asp
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/jsref/jsref_push.asp
const sentenceInput = document.getElementById("sentence");
const wordInput = document.getElementById("word");
const alert = document.getElementById("alert");
const btnAdd = document.getElementById("btnAdd");
const wordList = document.getElementById("wordList");



sentenceInput.oninput = handleChange
wordInput.oninput = handleChange
alert.innerHTML = ""
function handleChange() {
    let sentence = sentenceInput.value;
    let word = wordInput.value;
    if (sentence.includes(word) && word.lenght != 0) {
        alert.innerHTML = "Found"
    } else {
        alert.innerHTML = "Not Found";
    }
};

let wordListArray = []

btnAdd.onclick = () => {
    wordListArray.push(document.getElementById('word2').value);
    wordList.innerHTML = wordListArray;
    document.getElementById('word2').value = '';
};

