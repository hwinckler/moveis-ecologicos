varbanners = ["Do lixo ao luxo!", "Reaproveitar � aproveitar!"];
varbannerAtual = 0;
functiontrocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector(�h2# mensagem�).textContent = banners[bannerAtual];
}
setInterval(trocaBanner, 1000);