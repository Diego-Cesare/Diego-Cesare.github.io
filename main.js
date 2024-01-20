window.onload = function () {
    for (let i = 1; i <= 12; i++) {
      const intervaloAleatorio = Math.round(Math.random() * 10) + 1;

      setInterval(function () {
        var item = document.getElementById(`img${i}`);
        item.style.transform = 'scale(1.3)';
        item.style.zIndex = '1'

        setTimeout(function () {
          item.style.transform = 'scale(1)';
        }, 900);
      }, intervaloAleatorio * 2000);
    }
  };