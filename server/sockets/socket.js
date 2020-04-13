const { io } = require('../server');

const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    // Escuchar el cliente
    client.on('siguienteTicket', (data, callback) => {

        let siguienteTicket = ticketControl.siguiente();

        console.log(siguienteTicket);
        callback(siguienteTicket);

    });

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimosCuatro: ticketControl.getUltimosCuatro()
    });

    client.on('atenderTicket', (data, callback) => {

        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            })
        }
        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atenderTicket);
        client.broadcast.emit('estadoActual', {
            actual: ticketControl.getUltimoTicket(),
            ultimosCuatro: ticketControl.getUltimosCuatro()
        });

    })
});