// obtención de valores

const bottom = document.querySelector('#submit');
let result = document.querySelector('#result');
let form = document.querySelector('#form');

// Declaración de valores

const send = () => {
    // Obtención de box con valores
    const telefono = 50250670910;

    const nombre = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const message = document.querySelector('#message').value;

    if(nombre === '' || phone === '' || message === ''){
        result.textContent = 'Porfavor llene los campos';
        result.classList.add('faild');
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
        });
        return false;
    }else{
        result.textContent = 'Enviado correctamente';
        result.classList.add('send');
        form.reset();

        const borrar = ()=>{
            result.textContent = ''
            result.classList.remove('send');
            result.classList.remove('faild');
        };

        setTimeout(borrar, 3000);
    };

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
    *_${nombre} desea reservar una cita_*%0A
    *_Nombre:_*%0A
    ${nombre}%0A%0A
    *Celular:*%0A
    ${phone}%0A%0A
    *Hora y Fecha de cita:*%0A
    ${message}%0A`;

    const enviado = ()=>{
        window.open(url);
    }
    
    setTimeout(enviado, 1000);

}

bottom.addEventListener('click', send);