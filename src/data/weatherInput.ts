import axios from "axios";
import { Vue } from "vue-class-component";

new Vue({
  el: '#app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f9bab0172e3203cf909c87cac7ce566f')
      .then(response => (this.info = response))
  }
})