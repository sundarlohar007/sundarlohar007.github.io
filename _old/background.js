(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var container = document.getElementById('bg-canvas');
  if (!container) return;

  var canvas = document.createElement('canvas');
  container.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  var dots = [];
  var cols = 35, rows = 40;
  var spacingX, spacingY;
  var time = 0;
  var running = true;

  function isLight() {
    return document.documentElement.classList.contains('light');
  }

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    spacingX = Math.max(25, w / cols);
    spacingY = Math.max(25, h / rows);
    dots = [];
    var ox = (w - (cols - 1) * spacingX) / 2;
    var oy = (h - (rows - 1) * spacingY) / 2;
    for (var ix = 0; ix < cols; ix++) {
      for (var iy = 0; iy < rows; iy++) {
        dots.push({ bx: ix * spacingX + ox, by: iy * spacingY + oy, ix: ix, iy: iy });
      }
    }
  }

  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var light = isLight();
    var dotColor = light ? '100,115,150' : '180,190,210';
    var size = light ? 3 : 3.5;
    var alpha = light ? 0.5 : 0.7;
    var len = dots.length;
    for (var i = 0; i < len; i++) {
      var d = dots[i];
      var y = d.by +
        Math.sin((d.ix + time) * 0.3) * 25 +
        Math.sin((d.iy + time) * 0.5) * 25;
      ctx.fillStyle = 'rgba(' + dotColor + ',' + alpha + ')';
      ctx.beginPath();
      ctx.arc(d.bx, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    time += 0.06;
    requestAnimationFrame(draw);
  }

  resize();
  draw();

  window.addEventListener('resize', resize);
})();
