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
    let myElement;
    let creation = false;

    if (document.getElementById('bouge') == null) {
       
        myElement = document.createElement('div');
        creation = true;
    }
    else {
        console.log("Mon elem Existe")
        myElement = document.getElementById('bouge');
    }
  
    myElement.style.position = "fixed";
    myElement.id = "bouge"
    myElement.style.top = this.y + "px";
    myElement.style.left = this.x + "px";
    myElement.style.width = "150px";
    myElement.style.height = "150px";
    myElement.style.background = "yellow";
    myElement.style.padding = "5px";
    myElement.style.color = "black";
    myElement.innerHTML = "postit" + " " + this.speed;
    myElement.style.backgroundRepeat = "no-repeat";
    myElement.style.backgroundSize = "contain";
    document.body.appendChild(myElement);

    myElement.addEventListener("click", () => {
      console.log("on bouge !");
      move = true;
    });
    if (postit) {
      document.body.appendChild(myElement);
    }
  }
}
myPostit = new postit(100, 100, 30, "blue");
myPostit.affichePostit();

//Faire bouger le postit avec des évènements
let move = false;
let x;
let y;

let myPostits = new postit("black", 50, 50, 12);
myPostit.affichePostit();

document.addEventListener("mousemove", e => {
  x = e.clientX;
  y = e.clientY;
});
document.addEventListener("mouseup", () => {
  console.log("on stop !");
  move = false;
});

function refresh() {
  if (move) {
    console.log("on déplace !");
    myPostits.changePlace(x, y);
    myPostits.affichePostit();
  }
  setTimeout(refresh, 300);
}

refresh();