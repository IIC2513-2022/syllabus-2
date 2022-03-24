# Tema: Introducción al _template_ del curso

### Versión 1.0

Este material fue elaborada el 2021-2 por **Moisés Retamal**. Las dudas asociadas a la cápsula deben ser preguntadas en las issues, las cuales serán atendidas por el cuerpo de ayudantes. 

### Video
La cápsula contempla un video con explicaciones y ejemplos, disponible en [este enlace](https://drive.google.com/file/d/1gWmIK0MJz624SOWCv7_yMyu5NIXF2l1U/view?usp=sharing)

## ¿Por qué un _template_?

Armar toda la arquitectura del proyecto, tomando en cuenta que están recién aprendiendo, puede ser bastante difícil y los puede llevar a distintos errores que atrasarían su proceso de desarollo y aprendizaje. Así, utilizando el _template_ del curso, podrán enfocarse en aprender las herramientas que se les enseñarán durante el semestre

## _Yeoman_

_Yeoman_ es una herramienta que nos permitirá crear un proyecto a partir de una plantilla, en este caso, el _template_ del curso, ya que nos permite utilizar generadores los cuales agrupan un conjunto de acciones para facilitar el desarrollo de aplicaciones.

## _Set up_

A continuación, se detalla el paso a paso que se sigue en el video. Desde la instalación de los prerequisitos, hasta que se corre la aplicación. 

Para más información del template y sus archivos, se puede ir a la sección ["Comenzando el desarrollo"](https://github.com/IIC2513-2022/syllabus-2/wiki/Comenzando-el-desarrollo) de la wiki de este repositorio. 

### Paso 1: Instalar los prerequisitos

Debemos instalar una versión de _node_ 10.X o 12.X, _yarn_ y _yeoman_

Para esto podemos usar _npm_ o _yarn_.

```bash
nvm install 12
npm install -g yarn
npm install -g yo
```

### Paso 2: Instalar el generador

Ahora debemos instalar globalmente el generador del template del curso.

```bash
npm install -g @iic2513/generator-template
```

### Paso 3: Generar un nuevo proyecto

Ahora que instalamos _yeoman_ y el generador del _template_, podemos crear un nuevo proyecto. Para esto ejecuta:

```bash
yo @iic2513/template my-project
cd my-project
```

De esta manera se creará un nuevo proyecto llamado "my-project" y nos moveremos al directorio que lo contiene.

### Paso 4: Configurar la base de datos

Para configurar la base de datos a utilizar en el proyecto, vamos usar variables de entorno. A modo de ejemplo, vamos a usar _dotenv_, pero también puedes usar _direnv_. Para esto crea un archivo **.env** en la raíz de tu proyecto y define las siguientes variables:

```env
DB_NAME=mydatabase
DB_USERNAME=myuser
DB_PASSWORD=mypassword
```

Recuerda cambiar "mydatabase", "myuser" y "mypassword" por tus propias credenciales.

**IMPORTANTE**: agrega el archivo con tus variables de entorno a un **.gitignore**, para evitar que tus credenciales de tu base de datos y futuros secretos se suban a Github. Para simplificar esto, puedes cambiarle el nombre al archivo **.npmignore** a **.gitignore**.

Ahora agrega _dotenv_ a las dependencias del proyecto:

Usando _npm_:
```bash
npm install dotenv
```

Usando _yarn_:
```bash
yarn add dotenv
```

Abre el archivo **src/config/database.js** y en la primera linea escribe:

```js
require("dotenv").config();
```

### Paso 5: Corre tu aplicación

Para verificar que todo funciona, ejecuta:

Usando _npm_:
```bash
npm run start
```

Usando _yarn_:
```bash
yarn start
```

y abre (localhost:3000)[localhost:3000] en tu _browser_ favorito. Si ves "Hola mundo" significa que el _setup_ se hizo correctamente.

También puedes correr tu aplicación ejecutando:

Usando _npm_:
```bash
npm run dev
```

Usando _yarn_:
```bash
yarn dev
```

lo cual permitirá que, ante cambios realizados cuando tu _app_ esté corriendo, esta se actualice y así no tengas que bajar y volver a levantar tu servidor local cada vez que hagas una modificación en el código.

## Referencias

[Repositorio del _template_](https://github.com/IIC2513/generator-template/wiki/Generator-commands)

[Documentación de _yarn_](https://yarnpkg.com/)

[Documentación de _Yeoman_](https://yeoman.io/)
