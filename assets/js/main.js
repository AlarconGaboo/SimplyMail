document.getElementById('send-btn').addEventListener('click', () => {
    // Obtener valores de los campos
    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const from = document.getElementById('from').value;
    const ccEmails = Array.from(document.querySelectorAll('.cc')).map(input => input.value).filter(email => email !== '');

    // Mostrar información en consola
    console.log(`Para: ${to}`);
    console.log(`Título: ${subject}`);
    console.log(`Mensaje: ${message}`);
    console.log(`De: ${from}`);
    console.log('CC:');
    for (const email of ccEmails) {
        console.log(`- ${email}`);
    }

    // Mostrar mensaje de confirmación
    alert('¡Su correo se ha enviado!');
});
