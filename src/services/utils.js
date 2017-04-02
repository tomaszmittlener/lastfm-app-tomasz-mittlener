
function removeHtml(text){
  if(this.state.artistWiki !== ''){
    let wikiHtmlRemoved = text.replace('/<a\b[^>]*>(.*?)<\/a>/g', ' ');
    this.setState({
      artistWiki: wikiHtmlRemoved
    })
  }
}

export {removeHtml}
