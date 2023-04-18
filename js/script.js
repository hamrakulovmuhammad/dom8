//create
for (let i = 0; i < 7; i++) {
    let body = document.body
    let femily = document.createElement('div')
    let up_img = document.createElement('div')
    let img = document.createElement('img')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    femily.classList.add('femily')
    up_img.classList.add('up_img')

    img.src = 'img/img.png'
    h1.innerHTML = 'MEN’S CLOTHING (120)'
    p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in thepadded sleeve, your everyday'


    let ikons = document.createElement('div')
    let image = document.createElement('img')
    let h1_t = document.createElement('h1')
    let ime = document.createElement('img')
    let h1_p = document.createElement('h1')
    let imf = document.createElement('img')
    let h1_g = document.createElement('h1')


    ikons.classList.add('ikons')
    image.src = 'img/dolar.png'
    h1_t.innerHTML = '109'
    ime.src = 'img/yulduz.png'
    h1_p.innerHTML = '3,9'
    imf.src = 'img/kvadrat.png'
    h1_g.innerHTML = '120'

    body.append(femily, ikons)
    femily.append(up_img, h1, p, image, h1_t, ime, h1_p, imf, h1_g)
    up_img.append(img)

    let button = document.createElement('button')
    button.classList.add('button')

}