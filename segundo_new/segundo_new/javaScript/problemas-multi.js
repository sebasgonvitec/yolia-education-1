/**
 * Problemas Multiplicación
 */


 function createFigMulti(str){
    let figureIcon = document.createElement('img');
    let figures = [{"icon":"./images/prob-multi/6.png", "num":"12"}, {"icon":"./images/prob-multi/2.png", "num":"4"}, {"icon":"./images/prob-multi/3.png", "num":"6"}, {"icon":"./images/prob-multi/5.png", "num":"10"}, {"icon":"./images/prob-multi/8.png", "num":"16"}];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].num;
    figureIcon.src = figures[rand].icon;
    figureIcon.ariaHidden = true;
    figureIcon.style.maxWidth = "180px";
    figureIcon.style.maxHeight = "180px";
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "35px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let ProbMultiTemplate = document.createElement('template');
ProbMultiTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <p class= 'tries'></p>
        <p>Betsy va a la panaderia y compra el número de panes que se indica abajo. Si cada pan cuesta 2 pesos. ¿Cuánto dinero gastó Betsy?</p>
        <div class='items' style=" margin: 1vh 1vw;"></div>
        <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
        <button class='verify'>Revisar</button>
        <p class="verify-icon"></p>
    </div>
`;

class ProbMulti extends HTMLElement {
    items = [];
    str = [""];
    tries = 3;  
    constructor(){
        super();
        // Crear arreglo de longitud aleatoria (y llenar con 0's)
        let randomNumber = 1;
        this.items = new Array(randomNumber).fill(0);
        this.attachShadow({mode: 'open'});
    }
    // connected
    connectedCallback(){
        this.shadowRoot.append(ProbMultiTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createFigMulti(this.str) );
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count').value;
            if(this.tries<=1){
                this.tries=0;
                this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
                window.alert("Se han acabado tus intentos");
            }
            else{
                if (this.verifyInput(value)){
                    this.shadowRoot.querySelector('.count').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon').style.color = "#ff0000";
                    this.tries--;
                    this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries; 
                }
            } 
        })

    }
    verifyInput(str){
        let strMod = str.toLowerCase();
        return strMod === this.str[0]
    }

}

customElements.define('ejercicio-prob-multi', ProbMulti);