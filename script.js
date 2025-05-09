function toggLeMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
if(html.classList.contains('light')) {
  // se tiver light mode add img ligth
  img.setAttribute('src','./assets/esquerdo.png')
 
}else{
  // se tiver sem light mode, manter imagem normal
  img.setAttribute('src',' ./assets/olho direito.png')
}

}