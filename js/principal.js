varbanners=
["Os melhores do Brasil!","Qualidade e pre�o baixo!"];
varbannerAtual=0;
functiontrocaBanner() {
bannerAtual=(bannerAtual+1)%2;
document.querySelector(�h2#mensagem�).textContent=
banners[bannerAtual];
}
setInterval(trocaBanner,1000);