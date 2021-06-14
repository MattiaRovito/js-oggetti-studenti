//Todo Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

//Todo Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

//Todo Creare un array di oggetti di studenti.

//Todo Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

//Todo Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.



var studente = 
{
    nome: 'Mattia',
    cognome: 'Rovito',
    età: '30'
};


for (var key in studente)
{
    console.log(studente[key]);
}

//TODO Fine prima parte dell'esercizio

//TODO Inizio seconda parte dell'esercizio

var studenti = 
[
    {
        nome: 'Mario',
        cognome: 'Rossi',
        età: '25'
    },
    {
        nome: 'Michele',
        cognome: 'Verdi',
        età: '34'
    },
    {
        nome: 'Marco',
        cognome: 'Neri',
        età: '22'
    },
    {
        nome: 'Federica',
        cognome: 'Gialli',
        età: '27'
    }
];


//* Stampiamo il nome, cognome e età di tutti gli studenti
for (var i = 0; i < studenti.length; i++){
    document.getElementById('vecchi-studenti').innerHTML = 'La classe è composta dai seguenti studenti:'
    document.getElementById('documenti').innerHTML += studenti[i].nome + ' ' + studenti[i].cognome + ' che ha ' + studenti[i].età + ' anni' + '<br>';
}


//* Creo un nuovo oggetto vuoto che pusherò all'interno dell'array precedente
var nuovoStudente={};


//* Pushiamo l'oggetto all'interno dell'array
studenti.push(nuovoStudente);
console.log(studenti);


// *Chiedere al nuovo studente nome, cognome, età
var nomeStudente = prompt("Qual è il tuo nome?");
var cognomeStudente = prompt("Qual è il tuo cognome?");

while(isNaN(etaStudente))
var etaStudente = parseInt(prompt("Qual è la tua età?"));

//* Li pusho all'interno dell'oggetto vuoto nuovoStudente

nuovoStudente.nome = nomeStudente;
nuovoStudente.cognome = cognomeStudente;
nuovoStudente.età = etaStudente;

// console.log(nuovoStudente);

//* Stampiamo il nuovo studente
document.getElementById('new').innerHTML = 'Diamo il benvenuto al nuovo studente ' + studenti[4].nome + ' ' + studenti[4].cognome + ' che ha la bellezza di ' + studenti[4].età + ' anni!';