const sideBar = document.getElementById("side-bar");
const content = document.querySelector("main");

btn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  // Mettre l'opacité au fond : voir CSS .active ~ .content {};
});

// Pour que lorsqu'on click sur content ça range la sidebar :
content.addEventListener("click", () => {
  sideBar.classList.remove("active");
});


// Paramétrage du changement de présentation : TP CSS ou TP JS

const utils = {
  pageContent: function(content, targetON, targetOFF) {
    document.querySelector('.projects-container').innerHTML = content;
    targetON.style.color = 'var(--color1)';
    targetOFF.style.color = 'var(--white1)';

    if (document.getElementById('jsTpCol')) {
      document.querySelector('.TpList').style.width = '90%';

      let jsProjects = document.querySelectorAll('.js-Projects');
      // console.log(jsProjects);
      
      jsProjects.forEach(element => {
        console.log(element);
        
        element.style.gridTemplateColumns = '28% 64% 8%';
      });
      // document.querySelector('.js-Projects').style.gridTemplateColumns = '28% 64% 8%';

    }
  }
};

const page = {
  css: function() {
    utils.pageContent(
      `<div class="projects">
                <!-- <p>Cliquez pour découvrir quelques exemples de projets :</p> -->
                <div class="TpList">
                    <!-- Projet 1 -->
                        <div class="css-Projects">
                            <div class="imgProjects">
                                <img src="./../../assets/img/Gaming-campus.png" alt="logo Gaming Campus">
                            </div>
                            <div class="titleProjects">
                                <a href="./Projects/Gaming-Campus/projet1-index.html" target="_blank">Gaming Campus</i></a>
                            </div>
                            <div class="logoProjects">
                                <i class="fa-solid fa-gamepad"></i>
                            </div>
                        </div>
                        
                    <!-- Projet 2 -->
                        <div class="css-Projects">
                            <div class="imgProjects">
                                <img src="./../../assets/img/La-Montagne.png" alt="logo site de montagne">
                            </div>
                            <div class="titleProjects">
                                <a href="./Projects/La-Montagne/index.html" target="_blank">La Montagne</a>
                            </div>
                                <div class="logoProjects">
                                    <i class="fa-solid fa-mountain-sun"></i>
                                </div>
                        </div>

                        <!-- Projet 3 -->
                        <div class="css-Projects">
                            <div class="imgProjects">
                                <img src="./../../assets/img/Resto.png" alt="logo site de restaurant">
                            </div>
                            <div class="titleProjects">
                                <a href="./Projects/Site-Resto/index.html" target="_blank">Site de restaurant</a>
                            </div>
                            <div class="logoProjects">
                                <i class="fa-solid fa-utensils"></i>
                            </div>
                        </div>
                </div>
            </div>`
    , css, js);
  },

  js: function() {
    utils.pageContent(
      `<div class="projects">
                <!-- <p>Cliquez pour découvrir quelques exemples de projets :</p> -->
                <div class="TpList" id="jsTpCol">
                  <div>
                          <div class="js-Projects">
                              <div class="imgProjects">
                                  <img src="./../../assets/img/BubbleGame.png" alt="Logo jeux des bulles">
                              </div>
                              <div class="titleProjects">
                                  <a href="./Projects/Bubbles/index.html" target="_blank">Jeu : explosez les bulles !</a>
                              </div>
                              <div class="logoProjects">
                                  <i class="fa-regular fa-circle"></i>
                              </div>
                          </div>
                          
                          <div class="js-Projects">
                              <div class="imgProjects">
                                  <img src="./../../assets/img/MDP.png" alt="Logo Générateur de mots de passes">
                              </div>
                              <div class="titleProjects">
                                  <a href="./Projects/password-maker/index.html" target="_blank">Générateur de mot de passe</a>
                              </div>
                              <div class="logoProjects">
                                  <i class="fa-solid fa-lock"></i>
                              </div>
                          </div>

                          <div class="js-Projects">
                              <div class="imgProjects">
                                  <img src="./../../assets/img/ToDoList.png" alt="Logo To Do List">
                              </div>
                              <div class="titleProjects">
                                  <a href="./Projects/TP-ToDoList/index.html" target="_blank">To Do List</a>
                              </div>
                              <div class="logoProjects">
                                  <i class="fa-solid fa-check"></i>
                              </div>
                          </div>

                          <div class="js-Projects">
                              <div class="imgProjects">
                                  <img src="./../../assets/img/CountryApp.png" alt="Logo Country App">
                              </div>
                              <div class="titleProjects">
                                  <a href="./Projects/TP-CountryApp/index.html" target="_blank">Coutry App</a>
                              </div>
                              <div class="logoProjects">
                                  <i class="fa-solid fa-earth-americas"></i>
                              </div>
                          </div>
                </div>
                <div>
                          <div class="js-Projects">
                              <div class="imgProjects">
                                  <img src="./../../assets/img/JokeApp.png" alt="Logo Joke App">
                              </div>
                              <div class="titleProjects">
                                  <a href="./Projects/joke-app/index.html" target="_blank">Joke App</a>
                              </div>
                              <div class="logoProjects">
                                  <i class="fa-solid fa-face-grin-tears"></i>
                              </div>
                          </div>

                          <div class="js-Projects">
                              <div class="imgProjects">
                                  <img src="./../../assets/img/YogaApp.png" alt="Logo Yoga App">
                              </div>
                              <div class="titleProjects">
                                  <a href="./Projects/yoga-routine/index.html" target="_blank">Yoga App</a>
                              </div>
                              <div class="logoProjects">
                                  <i class="fa-solid fa-tree"></i>
                              </div>
                          </div>

                          <div class="js-Projects">
                              <div class="imgProjects">
                                  <img src="./../../assets/img/QuizzApp.png" alt="Logo Quiz App">
                              </div>
                              <div class="titleProjects">
                                  <a href="./Projects/TP-QuizzApp/index.html" target="_blank">Quizz App</a>
                              </div>
                              <div class="logoProjects">
                                  <i class="fa-solid fa-circle-question"></i>
                              </div>
                          </div>

                          <div class="js-Projects">
                              <div class="imgProjects">
                                  <img src="./../../assets/img/FloppyBird.png" alt="Logo Floppy Bird">
                              </div>
                              <div class="titleProjects">
                                  <a href="./Projects/TP-FlappyBird/index.html" target="_blank">Jeu : Floppy Bird</a>
                              </div>
                              <div class="logoProjects">
                                  <i class="fa-solid fa-crow"></i>
                              </div>
                          </div>
                        </div> 
                </div>
            </div>`
    , js, css);
  }
};

page.css();

js.addEventListener('click', () => {
  page.js();
});

css.addEventListener('click', () => {
  page.css();
})