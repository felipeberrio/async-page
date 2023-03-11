## Ascyn Project

1. Iniciamos la configuración de nuestro proyecto con: npm init -y, así crear el package.json con la configuración del proyecto
2. Creamos nuestra nueva carpeta src para ubicar nuestro js.:  New-item "C:\Users\pipe_\Documents\GitHub\async-page\src" -Type Directory
3. Creamos main.js en assets\ y creamos index.html
4. Agregamos nuestro código de html
5. Para importar el api utilzamos rapidapi que conitene varias apis para utilizar: https://rapidapi.com/ytdlfree/api/youtube-v31/
    escogemos la de youtube y traemos la url del canal que queramos y la agregamos en los requerimientos de rapidapi y despues descargamos el código para js fetch

        ya no sale el Id del canal en la url si quieren encontrarlo abran el canal que quieren la lista
        le dan ctrl + u para que te muestre el codigo de fuente
        luego ctrl + f para buscar un text
        y en el cuadro para buscar pegan https://www.youtube.com/channel/
        ahi te va a salir una url con el id asi
        https://www.youtube.com/channel/[aca_va_el_id]

6. Corregimos el código con nuestro template de content, utilizamos funciones anonimas autoejecutadas
    https://developer.mozilla.org/es/docs/Glossary/IIFE


8. Publicamos nuestro proyecto en github con: npm install gh-pages --save-dev 
    en el package.json creamos el script:    "deploy": "gh-pages -d src"
    y corremos con npm run deploy