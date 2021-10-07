function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0  || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           
           if(idade >=0 && idade < 7) {
            genero = 'um garoto'
               img.setAttribute('src', 'baby-boy.png')
           }
                else if(idade < 21) {
            genero = 'um adolecente'
            img.setAttribute('src', 'boy.png')
           }
                else if(idade < 65) {
            genero = 'um homem'
                img.setAttribute('src', 'beard.png')
           }
               else {
            genero = 'um senhor'
                img.setAttribute('src', 'grandfather.png')
           }
       } else if (fsex[1].checked) {
        genero = 'uma garota'
           if(idade >=0 && idade < 7) {
        genero = 'uma menina'
            img.setAttribute('src', 'baby-girl.png')
            }
                else if(idade < 21) {
         genero = 'uma adolecente'
         img.setAttribute('src', 'girl.png')
            }
                else if(idade < 65) {
        genero = 'uma mulher' 
                    img.setAttribute('src', 'woman.png')
            }
                else {
        genero = 'uma senhora'
             img.setAttribute('src', 'old-woman.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
       res.appendChild(img)
    }
}