<template>
  <div>
      Latest Movies
  </div>
</template>

<script>
export default {

    data() {
        return {

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
                console.log(data);

            }, function (response) {
                // error callback
            });
        }
    }

}
</script>

