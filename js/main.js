function replaceQuotes(textArea) {
    var textAreaValue = textArea.value;
    var regExp = /\B'|'\B/gi;
    var replaceValue = textAreaValue.replace(regExp, '"');
    alert(replaceValue);
    textAreaValue.value = replaceValue;
}