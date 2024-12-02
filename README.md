# P3.1 Maquetación con VIte y SASS

> S2DAW Diseño Web 

> Autor: Miguel Ipiña

## 1. Descripción

Esta practica trata de a partir de un diseño de Figma, maquetarlo en html utilizando Vite y SASS.


La practica se compone de:

1. La carpeta **/src**

    En ella encontramos los assets, styles, html y js.

    - Dentro de **/assets** hay:
        1. Imagenes utilizadads
        2. Fuentes importadas
        3. Iconos

    - En la carpeta **/styles** estan agrupados los archivos _.scss_

    - Vemos que hay 2 archivos _html_:

        1. **index.html**: Pagina principal
        2. **form.html**: Pagina de formulario

2. La carpeta **/docs**

    Esta carpeta se genera de forma automatica al ejecutar el comando "npm run build" en la consola.

    Para ello, el archivo _vit.config.js_ debe estar configurado de la siguiente manera.
    
    ```js
    import { defineConfig } from "vite";

    export default defineConfig({
    root: "./src", // Cambia la raíz del proyecto a "src"
    build: {
        outDir: "../docs", // Los archivos construidos irán a la carpeta "docs"
        rollupOptions: {
        input: {
            main: "./src/index.html", // Entrada principal
            page1: "./src/form.html", // Otra página
        },
        },
    },
    base: "./", // Asegura rutas relativas
    });
    ```



## 2. Enlaces de interés

[Enlace a la página desplegada en GitHub Pages](https://miguelipi.github.io/P3.1-DIW_SASS/)

[Enlace al diseño en Figma](https://www.figma.com/design/mBALLBcwp4GQcdjvxiHFBj/Untitled?node-id=7-46&t=KVFPIt7zVB02IQ0q-1)