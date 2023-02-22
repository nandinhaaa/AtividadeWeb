function Tabuada() {
    let num = document.getElementById('txtNum')
    let Tabuada = document.getElementById('selTab')

    if (num.value.length == 0) {
        window.alert('Digite um número!')
    }
    else {
        let n = Number(num.value)
        let cont = 1
        Tabuada.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n * cont}`
            item.value = `tab${cont}`
            Tabuada.appendChild(item)
            cont++
        }
    }
}