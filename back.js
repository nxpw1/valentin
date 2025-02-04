document.addEventListener("DOMContentLoaded", function () {
    let noButtonState = 0;
    const noButtonTexts = [
        "¡Oh no! ¿Estás segura?",
        "¡¿Realmente estás segura?!",
        "Estás segura de verdad, ¿eh?",
        "¿Segura segura?",
        "¿Segurisima?",
        "Te doy cuchumil chocolatiños",
        "Di que sí, por favor",
        "Si dices que no, estaré muy triste",
        "Estaré muy triste",
        "Estaré muy muy muy triste",
        "Estaré muy muy muy muy triste",
        "Vale, ya dejaré de preguntar...",
        "Es broma, ¡POR FAVOR DI SÍ!",
        "Estaré muy muy muy muy muy triste",
        "Estás rompiendo mi corazón :(",
        "NO... ya di que sí",
        "Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii",
        "por favooooooor"
    ];

    const noButtonImages = [
        'img/no1.png', 'img/no2.png', 'img/no3.png', 'img/no4.png', 'img/no6.png', 'img/pregunta.png',
        'img/no1.png', 'img/no2.png', 'img/pregunta.png', 'img/no3.png', 'img/pregunta.png', 'img/no3.png',
        'img/pregunta.png', 'img/no3.png', 'img/no5.png', 'img/pregunta.png', 'img/no6.png',
    ];
    
    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');
    const propuestaImage = document.getElementById('propuestaImage');
    const messageContainer = document.getElementById('messageContainer');

    document.getElementById("startBtn").addEventListener("click", function () {
        document.getElementById("introScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        document.getElementById("mainContent").style.position = "fixed";
    });

    function resizeSiBtn(size) {
        siBtn.style.fontSize = `${size}px`;
        siBtn.style.padding = `${size * 0.7}px ${size}px`;
    }

    siBtn.addEventListener('click', function () {
        document.getElementById('question').style.display = 'none';
        siBtn.style.display = 'none';
        noBtn.style.display = 'none';
        document.body.classList.add('bg-green');
        propuestaImage.style.display = 'none';
        document.getElementById("mainContent").style.backgroundImage = "url(img/fondo.jpg)";
        
        // **🔹 Cambiar el fondo a una imagen**
        //document.getElementById('mainContent').style.backgroundImage = "url('C:\Users\Lenovo\Desktop\amor\valentin\img\fondo.jpg')";
        //document.body.style.backgroundSize = "cover";
        //document.body.style.backgroundPosition = "center";
       // document.body.style.backgroundRepeat = "no-repeat";

        messageContainer.style.display = 'block';
        messageContainer.innerHTML = 'Respuesta correcta <br> Se ha ganado cuchumil chocolatiños <br>';

        const img1 = document.createElement('img');
        img1.src = 'img/si3.png';
        img1.alt = 'Imagen 1 después de Sí';
        img1.style.maxWidth = '40%';
        img1.style.margin = '10px';

        const img2 = document.createElement('img');
        img2.src = 'img/si2.png';
        img2.alt = 'Imagen 2 después de Sí';
        img2.style.maxWidth = '40%';
        img2.style.margin = '10px';
        messageContainer.appendChild(img1);
        messageContainer.appendChild(img2);

        const followBtn = document.createElement('button');
        followBtn.innerHTML = "Da click si me aceptas una lamidita de nalga";
        followBtn.style.display = "block";
        followBtn.style.margin = "20px auto";
        followBtn.style.padding = "10px 20px";
        followBtn.style.fontSize = "18px";
        followBtn.style.backgroundColor = "#ff3e3e";
        followBtn.style.color = "white";
        followBtn.style.border = "none";
        followBtn.style.borderRadius = "5px";
        followBtn.style.cursor = "pointer";

        // Evento para el botón "Sigamos"
        followBtn.addEventListener("click", function () {
            mostrarImagenesProgresivamente();
        });

        messageContainer.appendChild(followBtn);
    });

 
    function mostrarImagenesProgresivamente() {
        messageContainer.innerHTML = ''; // Limpiar el contenedor
    
        // Crear un contenedor flexible para las imágenes
        const imgContainer = document.createElement('div');
        imgContainer.style.display = 'flex';
        imgContainer.style.flexWrap = 'wrap';
        imgContainer.style.justifyContent = 'center';
        imgContainer.style.alignItems = 'center';
        imgContainer.style.gap = '8px'; // Espacio entre imágenes
        imgContainer.style.width = '100vw';
        imgContainer.style.height = '100vh';
        imgContainer.style.position = 'relative'; // Para superponer el texto
        messageContainer.appendChild(imgContainer);
    
        // Crear el mensaje "TE AMO ❤️" y ocultarlo al inicio
        const mensaje = document.createElement('h1');
        mensaje.textContent = 'TE AMO ❤️';
        mensaje.style.position = 'absolute';
        mensaje.style.top = '50%';
        mensaje.style.left = '50%';
        mensaje.style.transform = 'translate(-50%, -50%)';
        mensaje.style.fontSize = '3rem';
        mensaje.style.fontWeight = 'bold';
        mensaje.style.color = 'white';
        mensaje.style.textShadow = '2px 2px 10px rgba(0, 0, 0, 0.5)';
        mensaje.style.background = 'rgba(0, 0, 0, 0.4)'; // Fondo semitransparente para mejor visibilidad
        mensaje.style.padding = '10px 20px';
        mensaje.style.borderRadius = '10px';
        mensaje.style.opacity = '0'; // Oculto al inicio
        mensaje.style.transition = 'opacity 1s ease-out';
        imgContainer.appendChild(mensaje);
    
        let index = 1;
        function mostrarSiguienteImagen() {
            if (index <= 10) {
                const img = document.createElement('img');
                img.src = `img/fondo${index}.jpg`;
                img.alt = `Fondo ${index}`;
    
                // **Mantener proporciones sin deformar**
                img.style.width = '18vw'; // Tamaño ajustado dinámicamente
                img.style.height = '18vw';
                img.style.objectFit = 'cover'; // Evita la deformación
                img.style.borderRadius = '10px';
                img.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    
                // Animación de aparición suave
                img.style.opacity = '0';
                img.style.transform = 'scale(0.8)';
                img.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    
                imgContainer.appendChild(img);
    
                // Hacer que la imagen aparezca suavemente
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 50);
    
                index++;
                setTimeout(mostrarSiguienteImagen, 300); // Muestra cada imagen con un intervalo de 0.3 segundos
            } else {
                // Mostrar "TE AMO" después de la última imagen
                setTimeout(() => {
                    mensaje.style.opacity = '1'; // Hacerlo visible
                }, 500);
            }
        }
        mostrarSiguienteImagen();
    }
    
    
    

    

    noBtn.addEventListener('click', function () {
        
        document.getElementById('mainContent').style.backgroundImage = 'none';
        document.getElementById('mainContent').style.backgroundColor = 'rgb(0, 0, 0)';

        if (noButtonState < noButtonTexts.length) {
            propuestaImage.style.display = 'none';
            noBtn.innerHTML = noButtonTexts[noButtonState];
            noBtn.style.backgroundColor = '#F1330A';

            const existingImg = document.getElementById('responseImage');
            if (existingImg) {
                existingImg.remove();
            }

            const imageUrl = noButtonImages[noButtonState];
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = "Imagen respuesta 'No'";
            imgElement.style.maxWidth = "50%";
            imgElement.style.maxHeight = "50%";
            imgElement.style.margin = "0";
            imgElement.style.padding = "0";
            imgElement.id = 'responseImage';
            messageContainer.appendChild(imgElement);

            resizeSiBtn(40 + noButtonState * 20);
            noButtonState++;
        } else {
            noButtonState = 0;
            noBtn.innerHTML = noButtonTexts[noButtonState];
            resizeSiBtn(40);
            const existingImg = document.getElementById('responseImage');
            if (existingImg) {
                existingImg.remove();
            }
            messageContainer.innerHTML = 'Vale, ya dejaré de preguntar...';
        }
    });
});
