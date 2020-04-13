var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscitorio1 = $('#lblEscritorio1');
var lblEscitorio2 = $('#lblEscritorio2');
var lblEscitorio3 = $('#lblEscritorio3');
var lblEscitorio4 = $('#lblEscritorio4');

var lblEscritorios = [lblEscitorio1, lblEscitorio2, lblEscitorio3, lblEscitorio4];
var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4]


socket.on('estadoActual', function(data) {
    console.log(data);
    audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizarHTLM(data.ultimosCuatro);
})

function actualizarHTLM(ultimosCuatro) {
    for (var i = 0; i <= ultimosCuatro.length - 1; i++) {
        lblTickets[i].text('Ticket ' + ultimosCuatro[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimosCuatro[i].escritorio);
    }
}