<template>
  <div>

    <div class="modal-window" v-if="modalBox">
        <a class="close" @click="modalBox = false"><i class="fa fa-times" aria-hidden="true"></i></a>
        <ul id="videos">
            <li v-for="video in videos">
                <iframe :src="'https://www.youtube.com/embed/' + video.key" frameborder="0" allowfullscreen></iframe>
            </li>
            <li v-if="this.videos.length === 0" class="no-videos">
                No videos available
            </li>
        </ul>
    </div>

    <ul id="latest-movies">
        <li v-for="movie in latestMovies">
            <div class="img-container">
                <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" />
            </div>
            <div class="container">
                <h2>{{ movie.title }}</h2>
                <div class="movie-rating" title="Out of 10" v-html="movieRating(movie.vote_average)"></div>
                <p>Description: {{ movie.overview }}</p>
                <p>Relase date: {{ movie.release_date }}</p>
                <a class="open" @click="getVideos(movie.id)" title="Watch videos"><i class="fa fa-film" aria-hidden="true"></i></a>
            </div>
        </li>
        <ul id="pagination">
            <li @click="setPage(currentPage - 1)" v-if="this.currentPage > 1">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </li>
            <li v-for="page in pagination" @click="setPage(page)" :class="{current: currentPage === page}">
                {{ page }}
            </li>
            <li @click="setPage(currentPage + 1)" v-if="this.currentPage < this.pagination">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </li>
        </ul>
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
        padding: 0 20px;
    }
    .modal-window {
        position: fixed;
        background: rgba(0, 0, 0, 0.8);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
    }
    .modal-window ul#videos {
        list-style-type: none;
        margin: 0;
        padding: 10px;
        height: 100%;
    }
    .modal-window ul#videos li {
        text-align: center;
    }
    .modal-window ul#videos li iframe {
        width: 100%;
        max-width: 900px;
        height: 500px;
        padding: 20px;
    }
    .modal-window a.close {
        position: absolute;
        top: 30px;
        right: 30px;
        color: white;
        font-size: 32px;
        cursor: pointer;
    }
    .modal-window a.close:hover,
    a.open:hover {
        opacity: .8;
    }
    a.open {
        font-size: 30px;
        cursor: pointer;
    }
    .movie-rating i {
        font-size: 18px;
        color: #fc0;
    }
    ul#pagination {
        margin: 0;
        text-align: center;
    }
    ul#pagination li {
        display: inline-block;
        margin: 5px;
        padding: 5px 10px;
    }
    ul#pagination li.current {
        background: #fc0;
        color: white;
    }
    .no-videos {
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
  }
</style>

<script>
export default {

    data() {
        return {
            latestMovies: {},
            modalBox: false,
            videos: {},
            pagination: [],
            currentPage: 1
        }
    },
    mounted:function(){
        this.getData();
    },
    methods: {
        getData: function() {
            this.$http({
            url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=a648c1e2f660e4faa6619ab957405dcf&page=' + this.currentPage, 
            method: 'GET'
            }).then(function (response) {
                // success callback
                var data = response.body;
                this.pagination = data.total_pages;
                this.latestMovies = data.results;
            }, function (response) {
                // error callback
            });
        },
        getVideos: function(id) {
            this.$http({
            url: 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=a648c1e2f660e4faa6619ab957405dcf', 
            method: 'GET'
            }).then(function (response) {
                // success callback
                var data = response.body;
                var videos = data.results;
                this.videos = videos;
            }, function (response) {
                // error callback
            });
            this.modalBox =! this.modalBox;
        },
        movieRating: function(rating){
            if ( rating === 0 ) {
                return "No rating available";
            } else {
                return rating + ' <i class="fa fa-star" aria-hidden="true"></i>';
            }
        },
        setPage: function(currentPage) {
          this.currentPage = currentPage;
          this.getData();
        }
    }

}
</script>