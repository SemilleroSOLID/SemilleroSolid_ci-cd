[![Jasmine Test](https://github.com/SemilleroSOLID/SemilleroSolid_ci-cd/actions/workflows/pipeline.yml/badge.svg)](https://github.com/SemilleroSOLID/SemilleroSolid_ci-cd/actions/workflows/pipeline.yml)
# Generador de aplicaciones Express

Este es un generador de aplicaciones Express para crear rápidamente aplicaciones web en Node.js.

## Instalación

Para utilizar este generador, asegúrate de tener instalado Node.js y npm en tu computadora. Luego, sigue los siguientes pasos:

1. Clona el repositorio o descarga el archivo ZIP.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

npm install

4. Una vez instaladas las dependencias, ejecuta el siguiente comando para iniciar el generador:

npm start


Esto iniciará el generador en el puerto 3000.

5. Documentacion adicional para Express.js

https://expressjs.com/en/starter/installing.html

## Uso

Una vez que hayas iniciado el generador, puedes acceder a él a través de tu navegador web en la dirección `http://localhost:3000`. Desde allí, puedes utilizar la interfaz de usuario para crear nuevas aplicaciones Express y personalizarlas según tus necesidades.



# Configuración suite depruebas

1. Verificar que jasmine se haya instalado satisfactoriamente en el archivo package.json

"scripts": { "test": "jasmine" }

2. instalar jasmime en caso de tener algun problema 

npm install --save-dev jasmine

3. puede seguir la documentacion de jasmine en el siguiente enlance enfocado en la seccion jasmine node js

https://jasmine.github.io/pages/getting_started.html

# Informacion adicional Husky

https://typicode.github.io/husky/#/?id=manual