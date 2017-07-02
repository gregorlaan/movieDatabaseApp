<template>
  <div>
    <h1>Latest Movies</h1>

    <ol>
        <li v-for="movie in latestMovies">
            {{ movie.title }}
        </li>
    </ol>

  </div>
</template>

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

