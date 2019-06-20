function kebabToCamelCase() {
  let phrase = arguments[0], container = '', kebab = 0;

  if (phrase.indexOf('-') > -1){
    while (phrase.indexOf('-') > -1){
      kebab = phrase.indexOf('-');
      container += phrase.slice(0, kebab);
      container += phrase.charAt(kebab + 1).toUpperCase();
      phrase = phrase.slice(kebab + 2, phrase.length);
    }
    container += phrase;
    return container;
  }else{
    return phrase;
  }
}

module.exports = kebabToCamelCase;
