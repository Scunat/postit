//Création de la class pstit avec les variables et les fonctions.
class postit {
  X;
  y;
  color;
  speed; //vitesse

  constructor(x, y, color, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
  }

  changeSpeed(speed) {
    this.speed = speed;
  }

  changePlace(x, y) {
    this.x = x;
    this.y = y;
  }

  changeColor(color) {
    this.color = color;
  }

  affichePostit() {
    let myElement = document.createElement("div");
    myElement.style.position = "fixed";
    myElement.style.top = this.y + "px";
    myElement.style.left = this.x + "px";
    myElement.style.width = "150px";
    myElement.style.height = "150px";
    myElement.style.background = "yellow";
    myElement.style.padding = "5px";
    myElement.style.color = "black";
    myElement.innerHTML = "postit" + ' ' + this.speed;
    document.body.appendChild(myElement);
  }
}
myPostit = new postit(100, 100, 30, "blue");
myPostit.affichePostit();
