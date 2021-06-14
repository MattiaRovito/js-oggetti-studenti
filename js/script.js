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