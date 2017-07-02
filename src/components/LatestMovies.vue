<template>
  <div>
    <h1>Latest Movies</h1>

    <ul id="latest-movies">
        <li v-for="movie in latestMovies">
            <div class="img-container">
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
            </div>
            <div class="container">
                <h2>{{ movie.title }}</h2>
                <p>Rating: {{ movie.vote_average }} / 10</p>
                <p>Popularity: {{ movie.popularity }} / 100</p>
                <p>Description: {{ movie.overview }}</p>
            </div>
        </li>
    </ul>

  </div>
</template>

<style>
    ul#latest-movies {
        list-style-type: none;
        margin: 10px;
        padding: 0;
    }
    ul#latest-movies li {
        background: white;
        box-shadow: 0 0 5px #ddd;
        display: flex;
        margin: 25px;
    }
    .img-container {
        overflow: hidden;
        min-width: 200px;
        height: 300px;
    }
    ul#latest-movies li img {
        height: 300px;
        -webkit-transition: all 500ms ease;
        -moz-transition: all 500ms ease;
        -ms-transition: all 500ms ease;
        -o-transition: all 500ms ease;
        transition: all 500ms ease;
    }
    ul#latest-movies li img:hover {
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        -o-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);    
    }
    ul#latest-movies li .container {
        padding: 20px;
    }
</style>


<script>
export default {

    data() {
        return {
            latestMovies: {}
        }
    },
    mounted:function(){
        this.getData();
    },
    methods: {
        getData: function() {
            this.$http({
            url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=a648c1e2f660e4faa6619ab957405dcf', 
            method: 'GET'
            }).then(function (response) {
                // success callback
                var data = response.body;
                this.latestMovies = data.results;
            }, function (response) {
                // error callback
            });
        }
    }

}
</script>

