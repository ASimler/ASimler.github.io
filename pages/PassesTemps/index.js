const target = document.querySelector('h1');


let textAnim = ["Cette","page","est","en","cours","de","construction", "..."];

let wordIndex = 0;
let letterIndex = 0;


const createLetter = () => {
    const letter = document.createElement("span");
    target.appendChild(letter);

    letter.textContent = textAnim[wordIndex][letterIndex];
  

  };


const loop = () => {

    setTimeout(() => {
        letter = document.querySelector('span');    
        // Si on doit revenir au premier mot :
        if (wordIndex >= textAnim.length) {
            wordIndex = 0;
            letterIndex = 0;

            setTimeout(() => {
                target.textContent = "";
                loop();
            }, 2000);

        // Si on est dans le mot :
        } else if (letterIndex < textAnim[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();

        // Si on doit changer de mot :
        } else {
            target.textContent += " ";
            wordIndex++;
            letterIndex = 0;
            loop();
        }
    }, 60);    
}


window.addEventListener('load', () => {
    loop();
});

