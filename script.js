'use strict';
var qwe

axios.get("https://swapi.dev/api/people/").then((response) => {
        qwe = response.data.results
})

new Vue ({
    el: "#container",
    data () {
    return {
      items: [],
      show: true, 
    }
  },

  mounted () {
    // simulate an async api call
    setTimeout(() => {
      this.items = Array.from(qwe)
    }, 500)
  },
})
