
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
    movie.push(movieData);

}

