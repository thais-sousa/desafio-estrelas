const totalDePersonagens = 671;
const quantidadePersonagens = 4;

consultarPersonagemAleatorio = () =>{
        
    var listaPersonagens = [];

    while (listaPersonagens.length < quantidadePersonagens) {

        let personagem = Math.floor(Math.random() * totalDePersonagens);

        if (listaPersonagens.indexOf(personagem) === -1) {
            listaPersonagens.push(personagem);
        }
    }

    return listaPersonagens; 
}



consultarPersonagens = () => {

    let personagensAleatorios = consultarPersonagemAleatorio();  
    return fetch(`https://rickandmortyapi.com/api/character/${personagensAleatorios}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {

        let sectionPersonagem = document.createElement('section');
        let componentePrincipal = document.getElementById('principal');
        componentePrincipal.appendChild(sectionPersonagem);
            

        data.forEach(element => {
            console.log(element.name);
                        
            let personagem = document.createElement("article");
            let imagemPersonagem = document.createElement("img");
            let nomePersonagem = document.createElement("p");
            
            personagem.appendChild(imagemPersonagem);
            personagem.appendChild(nomePersonagem);
            imagemPersonagem.setAttribute("src", element.image);
            nomePersonagem.appendChild(document.createTextNode(element.name));
            sectionPersonagem.appendChild(personagem);
           
        });        
    });
}


window.onload = function(){
    consultarPersonagens();
}

