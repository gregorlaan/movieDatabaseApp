<template id="star-rating">
    <div class="star-rating">
        <label
                class="star-rating__star"
                v-for="rating in ratings"
                v-bind:class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}"
                v-on:mouseover="star_over(rating)"
                v-on:mouseout="star_out"
                v-on:click="set(rating)">
            <input
                    class="star-rating star-rating__checkbox"
                    type="radio"
                    v-bind:name="name"
                    v-bind:value="rating"
                    v-bind:required="required"
                    v-bind:id="$index+1"
                    v-bind:disabled="disabled"
                    v-model="value">
            ❤
        </label>
    </div>
</template>
<style>
    .star-rating__checkbox {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        height: 1px;
        width: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
    }
    .star-rating__star {
        display: inline-block;
        padding: 3px;
        vertical-align: middle;
        line-height: 1;
        font-size: 1.5em;
        color: #ABABAB;
        -webkit-transition: color;
        transition: color;
    }
    .star-rating__star:hover {
        cursor: pointer;
    }
    .star-rating__star.is-selected {
        color: #df470b;
    }
    .star-rating__star.is-disabled:hover {
        cursor: default;
    }
</style>
<script>
    Vue.component('my-rating-system', {
        template: 'rating-system',
        data() {
            return {
                temp_value: null,
                ratings: [1, 2, 3, 4, 5]
            };
        },
        props: {
            'name': String,
            'value': null,
            'id': String,
            'disabled': String,
            'required': Boolean
        },
        methods: {
            star_over: function(index) {
                if (this.disabled=="true") {
                    return;
                }
                this.temp_value = this.value;
                this.value = index;
            },
            star_out: function() {
                if (this.disabled=="true") {
                    return;
                }
                this.value = this.temp_value;
            },
            set: function(value) {
                if (this.disabled=="true") {
                    return;
                }
                this.temp_value = value;
                this.value = value;
            }
        }
    });

    new Vue({
        el: '#rating-system'
    })
</script>