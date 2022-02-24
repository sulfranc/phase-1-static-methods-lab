class Formatter {
  static capitalize (word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  static sanitize (word){
    return word.replace(/[^A-Za-z0-9-' ']/g, '');

  } 
  static titleize(string) {
    const words = string.split(' ')
    words[0] = this.capitalize(words[0])
    const newWords = words.map(word => {
      if (word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but'  && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {
        return word = this.capitalize(word)
        debugger
      }
      else {
        return word
      }
    })
    return newWords.join(' ')

  }
}
