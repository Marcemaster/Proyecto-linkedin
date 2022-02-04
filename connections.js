

// Ir a contactos

document.querySelector(".mn-community-summary__entity-info").click()

// Seleccionar perfiles de la lista de contactos

document.querySelectorAll(".mn-connection-card__details")[2].firstElementChild.click()


// Scroll al final de la página

window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });


// Click en see all skills

document.querySelectorAll(".pvs-list__footer-wrapper")[2].firstElementChild.click()


// Scroll al final de la lista (Hay que buscar la forma de hacerlo lentito o en algunos no se van a destapar, o bien repetir varias veces)

window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

// Buscar todos los botones de endorse

function validaSkills() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    let skills = 0
    var buttonList = document.getElementsByTagName("button");
    for (var i = 0, len = buttonList.length; i < len; i++)
    {
        if(buttonList[i].innerText === "Endorse"){
            buttonList[i].click()
            skills++
        }
    }
    console.log(`He terminado, validamos ${skills}`)
}


/* TO DO'S

- Encontrar botón "ver más skills" a través del texto del botón, como hicimos con Endorse
- Poner Delay al clickado de botones para no parecer un bot
-



*/

// Para volver a la página anterior
history.back()


