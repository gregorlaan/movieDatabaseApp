<template>
  <div>
    <h1 class="page-title">Latest Movies</h1>

    <div class="modal-window" v-if="modalBox">
        <h2>Modal</h2>
        <h2>{{ this.id }}</h2>
        <button @click="modalBox = false">Close</button>
        <ul id="videos">
            <li v-for="video in this.videos">
                <iframe :src="'https://www.youtube.com/embed/' + video.key" frameborder="0" allowfullscreen></iframe>
            </li>
        </ul>
    </div>

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
                <p>Relase date: {{ movie.release_date }}</p>
                <p><button @click="getVideos(movie.id)">videos</button></p>
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
    .modal-window {
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: scroll;
    }
    .modal-window ul#videos {
        list-style-type: none;
        margin: 10px;
        padding: 0;
    }
    .modal-window ul#videos li iframe {
        width: 100%;
        height: 500px;
    }

</style>

<script>
export default {

    data() {
        return {
            latestMovies: {},
            modalBox: false,
            videos: {}
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
        },
        getVideos: function(id) {
            console.log(id);
            this.id = id;
            this.$http({
            url: 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=a648c1e2f660e4faa6619ab957405dcf&language=en-US', 
            method: 'GET'
            }).then(function (response) {
                // success callback
                var data = response.body;
                var videos = data.results;
                this.processVideos(videos)
            }, function (response) {
                // error callback
            });
            this.modalBox =! this.modalBox;
        },
        processVideos: function(videos) {
            this.videos = videos;
            console.log(videos);
            console.log("last step");
        }
    }

}
</script>