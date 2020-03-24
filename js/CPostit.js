//Création de la class postit avec les variables et les fonctions.
class postit {
  posX;
  posY;
  color;
  texts;
  speed; //vitesse
  number;

  constructor(numPost, posX, posY, color, speed) {
    this.posX = posX;
    this.posY = posY;
    this.color = color;
    this.speed = speed;
    this.number = numPost;
  }

  changeSpeed(speed) {
    this.speed = speed;
  }

  changePlace(x, y) {
    this.posX = x;
    this.posY = y;
  }

  changeColor(color) {
    this.color = color;
  }
  affichePostit() {
    let myElement;
    let creation = false;

    if (document.getElementById("bouge" + this.number) == null) {
       
        myElement = document.createElement('div');
        creation = true;
    }
    else {
        console.log("Mon elem Existe")
        myElement = document.getElementById("bouge" + this.number);
    }
  
    myElement.style.position = "fixed";
    myElement.id = "bouge" + this.number;
    myElement.style.top = this.posY + "px";
    myElement.style.left = this.posX + "px";
    myElement.style.width = "150px";
    myElement.style.height = "150px";
    myElement.style.background = "yellow";
    myElement.style.backgroundRepeat = "no-repeat";
    myElement.style.backgroundSize = "contain";


    if (creation) {
      document.body.appendChild(myElement);
      myElement.innerHTML += "mon Num = " + this.number
      jdeAttachElem("bouge" + this.number, "div", ["basDroite"], "menBas" + this.number)
      jdeAttachElem("menBas" + this.number, 'i', ["fas", "fa-arrows-alt"], "", () => {
          idBouge = this.number;
          move = true;
      });
      jdeAttachElem("menBas" + this.number, 'i', ["fas", "fa-trash-alt"], "", () => {
          document.getElementById("bouge" + this.number).remove()
          delPost(this.number)
      });
    }
  }
}