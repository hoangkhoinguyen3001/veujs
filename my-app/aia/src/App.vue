<template>
  <div id="app" v-on:scroll="(e) => func(e)">
    <router-view></router-view>
    <div class="scrolltop"></div>
  </div>
</template>

<script>
import './assets/scss/style.scss';
import * as func from './assets/js/js1/index.js';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as firebase from "firebase";

// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyBP4q9jxovp7qg0gAk90PnDBRZwVQHu7-A",
  authDomain: "financial-plan-91c82.firebaseapp.com",
  databaseURL: "financial-plan-vue.firebaseio.com",
  storageBucket: "financial-plan-91c82.appspot.com",
  messagingSenderId: "262670588116",
};

let app = firebase.initializeApp(firebaseConfig);
let db = app.database();

let bookRef = db.ref("angencies");
// var data = {};
// bookRef.on('value', (snapshot) => console.log(snapshot.val()));
// console.log(data())

let d = new Date();

let d_day = d.getDay();
let d_month = d.getMonth();
let d_year = d.getFullYear();

let data = {
  last: {
    d_day,
    d_month,
    d_year
  }
}

localStorage.setItem("data", JSON.stringify(data));

export default {
  name: 'App',
  data() {
    return {
      angencies: {}
    }
  },
  methods: {
    func: func.headerScroll,
    landing: function() {
        console.log("aa");
        let i = this.$route.query.id;
        let db = JSON.parse(localStorage.data);
        if ( i ) {
            bookRef.child(`user_${i}`).update({
                last: {
                  day: db.last.d_day,
                  month: db.last.d_month,
                  year: db.last.d_year,
                }
            });
        }
    },
    randomId: function()  {
      if ( !this.$route.query.id ) {
        let id = Math.floor(Math.random()*10) + 1;
        this.$router.push({
          query: {
            id
          }
        })
      }
    }
  },
  mounted() {
    bookRef.on('value', (snapshot) => this.angencies = (snapshot.val()));
    document.getElementsByClassName("scrolltop")[0].addEventListener("click", function() {
      document.getElementById("app").scrollTo({top: 0, behavior: "smooth"});
    })
    window.onload = () => {
      if( this.$route.path ==="/" || this.$route.path === "/result" ) {
        this.randomId();
      }
      this.landing();
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Crimson+Text&display=swap');
</style>
