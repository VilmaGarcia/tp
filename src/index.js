let homePage= require('./homePage');
let enCartelera=require('./enCartelera');
let masVotadas=require('./masVotadas');
let contacto=require('./contacto');
let sucursales=require('./sucursales');
let index ={
    homePage:function(res){
        res.write(homePage.titulo + '\n');
        res.write(homePage.cantidad()+'\n');
        let titulos=homePage.listarPelis();
        for(titulo of titulos){
            res.write(titulo)
            res.write('\n')
        }
        res.end()
    },
    
    enCartelera:function(res){
        res.write(enCartelera.titulo);
        res.write(enCartelera.cantidad()+'\n');
        let movies =enCartelera.listarPelis();
         movies.forEach(function(movie){
           res.write(movie.title)
             res.write('\n')
            res.write(movie.overview)
             res.write('\n')
    })
            res.end()

    },
    masVotadas: function(res){
        res.write(enCartelera.titulo);
        res.write(enCartelera.cantidad()+'\n');
        let movies =masVotadas.listarPelis();
         movies.filter(function(movies){
    res.write(movies.vote_average>=7)
         })
        

        res.end()
    },
    sucursales:function(res){
        let listaDeSalas=sucursales.returnListaSucursales();
        res.write(sucursales.titulo);
        res.write(sucursales.retornaTotalDeSalas());
        listaDeSalas.forEach(function(iterador)
        {
            res.write(`${iterador.name} ${iterador.address} ${iterador.description}`)

        });
      res.end()

    },
    contacto:function(){
        res.write(contacto.tituloContacto);
        res.write(contacto.contenido());

    },
    

    preguntasFrecuentes:function(){

    }
}
module.exports= index