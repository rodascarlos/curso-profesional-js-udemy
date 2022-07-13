const db = [
    'luis',
    'maria',
    'sergio',
    'josue',
    'lena',
    'marcos',
    'omar',
    'enrique'
];

const buscador = document.querySelector('#buscador');
const sugerencias = document.querySelector('#sugerencias');

buscador.addEventListener('input', e =>{
    const q = e.target.value.toLowerCase().trim();

    if(q == '') mostrarSugerencias([], q);

    const res = db.filter(item => {
        if(item.indexOf(q) > -1) return item;
    });

    mostrarSugerencias(res, q);
});

function mostrarSugerencias(valores, q){
    sugerencias.innerHTML = '';

    if(q == ''){
        sugerencias.style.display = 'none';
        return false;
    }else{
        sugerencias.style.display = 'block';
    }

    valores.forEach(valor =>{
        const elemento = document.createElement('a');
        elemento.href = '#';
        let texto = valor.replace(q, `<strong>${q}</strong>`);
        elemento.innerHTML = texto;
        sugerencias.appendChild(elemento);

        elemento.addEventListener('click', e => {
            buscador.value = e.target.textContent;
            sugerencias.innerHTML = '';
            sugerencias.style.display = 'none';
        });
    });
}