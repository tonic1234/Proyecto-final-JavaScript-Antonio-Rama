// CONSTANTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Elementos del DOM

const START_BUTTON = document.querySelector(".playIcon");
const PLAY_GAME_BUTTON = document.querySelector(".startButton");
const EAT_BUTTON = document.querySelector("#eatButton");
const DRINK_BUTTON = document.querySelector("#waterButton");
const REST_BUTTON = document.querySelector("#restButton");
const GATHER_BUTTON = document.querySelector("#gatherButton");
const CRAFT_BUTTON = document.querySelector("#craftButton");
const WAITING_BUTTON = document.querySelector("#waitButton");
const INVENTORY_BUTTON = document.querySelector(".backPackIcon");
const INVENTORY_BAR = document.querySelector(".backPackContainers");
const RESTART_GAME_BUTTON = document.querySelector(".reStartButton");
const CLOSE_CRAFT_BUTTON = document.querySelector("#closeIconCraft");
const CLOSE_GATHER_BUTTON = document.querySelector("#closeIconRecollect");
const CLOSE_MESSAGE_BUTTON = document.querySelector("#closeIconMsg");
const CLOSE_INVENTORY_BUTTON = document.querySelector("#closeIconInventory");
const CLOSE_EAT_BUTTON = document.querySelector("#closeIconEat");
const CRAFT_TORCH_BUTTON = document.querySelector(".torchButton");
const CRAFT_WOOD_FIRE_BUTTON = document.querySelector(".woodFireButton");
const CRAFT_COLLECTOR_BUTTON = document.querySelector(".collectorButton");
const CRAFT_TRAMP_BUTTON = document.querySelector(".trapButton");
const MUTE_BUTTON = document.querySelector(".muteIcon");
const UNMUTE_BUTTON = document.querySelector(".unMuteIcon");
const FOOD_SLOT_1 = document.querySelector(".food_1");
const FOOD_SLOT_2 = document.querySelector(".food_2");
const FOOD_SLOT_3 = document.querySelector(".food_3");
const FOOD_SLOT_4 = document.querySelector(".food_4");
const FOOD_SLOT_5 = document.querySelector(".food_5");
const FOOD_SLOT_6 = document.querySelector(".food_6");
const FOOD_SLOT_7 = document.querySelector(".food_7");
const FOOD_SLOT_8 = document.querySelector(".food_8");
const COOK_SLOT_1 = document.querySelector(".cookIcon_1");
const COOK_SLOT_2 = document.querySelector(".cookIcon_2");
const COOK_SLOT_3 = document.querySelector(".cookIcon_3");
const COOK_SLOT_4 = document.querySelector(".cookIcon_4");
const COOK_SLOT_5 = document.querySelector(".cookIcon_5");
const COOK_SLOT_6 = document.querySelector(".cookIcon_6");
const COOK_SLOT_7 = document.querySelector(".cookIcon_7");
const COOK_SLOT_8 = document.querySelector(".cookIcon_8");
const DISCARD_COLLECT_SLOT_1 = document.querySelector("#RecolectSlotDiscard_1");
const DISCARD_COLLECT_SLOT_2 = document.querySelector("#RecolectSlotDiscard_2");
const DISCARD_COLLECT_SLOT_3 = document.querySelector("#RecolectSlotDiscard_3");
const DISCARD_INVENTORY_SLOT_1 = document.querySelector("#inventorySlotDiscard_1");
const DISCARD_INVENTORY_SLOT_2 = document.querySelector("#inventorySlotDiscard_2");
const DISCARD_INVENTORY_SLOT_3 = document.querySelector("#inventorySlotDiscard_3");
const DISCARD_INVENTORY_SLOT_4 = document.querySelector("#inventorySlotDiscard_4");
const DISCARD_INVENTORY_SLOT_5 = document.querySelector("#inventorySlotDiscard_5");
const DISCARD_INVENTORY_SLOT_6 = document.querySelector("#inventorySlotDiscard_6");
const DISCARD_INVENTORY_SLOT_7 = document.querySelector("#inventorySlotDiscard_7");
const DISCARD_INVENTORY_SLOT_8 = document.querySelector("#inventorySlotDiscard_8");

// Objetos de sonido

const CLICK_SOUND = new Audio("../audio/clickSound.mp3");
const CLOSE_INVENTORY_SOUND = new Audio("../audio/closeInventory.mp3");
const COOK_SOUND = new Audio("../audio/cookSound.mp3")
const CRAFT_COLLECTOR_SOUND = new Audio("../audio/craftRecolecctor.mp3")
const CRAFT_TORCH_SOUND = new Audio("../audio/craftTorch.mp3")
const CRAFT_TRAP_SOUND = new Audio("../audio/craftTrampSound.mp3")
const CRAFT_WOOD_FIRE_SOUND = new Audio("../audio/craftWoodFire.mp3")
const DAY_AMBIENT_SOUND = new Audio("../audio/daySound.mp3")
DAY_AMBIENT_SOUND.loop = true;
const DISCARD_SOUND = new Audio("../audio/discardSound.mp3")
const DRINK_WATER_SOUND = new Audio("../audio/drinkWater.mp3")
const EAT_SOUND = new Audio("../audio/eatSound.mp3")
const GATHER_SOUND = new Audio("../audio/gatherSound.mp3");
const NIGHT_AMBIENT_SOUND = new Audio("../audio/nigthSound.mp3")
NIGHT_AMBIENT_SOUND.loop = true;
const OPEN_INVENTORY_SOUND = new Audio("../audio/openInventory.mp3")
const RAIN_AMBIENT_SOUND = new Audio("../audio/rainSound.mp3")
RAIN_AMBIENT_SOUND.loop = true;
const REST_SOUND = new Audio("../audio/restSound.mp3")
const RETCHING_SOUND = new Audio("../audio/retchingSound.mp3")
const SICK_SOUND = new Audio("../audio/sickSound.mp3")
const STAR_GAME_SOUND = new Audio("../audio/starGameSound.mp3")
const WOOD_FIRE_AMBIENT_SOUND = new Audio("../audio/woodFireSound.mp3")
WOOD_FIRE_AMBIENT_SOUND.loop = true;
const EAT_MEAT_SOUND = new Audio("../audio/eatMeatSound.mp3")

// Objetos del juego.

const TRAMP = {
    name: "Trampa",
    img: '<img src="./imagenes/trampa.png" alt="">',
    type: "objeto"
}

const WATER_COLLECTOR = {
    name: "Recolector de Agua",
    img: '<img src="./imagenes/recolectordeagua.png" alt="">',
    type: "objeto"
}

const WOOD_FIRE = {
    name: "Fogata",
    img: '<img src="./imagenes/fuego.png" alt="">',
    type: "objeto"
}

const TORCH = {
    name: "Antorcha",
    img: '<img src="./imagenes/antorcha.png" alt="">',
    type: "objeto"
}

const LEAF = {
    name: "Hoja",
    img: '<img src="./imagenes/hoja.png" alt="">',
    type: "objeto"

}
const STICK = {
    name: "Palo",
    img: '<img src="./imagenes/palo.png" alt="">',
    type: "objeto"
}
const ROCK = {
    name: "Piedra",
    img: '<img src="./imagenes/piedra.png" alt="">',
    type: "objeto"
}
const EMPTY_BOTTLE = {
    name: "Botella Vacía",
    img: '<img src="./imagenes/botellavacia.png" alt="">',
    type: "objeto"
}
const FULL_BOTTLE = {
    name: "Botella con agua",
    img: '<img src="./imagenes/botellallena.png" alt="">',
    type: "objeto"
}
const FRUIT = {
    name: "Fruta Silvestre",
    nutritionalValue: -10,
    stateOfMind: 10,
    thirstValue: -10,
    img: '<img src="./imagenes/fruta.png" alt="">',
    type: "comida"
}
const WORM = {
    name: "Gusano",
    nutritionalValue: -5,
    stateOfMind: -30,
    thirstValue: 5,
    img: '<img src="./imagenes/gusano.png" alt="">',
    type: "comida"
}
const RABBIT = {
    name: "Conejo",
    nutritionalValue: -15,
    stateOfMind: -20,
    thirstValue: -5,
    img: '<img src="./imagenes/conejo.png" alt="">',
    type: "comida"

}
const RABBIT_MEAT = {
    name: "Carne Cocida de Conejo",
    nutritionalValue: -25,
    stateOfMind: 30,
    thirstValue: 10,
    img: '<img src="./imagenes/carnedeconejo.png" alt="">',
    type: "comida"
}

// Arreglo de los upgrades del camping.

const CAMPING_UPGRADE_WOOD_FIRE = [];
const CAMPING_UPGRADE_WATER_COLLECTOR = [];
const CAMPING_UPGRADE_TORCH = [];
const CAMPING_UPGRADE_TRAMP = [];

// Tiempos de los upgrades del camping.
// Cada vez que fabricamos un objeto queda registrada la hora en estos 
// arreglos, haciendo la diferencia entre estos datos y la cantidad de horas totales
// transcurridas, podemos determinar reglas para la duración de estos objetos.

const WOOD_FIRE_CREATION_TIME = [];
const WATER_COLLECTOR_CREATION_TIME = [];
const TORCH_CREATION_TIME = [];
const TRAMP_CREATION_TIME = [];

// Arreglo de enfermedades .

const VIRUS = [];
const VIRUS_INCUVATION = [];

// Arreglo de frases para la acción  de espera .

const WAITING_PHRASES = ["Te sientas bajo un árbol a esperar que pasen algunas horas",
    "Miras las hormigas llevar hojas a su hormiguero para entretenerte algunas horas",
    "Escuchas como los pájaros cantan y esperas que pase el tiempo",
    "Buscas formas en las nubes para pasar el rato",
    "Intentas buscar recuerdos en tu memoria y pasan algunas horas"];

// NO CONSTANTES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Stats del personaje

let health = 90;
let hunger = 30;
let thirst = 30;
let fatigue = 10;
let stateOfMind = 70;

let chanceOfGettingSick = 0;

// Variables de día y hora cada actividad lleva determinada cantidad de horas y se van sumando.

let hour = 12;
let minutes = 0;
let days = 0;
let totalHours = 0;
let totalMinutes = 0;
let weatherConditions = Math.ceil(Math.random() * 10);
let weatherModifier = 8

// Arreglo usado para la recolección y está formado por
// los elementos que se recolectan en cada iteración.

let collected = [];

let food = [];
let noFood = [];

// Arreglo de la mochila del jugador.

let BACKPACK = [];

// FUNCIONES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Función de la pantalla de carga
// Hacemos una pre carga  en segundo plano de todos las imágenes para evitar cargas posteriores
// que corten la inmersión de juego 

function loadScreen(img, time) {
    let loadScreen = document.querySelector(".loadScreen");
    setTimeout(function () {
        loadScreen.style.backgroundImage = img;
    }, time);
}

// Función de botón juego

function startGame() {
    CLICK_SOUND.play();
    document.querySelector(".preLoadBox").style.display = "none";
    document.querySelector(".playIcon").style.display = "none";
    document.querySelector(".nameBox").style.width = "330px";
    document.querySelector(".nameBox").style.height = "40px";
    document.querySelector(".nameBox").style.borderRadius = "20px";
    document.querySelector(".menuBox").style.width = "400px";
    document.querySelector(".menuBox").style.height = "200px";
    document.querySelector(".menuBox").style.borderRadius = "15px";
    document.querySelector(".startButton").style.display = "flex";
    document.querySelector(".menuText").style.display = "flex";
}

//Función de inicio del juego

function playGame() {

    document.querySelector(".gameBox").style.display = "flex"
    CLICK_SOUND.play();
    DAY_AMBIENT_SOUND.play();
    STAR_GAME_SOUND.play();

    if (weatherConditions >= weatherModifier) {
        RAIN_AMBIENT_SOUND.play();
    }

    let nameBox = document.querySelector(".nameBox")
    let jugador = nameBox.value;

    //Pedimos el nombre al jugador. Al ser un juego, uno de los objetivos tiene que ser
    //  facilitar la experiencia de entretenimiento, poniendo un verificador
    //  que impida ingresar si no se pone un nombre hacemos lo opuesto.
    //  Creo lo mejor es poner una regla que si el jugador no pone su nombre
    //  este se defina automáticamente como Player Unknown

    if (nameBox.value == "" || " ") {
        jugador = "Player Unknown";
    }
    else {
        jugador = nameBox.value;
    }

    const player = {
        nombre: jugador
    }

    //Se pide el nombre del jugador y luego se guarda en el local Storage para ser utilizado después

    localStorage.setItem(1, JSON.stringify(player));
    document.querySelector(".menuBg").classList.toggle("menuBgOut");

    setTimeout(function () {
        document.querySelector(".menuBg").style.display = "none";
    }, 2500);

    message(`Te despiertas en un bosque junto a una carpa, tienes un gran
dolor de cabeza y no recuerdas nada, absolutamente nada.
En el suelo, a pocos metros de ti, hay una mochila con 
algunas hojas de instrucciones para fabricar
elementos de supervivencia y un reloj que funciona pero tiene la correa rota.`)

    gameProgress();
}

// Función de re inicio del juego

function restartGameButton() {
    CLICK_SOUND.play();
    window.location.reload()
}

// Función de mensajes del juego

function message(messageText) {
    document.querySelector(".messageBox").style.display = "flex";
    document.querySelector(".message").innerHTML = messageText
}

function closeMenssageButton() {
    CLICK_SOUND.play();
    document.querySelector(".messageBox").style.display = "none"
}

// Función de iconos de upgrades

function upGrades() {

    // Reglas de duración de los upGrades del camping

    // La fogata dura 24 horas

    totalHours - WOOD_FIRE_CREATION_TIME[0] === 24 && CAMPING_UPGRADE_WOOD_FIRE.shift();

    // La antorcha dura 5 horas

    totalHours - TORCH_CREATION_TIME[0] === 5 && CAMPING_UPGRADE_TORCH.shift();

    // El recolector 72 horas

    totalHours - WATER_COLLECTOR_CREATION_TIME[0] === 72 && CAMPING_UPGRADE_WATER_COLLECTOR.shift();

    // La trampa 72 horas

    totalHours - TRAMP_CREATION_TIME[0] === 72 && CAMPING_UPGRADE_TRAMP.shift();

    // Reglas de horario para la fogata, piedras de la fogata y destello del fuego

    if (CAMPING_UPGRADE_WOOD_FIRE.length === 0) {
        document.querySelector(".campFire").style.display = "none";
        document.querySelector(".fireRock").style.display = "none";
        document.querySelector(".fireRockNigth").style.display = "none";
        document.querySelector(".fireglow").style.display = "none";
        WOOD_FIRE_AMBIENT_SOUND.pause()
    }

    else if (CAMPING_UPGRADE_WOOD_FIRE.length > 0 && hour >= 6 && hour < 20) {
        document.querySelector(".campFire").style.display = "flex";
        document.querySelector(".fireRock").style.display = "flex";
        document.querySelector(".fireRockNigth").style.display = "none";
        document.querySelector(".fireglow").style.display = "none";
        WOOD_FIRE_AMBIENT_SOUND.play()

    } else if (CAMPING_UPGRADE_WOOD_FIRE.length > 0 && hour >= 20 && hour <= 23 || hour >= 0 && hour <= 6) {
        document.querySelector(".campFire").style.display = "flex";
        document.querySelector(".fireRock").style.display = "none";
        document.querySelector(".fireRockNigth").style.display = "flex";
        document.querySelector(".fireglow").style.display = "flex"
        WOOD_FIRE_AMBIENT_SOUND.play()

    } else if (CAMPING_UPGRADE_WOOD_FIRE.length > 0 && hour >= 0 && hour <= 6) {
        document.querySelector(".campFire").style.display = "flex";
        document.querySelector(".fireRock").style.display = "none";
        document.querySelector(".fireRockNigth").style.display = "flex";
        document.querySelector(".fireglow").style.display = "flex";
        WOOD_FIRE_AMBIENT_SOUND.play()
    }
    else {
        document.querySelector(".campFire").style.display = "none";
        document.querySelector(".fireRock").style.display = "none";
        document.querySelector(".fireRockNigth").style.display = "none";
        document.querySelector(".fireglow").style.display = "none";
        WOOD_FIRE_AMBIENT_SOUND.pause()
    }

    CAMPING_UPGRADE_TORCH.length > 0 ? document.querySelector(".upgradeIconAntorcha").style.display = "flex" : document.querySelector(".upgradeIconAntorcha").style.display = "none";
    CAMPING_UPGRADE_TORCH.length > 0 ? document.querySelector(".upgradeIconAntorchaMobil").style.visibility = "visible" : document.querySelector(".upgradeIconAntorchaMobil").style.visibility = "hidden";
}

// Función de estados generales

function state() {

    if (health == 0) {

        document.querySelector(".statusBarHealth").style.width = "0px";
        document.querySelector(".loseBox").style.display = "flex";
        player()

        async function player() {

            // Recupero el string del localStorage y lo vuelvo a convertir en objeto con JSON.parse

            const objetoJson = JSON.parse(localStorage.getItem(1))
            let timeLive = totalHours + " horas"

            // Con un spread de objetos creo un nuevo objeto y le agrego tiempoSobrevivido

            const player = { ...objetoJson, tiempoSobrevivido: timeLive }
            document.querySelector(".timeScore").innerHTML = player.nombre + " has sobrevivido " + player.tiempoSobrevivido;

            let data = [{
                "Nombre": player.nombre,
                "Tiempo": totalHours
            }]

            // Usamos la API sheetLabs que nos permite tener bases de datos
            // que podemos estructurar desde google sheets y usar en nuestras aplicaciones web

            // Posteamos a una API de bases de datos nuestro objeto 

            await fetch("https://app.sheetlabs.com/2022/LostGame", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data)
            })

                .then(response => {
                    if (response.status === 204) {
                        console.log("POST Exitoso!");
                    } else {
                        throw new Error("Algo salio mal!");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });

            // Obtenemos todos los puntajes de la base de datos y los nombre de los jugadores 

            await fetch("https://app.sheetlabs.com/2022/LostGame", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);

                    // Ordenamos el arreglo data con una función que nos transforma los string de data.tiempo a números
                    // y nos permite ordenarlos de mayor a menos tiempo sobrevivido. 

                    data.sort(function (a, b) {
                        if (parseInt(a.Tiempo) > parseInt(b.Tiempo)) {
                            return -1;
                        }
                        if (parseInt(a.Tiempo) < parseInt(b.Tiempo)) {
                            return 1;
                        }
                        // a.tiempo es igual a b tiempo
                        else {
                            return 0;
                        }
                    });

                    // Imprimimos el array ordenado en la pantalla de juego perdido

                    let [score_1, score_2, score_3, score_4, score_5, score_6, score_7, score_8] = data

                    document.querySelector(".playerName_1").innerHTML = score_1.Nombre;
                    document.querySelector(".playerScore_1").innerHTML = score_1.Tiempo;
                    document.querySelector(".playerName_2").innerHTML = score_2.Nombre;
                    document.querySelector(".playerScore_2").innerHTML = score_2.Tiempo;
                    document.querySelector(".playerName_3").innerHTML = score_3.Nombre;
                    document.querySelector(".playerScore_3").innerHTML = score_3.Tiempo;
                    document.querySelector(".playerName_4").innerHTML = score_4.Nombre;
                    document.querySelector(".playerScore_4").innerHTML = score_4.Tiempo;
                    document.querySelector(".playerName_5").innerHTML = score_5.Nombre;
                    document.querySelector(".playerScore_5").innerHTML = score_5.Tiempo;
                    document.querySelector(".playerName_6").innerHTML = score_6.Nombre;
                    document.querySelector(".playerScore_6").innerHTML = score_6.Tiempo;
                    document.querySelector(".playerName_7").innerHTML = score_7.Nombre;
                    document.querySelector(".playerScore_7").innerHTML = score_7.Tiempo;
                    document.querySelector(".playerName_8").innerHTML = score_8.Nombre;
                    document.querySelector(".playerScore_8").innerHTML = score_8.Tiempo;

                })
                .catch((error) => {
                    console.error(error);
                });
        }

    }

    // Reglas de juego 

    hunger > 80 && (health -= 0.5);
    hunger < 30 && (health++);
    hunger < 10 && (health += 2);

    hunger > 100 && (hunger = 100);
    hunger < 0 && (hunger = 0);

    thirst > 80 && (health -= 0.5);
    thirst < 30 && (health++);
    thirst < 10 && (health += 2);

    thirst > 100 && (thirst = 100);
    thirst < 0 && (thirst = 0);

    fatigue > 100 && (fatigue = 100);
    fatigue < 0 && (fatigue = 0);

    CAMPING_UPGRADE_WOOD_FIRE.length > 0 && stateOfMind++;

    stateOfMind > 100 && (stateOfMind = 100);
    stateOfMind < 0 && (stateOfMind = 0);

    health > 100 && (health = 100);
    health < 0 && (health = 0)

}

// Función de duración del virus de gripe

function virusStatus() {

    VIRUS.length > 0 ? document.querySelector(".healtIconVirus").style.visibility = "visible" : document.querySelector(".healtIconVirus").style.visibility = "hidden"

    if (totalHours - VIRUS_INCUVATION[0] >= 24) {
        VIRUS.shift();
        message("Ya no estas enfermo");
        VIRUS_INCUVATION = [];
    }
}

// Función hace temblar los íconos de estado si un stats esta al límite 

function shakeIcon() {

    health < 20 ? document.querySelector(".StatusIconSalud").style.animationName = "heartbeat" : document.querySelector(".StatusIconSalud").style.animationName = "none";
    fatigue > 80 ? document.querySelector(".StatusIconCansancio").style.animationName = "heartbeat" : document.querySelector(".StatusIconCansancio").style.animationName = "none";
    hunger > 80 ? document.querySelector(".StatusIconHambre").style.animationName = "heartbeat" : document.querySelector(".StatusIconHambre").style.animationName = "none"
    thirst > 80 ? document.querySelector(".StatusIconSed").style.animationName = "heartbeat" : document.querySelector(".StatusIconSed").style.animationName = "none";
    stateOfMind < 20 ? document.querySelector(".StatusIconMoral").style.animationName = "heartbeat" : document.querySelector(".StatusIconMoral").style.animationName = "none";

}

// Función de efectos de estados. Si el jugador tiene mucho cansancio 
//la interfaz se pone borrosa y si tiene poca moral se desatura

function playerEffects() {

    if (fatigue > 70) {
        message("Estas muy cansado te estas quedando dormido");
        document.querySelector(".gameBox").style.filter = "blur(1px)"
    } else if (fatigue <= 70) {
        document.querySelector(".gameBox").style.filter = "blur(0px)"
    } else {
        message("Te quedaste dormido");
        rest()
    }

    if (stateOfMind <= 25) {
        document.querySelector("#body").style.filter = "grayscale(50%)"
    } else {
        document.querySelector("#body").style.filter = "grayscale(0%)"
    }

}

// Función de nubes

let cloudSpeed = 50

document.querySelector(".clouds").addEventListener("animationiteration", () => {
    cloudSpeed = 50
});

function clouds(speedIncrement) {
    document.querySelector(".clouds").style.translate = cloudSpeed + "px";
    cloudSpeed += speedIncrement
}

// Función de impresión de día hora y minutos

function clockPrint() {
    document.querySelector(".timeText").innerHTML = hour + ":" + minutes;
    if (minutes < 10) {
        document.querySelector(".timeText").innerHTML = hour + ":" + "0" + minutes;
    }
    document.querySelector(".dayText1").innerHTML = "Dia " + days;
}

// Funciones de reglas de horarios

function clock() {
    if (hour === 24) {
        hour = 0;
        days += 1;
        weatherConditions = Math.ceil(Math.random() * 10);
        clockPrint()
    } else if (hour > 24) {
        let saldoHoras = hour - 24;
        hour = saldoHoras;
        days += 1;
        weatherConditions = Math.ceil(Math.random() * 10);
        clockPrint()
    } else {
        clockPrint()
    }
    if (minutes === 60) {
        minutes = 0;
        hour += 1
        clockPrint()
    } else if (minutes > 60) {
        let difMinutos = minutes - 60
        minutes = difMinutos;
        clockPrint()
    }
    if (totalMinutes === 60) {
        totalMinutes = 0;
        totalHours += 1
        clockPrint()
    } else if (totalMinutes > 60) {
        let difMinutosTotales = totalMinutes - 60
        totalMinutes = difMinutosTotales;
        clockPrint()
    }
}

// Función del sol y la luna. Funciona con una imagen circular con el sol y la luna de lados opuestos
// que va girando 15 grados según pasa la hora

function sunMoon() {
    let hourDivition = (totalHours + 12) * 15;
    let hourV = -(hourDivition) + 180;
    document.querySelector(".sunMoonImg").style.transform = `rotate(${hourV}deg)`
}

// Función de clima

function climateChange() {

    if (weatherConditions >= weatherModifier) {

        document.querySelector(".rainContainer").style.visibility = "visible"
        RAIN_AMBIENT_SOUND.play();
        CAMPING_UPGRADE_WOOD_FIRE.shift()
        CAMPING_UPGRADE_TORCH.shift()
        document.querySelector(".fireflyes").style.display = "none"
        document.querySelector(".birdsContainer").display = "none"
        document.querySelector(".upgradeIconAntorcha").style.display = "none";
        document.querySelector(".upgradeIconAntorchaMobil").style.visibility = "hidden";

        // Si esta lloviendo y tenemos una botella vacía esta se eliminara del inventario
        // y se remplazara con una botella llena

        if (BACKPACK.some(element => element.name === "Botella Vacía") === true) {
            let index = BACKPACK.findIndex(element => element.name === "Botella Vacía")
            BACKPACK.splice(index, 1, FULL_BOTTLE);
        }

    }
    else {
        document.querySelector(".rainContainer").style.visibility = "hidden"
        RAIN_AMBIENT_SOUND.pause();
    }
}

// Función del cielo. cambia cielo y fondo según la hora y modifica el camping 

function dayNight() {
    if (hour >= 6 && hour < 17) {
        document.querySelector("body").style.backgroundImage = "url(../imagenes/cielodiabg.png)";
        document.querySelector(".sky").style.backgroundImage = "url(../imagenes/cielodia.png)";
        document.querySelector(".cloudOne").style.backgroundImage = "url(../imagenes/nubedia1.png)";
        document.querySelector(".cloudTwo").style.backgroundImage = "url(../imagenes/nubedia2.png)";
        document.querySelector(".cloudThree").style.backgroundImage = "url(../imagenes/nubedia3.png)";
        document.querySelector(".campingDia").style.visibility = "visible";
        document.querySelector(".campingNoche").style.visibility = "hidden";
        document.querySelector(".campingTarde").style.visibility = "hidden"
        document.querySelector(".fireflyes").style.visibility = "hidden"
        DAY_AMBIENT_SOUND.play();
        NIGHT_AMBIENT_SOUND.pause();
    } else if (hour >= 17 && hour <= 19) {
        document.querySelector("body").style.backgroundImage = "url(../imagenes/cielotardebg.png)";
        document.querySelector(".sky").style.backgroundImage = "url(../imagenes/cielotarde.png)";
        document.querySelector(".cloudOne").style.backgroundImage = "url(../imagenes/nubetarde1.png)";
        document.querySelector(".cloudTwo").style.backgroundImage = "url(../imagenes/nubetarde2.png)";
        document.querySelector(".cloudThree").style.backgroundImage = "url(../imagenes/nubetarde3.png)";
        document.querySelector(".campingDia").style.visibility = "hidden";
        document.querySelector(".campingNoche").style.visibility = "hidden";
        document.querySelector(".campingTarde").style.visibility = "visible"
        document.querySelector(".fireflyes").style.visibility = "hidden"
        DAY_AMBIENT_SOUND.play();
        NIGHT_AMBIENT_SOUND.pause();
    } else {
        document.querySelector("body").style.backgroundImage = "url(../imagenes/cielonochebg.png)";
        document.querySelector(".sky").style.backgroundImage = "url(../imagenes/cielonoche2.png)";
        document.querySelector(".cloudOne").style.backgroundImage = "url(../imagenes/nubenoche1.png)";
        document.querySelector(".cloudTwo").style.backgroundImage = "url(../imagenes/nubenoche2.png)";
        document.querySelector(".cloudThree").style.backgroundImage = "url(../imagenes/nubenoche3.png)";
        document.querySelector(".campingDia").style.visibility = "hidden";
        document.querySelector(".campingNoche").style.visibility = "visible";
        document.querySelector(".campingTarde").style.visibility = "hidden"
        document.querySelector(".fireflyes").style.visibility = "visible"
        DAY_AMBIENT_SOUND.pause();
        NIGHT_AMBIENT_SOUND.play();
    }

    // Función de pájaros en el cielo

    // Use la librería lottie que nos permite importar archivos de Adobe After Effect a JSON para
    // usarlos como animaciones de muy bajo peso y cálida vectorial.
    // https://airbnb.design/lottie/

    if (hour === 12 || hour === 18) {
        document.querySelector(".birdsContainer").innerHTML = `<lottie-player class="birds" src="./imagenes/birds.json" speed="1" autoplay>
        </lottie-player>`
    }
    else {
        document.querySelector(".birdsContainer").innerHTML = ""
    }
}

// Función de las barras de stats. Los parámetros son el selector de la barra en el DOM 
// y el stats es el número de la stat en el programa

function statusBar(querySelector, stats) {
    let barDivition = stats * 3.30;
    let statusV = barDivition + "px";
    document.querySelector(querySelector).style.width = statusV
}

// Funciones de imágenes de alimentos en la sección comer.

function foodImg() {

    let [food_1, food_2, food_3, food_4, food_5, food_6, food_7, food_8] = food

    function foodSlotImg(foodSlot, foodId, cookId) {

        if (foodSlot !== undefined) {
            document.querySelector(foodId).innerHTML = foodSlot.img;
            if (foodSlot === RABBIT && CAMPING_UPGRADE_WOOD_FIRE.length > 0) {
                document.querySelector(cookId).style.display = "flex";
            }
            else {
                document.querySelector(cookId).style.display = "none";
            }
        }
        else {
            document.querySelector(foodId).innerHTML = "";
        }
    }

    foodSlotImg(food_1, ".food_1", ".cookIcon_1")
    foodSlotImg(food_2, ".food_2", ".cookIcon_2")
    foodSlotImg(food_3, ".food_3", ".cookIcon_3")
    foodSlotImg(food_4, ".food_4", ".cookIcon_4")
    foodSlotImg(food_5, ".food_5", ".cookIcon_5")
    foodSlotImg(food_6, ".food_6", ".cookIcon_6")
    foodSlotImg(food_7, ".food_7", ".cookIcon_7")
    foodSlotImg(food_8, ".food_8", ".cookIcon_8")

}

let redDots = `<lottie-player src="./imagenes/redDots.json" speed="1" loop autoplay>
</lottie-player>`;

// Función de sonidos al comer distintos tipos de alimentos

function eatAudios(index) {
    if (food[index] === WORM) {
        RETCHING_SOUND.play();
    }
    else if (food[index] === FRUIT) {
        EAT_SOUND.play();
    }
    else if (food[index] === undefined) {
        EAT_SOUND.muted();
    }
    else {
        EAT_MEAT_SOUND.play();
    }
}

// Función de comer 

function eatSlots(i) {
    eatAudios(i)
    hunger += food[i].nutritionalValue;
    fatigue += 15;
    thirst += food[i].thirstValue;
    stateOfMind += food[i].stateOfMind;
    minutes += 30;
    totalMinutes += 30;
    food.splice(i, 1);
    clouds(50)
    foodImg()
    gameProgress()
}

// Función de cocinar

function cookSlots(i, htmlId) {
    COOK_SOUND.play();
    fatigue += 15;
    hour += 1;
    totalHours += 1;
    document.querySelector(htmlId).innerHTML = redDots;
    setTimeout(function () {
        food.splice(i, 1, RABBIT_MEAT);
        foodImg()
    }, 2500);
    clouds(80)
    gameProgress()
}

// Función de verificación de alimentos en el inventario de la acción comer

function eat() {
    if (hunger < 20) {

        message("No puedes comer, no tienes hambre")

    }
    else if (BACKPACK.some(element => element.type === "comida") === true) {

        food = BACKPACK.filter(element => element.type === "comida");
        noFood = BACKPACK.filter(element => element.type !== "comida");
        BACKPACK = [];
        Array.prototype.push.apply(BACKPACK, noFood);
        document.querySelector(".eatBox").style.display = "flex";

        foodImg()
    }
}

function eatButton() {
    CLICK_SOUND.play();
    document.querySelector(".eatBox").style.display = "flex";
    eat()
}
function closeEatButton() {
    CLICK_SOUND.play();
    document.querySelector(".eatBox").style.display = "none";
    Array.prototype.push.apply(BACKPACK, food);
    gameProgress()
}

// Función tomar agua

function drink() {

    BACKPACK.some(element => element === FULL_BOTTLE) || message("No tienes agua para beber")

    if (thirst <= 20) {
        message("No puedes beber agua, no tienes sed")
    }

    else if (BACKPACK.some(drink => drink.name === "Botella con agua") === true) {
        DRINK_WATER_SOUND.play();
        thirst -= 70;
        fatigue -= 15;
        stateOfMind += 10;
        minutes += 15;
        totalHours += 0;
        totalMinutes += 15;
        clouds(50)

        let filter = BACKPACK.filter(element => element !== FULL_BOTTLE);
        let noFilter = BACKPACK.filter(element => element === FULL_BOTTLE);

        // Vacío el arreglo mochila

        BACKPACK = [];

        // Pongo los elementos del arreglo filtrados dentro de arreglo mochila

        Array.prototype.push.apply(BACKPACK, filter);

        for (let index = 0; index < noFilter.length - 1; index++) {
            BACKPACK.push(FULL_BOTTLE)
        }

        gameProgress()
    }
}

function drinkButton() {
    CLICK_SOUND.play();
    drink()
}

// Función de la acción dormir .

function rest() {
    if (fatigue <= 30) {
        message("No puedes dormir, no tienes sueño")

    } else {
        REST_SOUND.play();

        //   El sistema de consumo de tiempo es iterante las horas se van sumando una a una
        //   lo que nos permite desencadenar eventos en cualquier horario del día

        for (let index = 0; index < 8; index++) {
            fatigue -= 7;
            hour += 1
            totalHours += 1;
            hunger += 1;
            thirst += 1;
            stateOfMind += 3;

        }
        clouds(90)
        gameProgress()
    }
}
function restButton() {
    CLICK_SOUND.play();
    rest()
}

// Función de la acción esperar.

function wait() {

    for (let index = 0; index < 3; index++) {
        hour += 1
        totalHours += 1;
        thirst += 3;
        fatigue += 3;
        hunger += 3;
        stateOfMind -= 3;
        clouds(10)
        gameProgress()
    }

    let frase = Math.ceil(Math.random() * WAITING_PHRASES.length - 1);
    message(WAITING_PHRASES[frase]);
}

function waitButton() {
    CLICK_SOUND.play();
    wait()
}

// Función de la acción inventario

function inventory() {

    function inventorySlots(i, idInv, idBack, idDisc) {

        if (BACKPACK[i] !== undefined) {
            document.querySelector(idInv).innerHTML = BACKPACK[i].img;
            document.querySelector(idBack).innerHTML = BACKPACK[i].img;
            document.querySelector(idDisc).style.display = "flex";
        } else {
            document.querySelector(idInv).innerHTML = "";
            document.querySelector(idBack).innerHTML = "";
            document.querySelector(idDisc).style.display = "none";
        }
    }

    inventorySlots(0, "#inventorySlot_1", "#backPackSlot_1", "#inventorySlotDiscard_1")
    inventorySlots(1, "#inventorySlot_2", "#backPackSlot_2", "#inventorySlotDiscard_2")
    inventorySlots(2, "#inventorySlot_3", "#backPackSlot_3", "#inventorySlotDiscard_3")
    inventorySlots(3, "#inventorySlot_4", "#backPackSlot_4", "#inventorySlotDiscard_4")
    inventorySlots(4, "#inventorySlot_5", "#backPackSlot_5", "#inventorySlotDiscard_5")
    inventorySlots(5, "#inventorySlot_6", "#backPackSlot_6", "#inventorySlotDiscard_6")
    inventorySlots(6, "#inventorySlot_7", "#backPackSlot_7", "#inventorySlotDiscard_7")
    inventorySlots(7, "#inventorySlot_8", "#backPackSlot_8", "#inventorySlotDiscard_8")

}

function inventoryButton() {
    OPEN_INVENTORY_SOUND.play();
    document.querySelector(".inventoryBox").style.display = "flex"
}
function closeInventoryButton() {
    CLOSE_INVENTORY_SOUND.play();
    document.querySelector(".inventoryBox").style.display = "none"
}

// Función para descartar elementos del inventario

function discardInventory(i, invSlotId) {
    DISCARD_SOUND.play();
    BACKPACK.splice(i, 1);
    document.querySelector(invSlotId).innerHTML = "";
    minutes += 5;
    totalMinutes += 5;
    gameProgress()
}

// La mochila tiene una capacidad de 8 slots
// Si esta capacidad se ve superada se elimina el primer índice del array

function inventoryLimit() {
    if (BACKPACK.length >= 9) {
        BACKPACK.shift()
        gameProgress()
    }
}

// Función de imágenes de elementos recolectados .

function recolectImg() {

    if (collected.length === 0) {
        document.querySelector(".recollect_1").innerHTML = "";
        document.querySelector(".recollect_2").innerHTML = "";
        document.querySelector(".recollect_3").innerHTML = "";
    }
    if (collected.length === 1) {
        document.querySelector(".recollect_1").innerHTML = collected[0].img;
        document.querySelector(".recollect_2").innerHTML = "";
        document.querySelector(".recollect_3").innerHTML = "";
    }
    if (collected.length === 2) {
        document.querySelector(".recollect_1").innerHTML = collected[0].img;
        document.querySelector(".recollect_2").innerHTML = collected[1].img;
        document.querySelector(".recollect_3").innerHTML = ""
    }
    if (collected.length === 3) {
        setTimeout(function () {
            document.querySelector(".recollect_1").innerHTML = collected[0].img;
        }, 700);
        setTimeout(function () {
            document.querySelector(".recollect_2").innerHTML = collected[1].img;
        }, 1400);
        setTimeout(function () {
            document.querySelector(".recollect_3").innerHTML = collected[2].img
        }, 2100);
    }
}

// Función de reglas de recolectar

function gather() {

    // Solo se puede recolectar si es de día o si no estamos enfermos

    if ((hour >= 6 && hour < 19) && VIRUS.length === 0 || CAMPING_UPGRADE_TORCH.length > 0 && VIRUS.length === 0) {
        GATHER_SOUND.play();

        collected = [];

        // Se recolectan 3 objetos al azar según chance

        for (let index = 0; index < 3; index++) {
            let chance = Math.ceil(Math.random() * 12);

            if (chance >= 0 && chance <= 2) {
                collected.push(LEAF)
            } else if (chance >= 3 && chance <= 5) {
                collected.push(STICK)
            } else if (chance >= 6 && chance <= 7) {
                collected.push(ROCK)
            } else if (chance >= 8 && chance <= 9) {
                collected.push(WORM)
            } else if (chance >= 10 && chance <= 11) {
                collected.push(FRUIT)
            } else if (chance == 12) {
                collected.push(EMPTY_BOTTLE)
            }

            if (stateOfMind < 25) {
                hour += 1
                totalHours += 1
                fatigue += 5;
                hunger += 5
                thirst += 5
                clouds(10)
                gameProgress()
            }
            else if (stateOfMind > 80) {
                hour += 1
                totalHours += 1
                fatigue += 2;
                hunger += 5
                thirst += 5
                clouds(10)
                gameProgress()
            }
            else {
                hour += 1
                totalHours += 1
                fatigue += 4;
                hunger += 5
                thirst += 5
                clouds(10)
                gameProgress()
            }

        }
        recolectImg()

        // Función de probabilidad de enfermar si salimos a recolectar con lluvia

        if (weatherConditions >= weatherModifier) {
            chanceOfGettingSick = Math.ceil(Math.random() * 10);
        }
        if (chanceOfGettingSick >= 9) {
            VIRUS.push("virus")
            VIRUS_INCUVATION.push(totalHours)
            SICK_SOUND.play();
            message(`Salir a recolectar con lluvia ha hecho que te resfríes
            no podrás salir a recolectar por 24 horas`)
        }
    }

    else if (VIRUS.length > 0) {
        document.querySelector(".recollectBox").style.display = "none";
        message("No puedes recolectar, estas enfermo.")
    }

    else {
        document.querySelector(".recollectBox").style.display = "none";
        message("Necesitas algo que te ilumine para poder recolectar de noche")
    }
}

function gatherButton() {
    document.querySelector(".recollectBox").style.display = "flex";
    gather()
}

// Función de descartar elementos recolectados.

function discardCollect(i) {
    DISCARD_SOUND.play();
    collected.splice(i, 1);
    recolectImg()
    gameProgress()
}

// Función de cerrar ventana de recolección.

function closeGather() {
    CLICK_SOUND.play();
    Array.prototype.push.apply(BACKPACK, collected);
    document.querySelector(".recollectBox").style.display = "none"
    let loadDots = `<lottie-player class="loadRecollect"
    src="./imagenes/loaddots.json" speed="1" loop autoplay></lottie-player>`
    document.querySelector(".recollect_1").innerHTML = loadDots;
    document.querySelector(".recollect_2").innerHTML = loadDots;
    document.querySelector(".recollect_3").innerHTML = loadDots;
    gameProgress()
}

// Función de la acción fabricar .
// depende nuestro estado de ánimo el costo de stats de fabricar elementos 

function craftWork(i) {
    for (let index = 0; index < i; index++) {
        if (stateOfMind < 25) {
            hour += 1;
            totalHours += 1;
            fatigue += 25;
            hunger += 15;
            thirst += 15;
            stateOfMind += 2
            clouds(10)

        }
        else if (stateOfMind > 80) {
            hour += 1;
            totalHours += 1;
            fatigue += 10;
            hunger += 5;
            thirst += 5;
            stateOfMind += 10
            clouds(10)

        }
        else {
            hour += 1;
            totalHours += 1;
            fatigue += 15;
            hunger += 10;
            thirst += 10;
            stateOfMind += 5
            clouds(10)

        }
    }
    gameProgress()
}

function craft() {

    // Clasificación de los materiales en el arreglo mochila

    let sticks = BACKPACK.filter(element => element === STICK);
    let leaves = BACKPACK.filter(element => element === LEAF);
    let rocks = BACKPACK.filter(element => element === ROCK);
    let bottles = BACKPACK.filter(element => element === EMPTY_BOTTLE)

    // Función de materiales y botones de fabricación
    // si contamos con los materiales necesarios se genera el botón y evento click

    // La función craft filter tiene más de 4 parámetros lo que no es una buena 
    // práctica de desarrollo. Hace el código menos legible, difícil de mantener y de escalar en caso 
    // de querer poner más elementos de fabricación en el futuro.
    // Lo mejor me pareció pasar objetos como parámetros a la función que contengan 
    // etiquetas más descriptivas y estén mejor separadas y ordenadas.

    const TORCH_CRAFT_PARAMS = {
        material_1: sticks, material_2: leaves, amountMaterial_1: 1, amountMaterial_2: 2, classSelector: ".torchButton",
        buttonSelector: CRAFT_TORCH_BUTTON, action: craftTorch
    }
    const COLLECTOR_CRAFT_PARAMS = {
        material_1: bottles, material_2: leaves, amountMaterial_1: 1, amountMaterial_2: 4, classSelector: ".collectorButton",
        buttonSelector: CRAFT_TORCH_BUTTON, action: craftCollector
    }
    const WOOD_FIRE_CRAFT_PARAMS = {
        material_1: sticks, material_2: rocks, amountMaterial_1: 3, amountMaterial_2: 2, classSelector: ".woodFireButton",
        buttonSelector: CRAFT_WOOD_FIRE_BUTTON, action: craftWoodFire
    }
    const TRAMP_CRAFT_PARAMS = {
        material_1: sticks, material_2: leaves, amountMaterial_1: 2, amountMaterial_2: 2, classSelector: ".trapButton",
        buttonSelector: CRAFT_TRAMP_BUTTON, action: craftTrap
    }

    function craftFilters(parameterObject) {
        if (parameterObject.material_1.length >= parameterObject.amountMaterial_1 && parameterObject.material_2.length >= parameterObject.amountMaterial_2) {
            document.querySelector(parameterObject.classSelector).style.filter = "grayscale(0%)";
            document.querySelector(parameterObject.classSelector).style.opacity = "100%";
            parameterObject.buttonSelector.addEventListener("click", parameterObject.action)
        } else {
            document.querySelector(parameterObject.classSelector).style.filter = "grayscale(100%)";
            document.querySelector(parameterObject.classSelector).style.opacity = "30%";
            parameterObject.buttonSelector.removeEventListener("click", parameterObject.action)
        }
    }

    craftFilters(TORCH_CRAFT_PARAMS)
    craftFilters(COLLECTOR_CRAFT_PARAMS)
    craftFilters(WOOD_FIRE_CRAFT_PARAMS)
    craftFilters(TRAMP_CRAFT_PARAMS)

    function craftCollector() {

        message("Fabricaste un recolector de agua, ahora recolectaras una botella llena de agua cada 24 horas");
        CRAFT_COLLECTOR_SOUND.play()
        WATER_COLLECTOR_CREATION_TIME.push(totalHours);
        CAMPING_UPGRADE_WATER_COLLECTOR.push(WATER_COLLECTOR);
        document.querySelector(".craftingBox").style.display = "none";

        // Filtramos los materiales necesarios para cada fabricación en arrays diferentes
        // y evaluamos si cumplen con las condiciones de cantidades necesarias

        const NO_FILTER = BACKPACK.filter(element => element !== LEAF && element !== EMPTY_BOTTLE);
        const LEAVES_FILTER = BACKPACK.filter(element => element === LEAF);
        const BOTTLE_FILTER = BACKPACK.filter(element => element === EMPTY_BOTTLE);

        // Vació el arreglo mochila

        BACKPACK = [];

        // Pongo los elementos del arreglo no filtrados dentro de arreglo mochila

        Array.prototype.push.apply(BACKPACK, NO_FILTER);

        // Devolvemos a mochila los materiales sobrantes en caso de haber

        for (let index = 0; index < LEAVES_FILTER.length - 4; index++) {
            BACKPACK.push(LEAF)
        }

        for (let index = 0; index < BOTTLE_FILTER.length - 1; index++) {
            BACKPACK.push(EMPTY_BOTTLE)
        }

        // Removemos las escuchas de eventos 

        CRAFT_WOOD_FIRE_BUTTON.removeEventListener("click", craftWoodFire);
        CRAFT_TORCH_BUTTON.removeEventListener("click", craftTorch);
        CRAFT_COLLECTOR_BUTTON.removeEventListener("click", craftCollector);
        CRAFT_TRAMP_BUTTON.removeEventListener("click", craftTrap);
        craftWork(2)
    }

    // Función de la antorcha

    function craftTorch() {

        message("Fabricaste una antorcha, ahora podrás recolectar incluso en la noche");
        CRAFT_TORCH_SOUND.play()
        TORCH_CREATION_TIME.push(totalHours);
        document.querySelector(".craftingBox").style.display = "none";
        CAMPING_UPGRADE_TORCH.push(TORCH);

        const NO_FILTER = BACKPACK.filter(element => element !== LEAF && element !== STICK);
        const LEAVES_FILTER = BACKPACK.filter(element => element === LEAF);
        const STICKS_FILTER = BACKPACK.filter(element => element === STICK);

        BACKPACK = [];

        Array.prototype.push.apply(BACKPACK, NO_FILTER);

        for (let index = 0; index < LEAVES_FILTER.length - 2; index++) {
            BACKPACK.push(LEAF)
        }
        for (let index = 0; index < STICKS_FILTER.length - 1; index++) {
            BACKPACK.push(STICK)
        }
        CRAFT_WOOD_FIRE_BUTTON.removeEventListener("click", craftWoodFire);
        CRAFT_TORCH_BUTTON.removeEventListener("click", craftTorch);
        CRAFT_COLLECTOR_BUTTON.removeEventListener("click", craftCollector);
        CRAFT_TRAMP_BUTTON.removeEventListener("click", craftTrap);

        craftWork(1)
    }

    // Función de la fogata

    function craftWoodFire() {

        message("Fabricaste una fogata, podrás cocinar carnes y subir tu estado de ánimo");
        CRAFT_WOOD_FIRE_SOUND.play()
        WOOD_FIRE_CREATION_TIME.push(totalHours);
        document.querySelector(".craftingBox").style.display = "none";
        CAMPING_UPGRADE_WOOD_FIRE.push(WOOD_FIRE);

        const NO_FILTER = BACKPACK.filter(element => element !== ROCK && element !== STICK);
        const ROCKS_FILTER = BACKPACK.filter(element => element === ROCK);
        const STICKS_FILTER = BACKPACK.filter(element => element === STICK);

        BACKPACK = [];

        Array.prototype.push.apply(BACKPACK, NO_FILTER);

        for (let index = 0; index < ROCKS_FILTER.length - 2; index++) {
            BACKPACK.push(ROCK)
        }

        for (let index = 0; index < STICKS_FILTER.length - 3; index++) {
            BACKPACK.push(STICK)
        }

        CRAFT_WOOD_FIRE_BUTTON.removeEventListener("click", craftWoodFire);
        CRAFT_TORCH_BUTTON.removeEventListener("click", craftTorch);
        CRAFT_COLLECTOR_BUTTON.removeEventListener("click", craftCollector);
        CRAFT_TRAMP_BUTTON.removeEventListener("click", craftTrap);

        craftWork(2)
    }

    // Función de la trampa

    function craftTrap() {

        message("Fabricaste una Trampa, ahora recolectarás un animal pequeño cada 24 horas");
        CRAFT_TRAP_SOUND.play()
        TRAMP_CREATION_TIME.push(totalHours);
        document.querySelector(".craftingBox").style.display = "none";
        CAMPING_UPGRADE_TRAMP.push(TRAMP);

        gameProgress()

        const NO_FILTER = BACKPACK.filter(element => element !== LEAF && element !== STICK);
        const LEAVES_FILTER = BACKPACK.filter(element => element === LEAF);
        const STICKS_FILTER = BACKPACK.filter(element => element === STICK);

        BACKPACK = [];

        Array.prototype.push.apply(BACKPACK, NO_FILTER);

        for (let index = 0; index < LEAVES_FILTER.length - 2; index++) {
            BACKPACK.push(LEAF)
        }

        for (let index = 0; index < STICKS_FILTER.length - 2; index++) {
            BACKPACK.push(STICK)
        }

        CRAFT_WOOD_FIRE_BUTTON.removeEventListener("click", craftWoodFire);
        CRAFT_TORCH_BUTTON.removeEventListener("click", craftTorch);
        CRAFT_COLLECTOR_BUTTON.removeEventListener("click", craftCollector);
        CRAFT_TRAMP_BUTTON.removeEventListener("click", craftTrap);
        craftWork(2)
    }
}

function craftButton() {
    CLICK_SOUND.play();
    document.querySelector(".craftingBox").style.display = "flex";
    craft()
}
function closeCraftButton() {
    CLICK_SOUND.play();
    document.querySelector(".craftingBox").style.display = "none";
}

// Función de recolección de la trampa 

function trapCollect() {

    let difTiempoTrampa = totalHours - TRAMP_CREATION_TIME[0]

    if (CAMPING_UPGRADE_TRAMP.length > 0 && difTiempoTrampa / 24 === 1) {
        BACKPACK.push(RABBIT);
    }
    else if (CAMPING_UPGRADE_TRAMP.length > 0 && difTiempoTrampa / 48 === 1) {
        BACKPACK.push(RABBIT);
    }
    else if (CAMPING_UPGRADE_TRAMP.length > 0 && difTiempoTrampa / 72 === 1) {
        BACKPACK.push(RABBIT);
    }
    else if (CAMPING_UPGRADE_TRAMP.length > 0) {
        document.querySelector(".upgradeIconTrampa").style.display = "flex";
        document.querySelector(".upgradeIconTrampaMobil").style.visibility = "visible";
    }
    else {
        document.querySelector(".upgradeIconTrampa").style.display = "none"
        document.querySelector(".upgradeIconTrampaMobil").style.visibility = "hidden"
    }
}

// Función de recolección del recolector de agua

function collectorCollect() {

    let difTiempoRecolector = totalHours - WATER_COLLECTOR_CREATION_TIME[0];

    if (CAMPING_UPGRADE_WATER_COLLECTOR.length > 0 && difTiempoRecolector / 24 === 1) {
        BACKPACK.push(FULL_BOTTLE);
    }
    else if (CAMPING_UPGRADE_WATER_COLLECTOR.length > 0 && difTiempoRecolector / 48 === 1) {
        BACKPACK.push(FULL_BOTTLE);
    }
    else if (CAMPING_UPGRADE_WATER_COLLECTOR.length > 0 && difTiempoRecolector / 72 === 1) {
        BACKPACK.push(FULL_BOTTLE);
    }
    else if (CAMPING_UPGRADE_WATER_COLLECTOR.length > 0) {
        document.querySelector(".upgradeIconRecolector").style.display = "flex";
        document.querySelector(".upgradeIconRecolectorMobil").style.visibility = "visible";
    }
    else {
        document.querySelector(".upgradeIconRecolector").style.display = "none"
        document.querySelector(".upgradeIconRecolectorMobil").style.visibility = "hidden"
    }
}

// Función del progreso del juego

function gameProgress() {
    clock();
    state();
    upGrades();
    shakeIcon();
    trapCollect();
    collectorCollect();
    statusBar(".statusBarHealth", health);
    statusBar(".statusBarFatigue", fatigue);
    statusBar(".statusBarHunger", hunger);
    statusBar(".statusBarThirst", thirst);
    statusBar(".statusBarMood", stateOfMind);
    playerEffects()
    virusStatus()
    inventory();
    inventoryLimit();
    climateChange();
    dayNight();
    sunMoon()
}

// funciones de audio

function mute(value, iconVisibility) {
    CLICK_SOUND.muted = value;
    CLOSE_INVENTORY_SOUND.muted = value;
    COOK_SOUND.muted = value;
    CRAFT_COLLECTOR_SOUND.muted = value;
    CRAFT_TORCH_SOUND.muted = value;
    CRAFT_TRAP_SOUND.muted = value;
    CRAFT_WOOD_FIRE_SOUND.muted = value;
    DAY_AMBIENT_SOUND.muted = value;
    DISCARD_SOUND.muted = value;
    DRINK_WATER_SOUND.muted = value;
    EAT_SOUND.muted = value;
    GATHER_SOUND.muted = value;
    NIGHT_AMBIENT_SOUND.muted = value;
    OPEN_INVENTORY_SOUND.muted = value;
    RAIN_AMBIENT_SOUND.muted = value;
    REST_SOUND.muted = value;
    RETCHING_SOUND.muted = value;
    SICK_SOUND.muted = value;
    STAR_GAME_SOUND.muted = value;
    WOOD_FIRE_AMBIENT_SOUND.muted = value;
    EAT_MEAT_SOUND.muted = value;
    document.querySelector(".muteIcon").style.visibility = iconVisibility
}

// INICIO DEL PROGRAMA>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Pantalla de carga

loadScreen("url(../imagenes/cielodiabg.png)", 2500);
loadScreen("url(../imagenes/cielotardebg.png)", 3500);
loadScreen("url(../imagenes/cielonochebg.png)", 4500);

setTimeout(() => {
    document.querySelector(".loadScreen").style.opacity = "0"
    document.querySelector(".menuBg").style.display = "flex"
}, 10500);

setTimeout(() => {
    document.querySelector(".loadScreen").style.display = "none"
}, 10500);

//Selección aleatoria del clima de inicio

weatherConditions = Math.ceil(Math.random() * 10);

//Botones de la interfaz

START_BUTTON.addEventListener("click", startGame);
PLAY_GAME_BUTTON.addEventListener("click", playGame);

EAT_BUTTON.addEventListener("click", eatButton);
CLOSE_EAT_BUTTON.addEventListener("click", closeEatButton);
WAITING_BUTTON.addEventListener("click", waitButton);
DRINK_BUTTON.addEventListener("click", drinkButton);
REST_BUTTON.addEventListener("click", restButton);
CRAFT_BUTTON.addEventListener("click", craftButton);
CLOSE_CRAFT_BUTTON.addEventListener("click", closeCraftButton);
INVENTORY_BUTTON.addEventListener("click", inventoryButton);
INVENTORY_BAR.addEventListener("click", inventoryButton);
CLOSE_MESSAGE_BUTTON.addEventListener("click", closeMenssageButton);
CLOSE_INVENTORY_BUTTON.addEventListener("click", closeInventoryButton);
GATHER_BUTTON.addEventListener("click", gatherButton);
CLOSE_GATHER_BUTTON.addEventListener("click", closeGather);

DISCARD_COLLECT_SLOT_1.addEventListener("click", () => { discardCollect(0) });
DISCARD_COLLECT_SLOT_2.addEventListener("click", () => { discardCollect(1) });
DISCARD_COLLECT_SLOT_3.addEventListener("click", () => { discardCollect(2) });

FOOD_SLOT_1.addEventListener("click", () => { eatSlots(0) });
FOOD_SLOT_2.addEventListener("click", () => { eatSlots(1) });
FOOD_SLOT_3.addEventListener("click", () => { eatSlots(2) });
FOOD_SLOT_4.addEventListener("click", () => { eatSlots(3) });
FOOD_SLOT_5.addEventListener("click", () => { eatSlots(4) });
FOOD_SLOT_6.addEventListener("click", () => { eatSlots(5) });
FOOD_SLOT_7.addEventListener("click", () => { eatSlots(6) });
FOOD_SLOT_8.addEventListener("click", () => { eatSlots(7) });

COOK_SLOT_1.addEventListener("click", () => { cookSlots(0, ".food_1") });
COOK_SLOT_2.addEventListener("click", () => { cookSlots(1, ".food_2") });
COOK_SLOT_3.addEventListener("click", () => { cookSlots(2, ".food_3") });
COOK_SLOT_4.addEventListener("click", () => { cookSlots(3, ".food_4") });
COOK_SLOT_5.addEventListener("click", () => { cookSlots(4, ".food_5") });
COOK_SLOT_6.addEventListener("click", () => { cookSlots(5, ".food_6") });
COOK_SLOT_7.addEventListener("click", () => { cookSlots(6, ".food_7") });
COOK_SLOT_8.addEventListener("click", () => { cookSlots(7, ".food_8") });

DISCARD_INVENTORY_SLOT_1.addEventListener("click", () => { discardInventory(0, "#inventorySlot_1") });
DISCARD_INVENTORY_SLOT_2.addEventListener("click", () => { discardInventory(1, "#inventorySlot_2") });
DISCARD_INVENTORY_SLOT_3.addEventListener("click", () => { discardInventory(2, "#inventorySlot_3") });
DISCARD_INVENTORY_SLOT_4.addEventListener("click", () => { discardInventory(3, "#inventorySlot_4") });
DISCARD_INVENTORY_SLOT_5.addEventListener("click", () => { discardInventory(4, "#inventorySlot_5") });
DISCARD_INVENTORY_SLOT_6.addEventListener("click", () => { discardInventory(5, "#inventorySlot_6") });
DISCARD_INVENTORY_SLOT_7.addEventListener("click", () => { discardInventory(6, "#inventorySlot_7") });
DISCARD_INVENTORY_SLOT_8.addEventListener("click", () => { discardInventory(7, "#inventorySlot_8") });

RESTART_GAME_BUTTON.addEventListener("click", restartGameButton);

MUTE_BUTTON.addEventListener("click", function () { mute(true, "hidden") });
UNMUTE_BUTTON.addEventListener("click", function () { mute(false, "visible") });