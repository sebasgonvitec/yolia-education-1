/**
 * Restas
 */

// Aumentar preguntas a 25

 function createRestas(str){
    let figureIcon = document.createElement('p');
    let figures = [{"resta":"17 - 5", "res":"12"}, {"resta":"157 - 100", "res":"57"}, {"resta":"204 - 101", "res":"103"}, {"resta":"34 - 3", "res":"31"}, {"resta":"58 - 9", "res":"49"}, {"resta":"85 - 11", "res":"74"}, {"resta":"87 - 5", "res":"82"}, {"resta":"78 - 23", "res":"55"},
    {"resta":"85 - 13", "res":"72"}, {"resta":"20 - 18", "res":"2"}, {"resta":"99 - 19", "res":"80"}, {"resta":"44 - 4", "res":"40"}, {"resta":"51 - 3", "res":"48"}, {"resta":"22 - 9", "res":"13"}, {"resta":"67 - 25", "res":"42"}, {"resta":"84 - 15", "res":"69"}, {"resta":"18 - 5", "res":"13"}, {"resta":"33 - 4", "res":"29"}, {"resta":"56 - 16", "res":"40"}, {"resta":"81 - 4", "res":"77"}, {"resta":"90 - 13", "res":"77"}, {"resta":"75 - 21", "res":"54"}, {"resta":"68 - 15", "res":"53"}, {"resta":"12 - 9", "res":"3"}, {"resta":"34 - 8", "res":"26"}, {"resta":"5 - 2", "res":"3"},{"resta":"4 - 2", "res":"2"},{"resta":"10 - 8", "res":"2"},{"resta":"55 - 8", "res":"47"},{"resta":"30 - 8", "res":"22"},{"resta":"30 - 6", "res":"24"},{"resta":"12 - 8", "res":"4"}
    ];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].res;
    figureIcon.innerText = figures[rand].resta;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "40px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let RestasTemplate = document.createElement('template');
RestasTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div style="display: flex;flex-direction: row;justify-content: center;">
        <br>
        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class= 'tries'></p>
            <p>Resuelve la resta</p>
            <div class='items' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify'>Revisar</button>
            <p class="verify-icon"></p>
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class= 'tries2'></p>
            <p>Resuelve la resta</p>
            <div class='items2' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count2' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify2'>Revisar</button>
            <p class="verify-icon2"></p>
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class= 'tries3'></p>
            <p>Resuelve la resta</p>
            <div class='items3' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count3' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify3'>Revisar</button>
            <p class="verify-icon3"></p>
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class= 'tries4'></p>
            <p>Resuelve la resta</p>
            <div class='items4' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count4' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify4'>Revisar</button>
            <p class="verify-icon4"></p>
        </div>
    </div>

    <div style="margin: 2vh 4vw; max-width: 250px;">
        <button class='verify-T'>Revisar Preguntas</button>
        <p class="verify-icon-T"></p>
    </div>
`;

class Restas extends HTMLElement {
    items = []
    str = [""];
    str2 = [""];
    str3 = [""];
    str4 = [""];
    tries = 3;
    tries2 = 3;  
    tries3 = 3;  
    tries4 = 3; 

    constructor(){
        super();
        // Crear arreglo de longitud aleatoria (y llenar con 0's)
        let randomNumber = 1;
        this.items = new Array(randomNumber).fill(0);
        this.attachShadow({mode: 'open'});
    }
    // connected
    connectedCallback(){
        this.shadowRoot.append(RestasTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createRestas(this.str) );
            this.shadowRoot.querySelector('.items2').append( createRestas(this.str2) );
            this.shadowRoot.querySelector('.items3').append( createRestas(this.str3) );
            this.shadowRoot.querySelector('.items4').append( createRestas(this.str4) );
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
        this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
        this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
        this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;

        // Agregar un event listener a .verify que llame a verificar con el valor del input
        this.shadowRoot.querySelector('.verify').addEventListener('click', ()=>{
            let value = this.shadowRoot.querySelector('.count').value;
            if(this.tries<1){
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

        //Pregunta 2
        this.shadowRoot.querySelector('.verify2').addEventListener('click', ()=>{
            let value2 = this.shadowRoot.querySelector('.count2').value;
            if(this.tries2<1){
                this.tries2=0;
                this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
                window.alert("Se han acabado tus intentos");
            }
            
            else{
                if (this.verifyInput2(value2)){
                    this.shadowRoot.querySelector('.count2').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon2').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon2').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count2').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count2').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon2').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon2').style.color = "#ff0000";
                    this.tries2--;
                    this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2; 
                }
            } 
        })

        //Pregunta 3
        this.shadowRoot.querySelector('.verify3').addEventListener('click', ()=>{
            let value3 = this.shadowRoot.querySelector('.count3').value;
            if(this.tries3<1){
                this.tries3=0;
                this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
                window.alert("Se han acabado tus intentos");
            }
            
            else{
                if (this.verifyInput3(value3)){
                    this.shadowRoot.querySelector('.count3').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon3').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon3').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count3').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count3').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon3').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon3').style.color = "#ff0000";
                    this.tries3--;
                    this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3; 
                }
            } 
        })

        //Pregunta 4
        this.shadowRoot.querySelector('.verify4').addEventListener('click', ()=>{
            let value4 = this.shadowRoot.querySelector('.count4').value;
            if(this.tries4<1){
                this.tries4=0;
                this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;
                window.alert("Se han acabado tus intentos");
            }
            
            else{
                if (this.verifyInput4(value4)){
                    this.shadowRoot.querySelector('.count4').style.color = "#25ac8a"; 
                    this.shadowRoot.querySelector('.count4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon4').innerHTML = "Correcto!"; 
                    this.shadowRoot.querySelector('.verify-icon4').style.color = "#25ac8a"; 
                }
                else{
                    this.shadowRoot.querySelector('.count4').style.color = "#ff0000"; 
                    this.shadowRoot.querySelector('.count4').style.fontWeight = 'bold';
                    this.shadowRoot.querySelector('.verify-icon4').innerHTML = "Incorrecto"; 
                    this.shadowRoot.querySelector('.verify-icon4').style.color = "#ff0000";
                    this.tries4--;
                    this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4; 
                }
            } 
        })

        this.shadowRoot.querySelector('.verify-T').addEventListener('click', ()=>{
            const tries_total = [this.tries, this.tries2, this.tries3, this.tries4];
            const countOcurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1: a), 0);
            if(tries_total.find(element => element == 0) == undefined){
                this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 10";
                this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
            }else{
                if (countOcurrences(tries_total, 0) == 1){
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 7.5";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                }else if(countOcurrences(tries_total, 0) == 2){
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 5";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                }else if(countOcurrences(tries_total, 0) == 3){
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 2.5";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                }else{
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 0 :(";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                
                }
            }
        })

    }
    verifyInput(str){
        let strMod = str.toLowerCase();
        return strMod === this.str[0]
    }
    verifyInput2(str){
        let strMod2 = str.toLowerCase();
        return strMod2 === this.str2[0]
    }

    verifyInput3(str){
        let strMod3 = str.toLowerCase();
        return strMod3 === this.str3[0]
    }

    verifyInput4(str){
        let strMod4 = str.toLowerCase();
        return strMod4 === this.str4[0]
    }

}

customElements.define('ejercicio-restas', Restas);