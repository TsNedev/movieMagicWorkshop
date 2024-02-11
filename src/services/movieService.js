
const movie = [{
    title: 'fsfes',
    genre: 'sefes',
    director: 'sefes',
    date: '2021',
    imageUrl: '',
    rating: '',
    description: ''
  }];

exports.getAll=()=>{

    return movie;
}
exports.create = (movieData)=>{
    movieData._id=movie[movie.length-1]._id+1;
    movie.push(movieData);

}

