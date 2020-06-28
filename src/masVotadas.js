let fs=require('fs');
let masVotadas={
    bd: './data/movies.json',
    titulo: 'mas Votadas',
leerJSON: function() {
    let moviesJson = fs.readFileSync(this.bd, 'utf-8');
    let movies = JSON.parse(moviesJson);
    return movies
},
cantidad: function() {
    let movies=this.leerJSON();
    let masVotadas=movies.movies.filter(function(movie){
        return movie.vote_average >=7;
    })
    return masVotadas.length
},
listarPelis:function(){
    let bd= this.leerJSON();
    let movies= []
    bd.movies.forEach(function(movie){
        movies.push(movie)
    })
console.log(movies);
return movies
}

}
module.exports=masVotadas
