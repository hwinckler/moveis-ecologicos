var banners = ["Do lixo ao luxo!", "Reaproveitar é aproveitar!"];
var bannerAtual = 0;
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
	alert('> ' + banners[bannerAtual]);
    //document.getElementById('mensagem').text = banners[bannerAtual];

setInterval(trocaBanner, 1000);