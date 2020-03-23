//faire bouger le postit
let move = false;
let x;
let y;
let idBouge = 0;
var tabDingo = new Array();


document.addEventListener('mousemove', e => {
  x = e.clientX;
  y = e.clientY;
});
document.addEventListener('mouseup', () => {
  console.log("on stop !");
  idBouge= 0
  move = false;
})

document.getElementById('dingPlus').addEventListener('mousedown', () => {
    let post = new postit(tabDingo.length + 1, 100, 100, 12)
    tabDingo.push(post);
    tabDingo[(tabDingo.length - 1)].affichePostit();

});

function refresh() {
  if (move && idBouge != 0) {
    console.log("on déplace !");
    tabDingo[(idBouge - 1)].changePlace(x, y);
    tabDingo[(idBouge - 1)].affichePostit();
  }
  setTimeout(refresh, 300);
}

refresh();

function jdeAttachElem(parentId, elem, classElem = [], idElem = "", fonct = "") {
    let elemACreer = document.createElement(elem)
    if (classElem.length > 0) {
        for (let uneClasse in classElem) {
            elemACreer.classList.add(classElem[uneClasse])
        }

    }
    if (idElem != "") {
        elemACreer.id = idElem
    }
    if (fonct != "") {
        elemACreer.addEventListener('click', fonct);
    }
    document.getElementById(parentId).appendChild(elemACreer)

}

function delPost(numberPostit) {
    delete tabDingo[numberPostit - 1]
}