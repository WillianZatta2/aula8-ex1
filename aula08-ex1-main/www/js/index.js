
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    aplicarTema();
    var chave = document.getElementById('chave');
    chave.addEventListener('click', muda);
}

function aplicarTema() {
    let tema = localStorage.getItem('tema');
    var tudo = document.getElementById('conteudo');
    tudo.dataset.bsTheme = tema;
}

function muda() {
    let tema = localStorage.getItem('tema');
    const temaV = tema === 'dark' ? 'light' : 'dark'
    localStorage.setItem('tema',temaV );
    var tudo = document.getElementById('conteudo');
    tudo.dataset.bsTheme = temaV;
}