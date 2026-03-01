const nota_1 = document.querySelectorAll('.nota1')
const nota_2 = document.querySelectorAll('.nota2')
const nota_3 = document.querySelectorAll('.nota3')
const medias = document.querySelectorAll('.media')
const statusA = document.querySelectorAll('.status')

for (let i = 0; i < nota_1.length; i++) {
    let media = (
        Number(nota_1[i].textContent) +
        Number(nota_2[i].textContent) +
        Number(nota_3[i].textContent)
    ) / 3
    medias[i].textContent = media.toFixed(2)
}

