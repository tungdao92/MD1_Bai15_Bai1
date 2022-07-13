function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += 30;
    };
    this.moveDown = function () {
        this.top += 30;
    };
    this.moveLeft = function () {
        this.left -= 30;
    }
    this.moveUp = function () {
        this.top -= 30;
    }
}

var hero = new Hero('nezuko.png', 0, 0, 50);

function start() {

    if (hero.left===0 && hero.top < 300 - hero.size){
        hero.moveDown();
    } else if( hero.top > 300 - hero.size && hero.left < 300 - hero.size){
        hero.moveRight()
    }else if (hero.left > 300 - hero.size && hero.top > 0){
        hero.moveUp()
    }
    if (hero.top === 0 ){
        hero.moveLeft()
    }



    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}

