module.exports = function (source) {
    return "var styleElement = document.createElement('style');\n" +
        "var head = document.head || document.getElementsByTagName('head')[0];\n" +
        "styleElement.innerHTML = '" + source.replace(/\n/g, '\\n') + "';\n" +
        "styleElement.setAttribute('type', 'text/css');" +
        "head.appendChild(styleElement);";
};
