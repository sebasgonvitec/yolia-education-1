/**
 * Multiplicaciones
 */


 function createMulti(str){
    let figureIcon = document.createElement('p');
    let figures = [{"multi":"7 x 8", "res":"56"}, {"multi":"8 x 5", "res":"40"}, {"multi":"8 x 9", "res":"72"}, {"multi":"9 x 3", "res":"27"}, {"multi":"3 x 8", "res":"24"}, {"multi":"9 x 0", "res":"0"}, {"multi":"9 x 9", "res":"81"}, {"multi":"8 x 7", "res":"56"}, 
    {"multi":"2 x 4", "res":"8"}, {"multi":"3 x 5", "res":"15"}, {"multi":"8 x 8", "res":"64"}, {"multi":"9 x 2", "res":"18"}];
    let limit = figures.length-1; 
    let rand = Math.round(Math.random() * limit);
    str[0] = figures[rand].res;
    figureIcon.innerText = figures[rand].multi;
    figureIcon.ariaHidden = true;
    figureIcon.style.margin = "0px 3px";
    figureIcon.style.fontSize = "40px";
    figureIcon.style.display = "inline";
    return figureIcon
}

let MultiTemplate = document.createElement('template');
MultiTemplate.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div style="display: flex;flex-direction: row;justify-content: center;">
        <br>
        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class= 'tries'></p>
            <p>Resuelve la multiplicación</p>
            <div class='items' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify'>Revisar</button>
            <p class="verify-icon"></p>
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class= 'tries2'></p>
            <p>Resuelve la multiplicación</p>
            <div class='items2' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count2' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify2'>Revisar</button>
            <p class="verify-icon2"></p>
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class= 'tries3'></p>
            <p>Resuelve la multiplicación</p>
            <div class='items3' style=" margin: 1vh 1vw;"></div> 
            <input type='text' class='count3' style=" margin: 1vh 1vw; color:#000;">
            <button class='verify3'>Revisar</button>
            <p class="verify-icon3"></p>
        </div>

        <div style="margin: 2vh 4vw; max-width: 250px;">
            <p class= 'tries4'></p>
            <p>Resuelve la multiplicación</p>
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

class Multi extends HTMLElement {
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
        this.shadowRoot.append(MultiTemplate.content.cloneNode(true))
        console.log(this.items)
        this.items.forEach(item => {
            this.shadowRoot.querySelector('.items').append( createMulti(this.str) );
            this.shadowRoot.querySelector('.items2').append( createMulti(this.str2) );
            this.shadowRoot.querySelector('.items3').append( createMulti(this.str3) );
            this.shadowRoot.querySelector('.items4').append( createMulti(this.str4) );
        })
        this.shadowRoot.querySelector('.tries').innerHTML = "Intentos Restantes: " + this.tries;
        this.shadowRoot.querySelector('.tries2').innerHTML = "Intentos Restantes: " + this.tries2;
        this.shadowRoot.querySelector('.tries3').innerHTML = "Intentos Restantes: " + this.tries3;
        this.shadowRoot.querySelector('.tries4').innerHTML = "Intentos Restantes: " + this.tries4;

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
                this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 100%";
                this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
            }else{
                if (countOcurrences(tries_total, 0) == 1){
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 75%";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                }else if(countOcurrences(tries_total, 0) == 2){
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 50%";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                }else if(countOcurrences(tries_total, 0) == 3){
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 25%";
                    this.shadowRoot.querySelector('.verify-icon-T').style.color = "#25ac8a";
                }else{
                    this.shadowRoot.querySelector('.verify-icon-T').innerHTML = "Calificación: 0% :(";
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

customElements.define('ejercicio-multi', Multi);