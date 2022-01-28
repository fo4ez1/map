window.onload = function () {
    let map = document.getElementById("map");
    let rx = Math.floor(Math.random() * (map.width + 1));
    let ry = Math.floor(Math.random() * (map.height + 1));
    let treasure = {
        x: rx,
        y: ry
    }

    map.onmousemove = showCoords;
    map.onmousedown = getDistance;

    function showCoords(event) {
        let coords = document.getElementById("coords");
        let x = event.offsetX;
        let y = event.offsetY;
        coords.value = `Координаты: ${x}, ${y}`;
        let text = document.getElementById("message").innerHTML;
        if (Math.abs(x - treasure.x) < 30 && Math.abs(y - treasure.y) < 30) {
            document.getElementById("message").innerHTML = text.replace(text, "Сокровище здесь!");
        }
        if (Math.abs(x - treasure.x) < 100 && Math.abs(x - treasure.x) >= 30 && Math.abs(y - treasure.y) < 100 && Math.abs(y - treasure.y) >= 30) {
            document.getElementById("message").innerHTML = text.replace(text, "Сокровище недалеко!");
        }
        if (Math.abs(x - treasure.x) >= 100 && Math.abs(y - treasure.y) >= 100) {
            document.getElementById("message").innerHTML = text.replace(text, "");
        }
    }

    function getDistance(event) {
        let coords1 = document.getElementById("coords1");
        let distanceX = event.offsetX - treasure.x;
        let distanceY = event.offsetY - treasure.y;
        return coords1.value = Math.sqrt(distanceX + distanceY);
    }
};