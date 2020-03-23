//Création de la class postit avec les variables et les fonctions.
class postit {
  X;
  y;
  color;
  texts;
  speed; //vitesse
  numberPostit;

  constructor(x, y, color, speed, numberPostit) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
    this.numberPostit = numberPostit;
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

    if (document.getElementById("bouge" + this.numberPostit) == null) {
       
        myElement = document.createElement('div');
        creation = true;
    }
    else {
        console.log("Mon elem Existe")
        myElement = document.getElementById("bouge" + this.numberPostit);
    }
  
    myElement.style.position = "fixed";
    myElement.id = "bouge" + this.numberPostit;
    myElement.style.top = this.y + "px";
    myElement.style.left = this.x + "px";
    myElement.style.width = "150px";
    myElement.style.height = "150px";
    myElement.style.background = "yellow";
    myElement.style.backgroundRepeat = "no-repeat";
    myElement.style.backgroundSize = "contain";


    if (creation) {
      document.body.appendChild(myElement);
      myElement.innerHTML += "mon Num = " + this.numberPostit
      jdeAttachElem("bouge" + this.numberPostit, "div", ["basDroite"], "menBas" + this.numberPostit)
      jdeAttachElem("menBas" + this.numberPostit, 'i', ["fas", "fa-arrows-alt"], "", () => {
          idBouge = this.numberPostit;
          move = true;
      });
      jdeAttachElem("menBas" + this.numberPostit, 'i', ["fas", "fa-trash-alt"], "", () => {
          document.getElementById("bouge" + this.numberPostit).remove()
          delPost(this.numberPostit)
      });
    }
  }
}