<template>
    <div class="choose-products my-container">
        <h2>Choose your products</h2>
        <button v-on:click="showProtection();clickProtection()" class="btn-default mr-3">Protection</button>
        <button v-on:click="showInvestment();clickInvestment()" class="btn-default">Investment</button>
        <div class="w-100 choose-container">
            <div class="border-container products protection">
                <h2>Looking for protection?</h2>
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Hospitality</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickHospitality()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Accident</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickAccident()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Critical Illness</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickIllness()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Death Coverage</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickDeath()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Montage Insurance</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickInsurance()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Legacy Planning</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickPlanning()">Choose</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-container d-none products investment">
                <h2>Looking for investment?</h2>
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Force saving</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickSaving()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Retirement planning</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickRetirement()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>SRS (Tax Planning)</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickSrs()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Investment</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickInvest()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>Trust Fund Management</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickFund()">Choose</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-content">
                            <h4>LCPF Investment</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum at quibusdam qui delectus ducimus, quod rerum veritatis dolore ipsam voluptatum ipsa odit velit unde fugit, officia provident ratione voluptates.</p>
                            <button class="btn-no-border choose-pd" v-on:click="clickLcpf()">Choose</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dark-bg"></div>
            <div class="form-container">
                <h4></h4>
                <p>Send us your information</p>
                <div class="row form-content">
                    <div class="col-md-6">
                        <label for="email">Your Email</label>
                        <input required type="email" name="email" id="email">
                    </div>
                    <div class="col-md-6">
                        <label for="name">Your Name</label>
                        <input required type="text" name="name" id="name">
                    </div>
                    <p class="col-md-6"></p>
                    <p class="col-md-6"></p>
                    <div class="col-md-6">
                        <label for="phone">Your Phone</label>
                        <input required type="number" name="phone" id="phone">
                    </div>
                    <div class="col-md-6">
                        
                    </div>
                    <p class="col-md-6"></p>
                </div>
                <router-link :to="`/result?id=${this.$route.query.id}`">
                    <button class="submit">Submit</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import * as func from '../assets/js/js1/index.js';
import * as firebase from "firebase";

// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/database";

// var firebaseConfig = {
//   apiKey: "AIzaSyBP4q9jxovp7qg0gAk90PnDBRZwVQHu7-A",
//   authDomain: "financial-plan-91c82.firebaseapp.com",
//   databaseURL: "financial-plan-vue.firebaseio.com",
//   storageBucket: "financial-plan-91c82.appspot.com",
//   messagingSenderId: "262670588116",
// };

// let app = firebase.initializeApp(firebaseConfig);
let db = firebase.database();

let bookRef = db.ref("angencies");

// bookRef.on('value', (snapshot) => console.log(snapshot.val()));
// console.log(data())


export default {
    name: 'choose-products',
    data () {
        return {
            angencies: {}
        };
    },
    methods: {
        // doSomething: clickHospitality,
        showProtection: function ()  {
            const chooseContainer = document.getElementsByClassName("choose-container");
            const protectionHeight = document.getElementsByClassName("protection");
            protectionHeight[0].classList.remove("d-none");
            const investmentHeight = document.getElementsByClassName("investment");
            investmentHeight[0].classList.add("d-none");
            chooseContainer[0].style.display = "block";
        },
        showInvestment: function () {
            const chooseContainer = document.getElementsByClassName("choose-container");
            const protectionHeight = document.getElementsByClassName("protection");
            protectionHeight[0].classList.add("d-none");
            const investmentHeight = document.getElementsByClassName("investment");
            investmentHeight[0].style.display = 'block';
            investmentHeight[0].classList.remove("d-none");
            chooseContainer[0].style.display = "block";

        },
        popUp: func.popUpForm,
        clickProtection: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/protection`).update({
                    click: this.angencies[`user_${i}`].choose.protection.click + 1
                });
            }
        },
        clickInvestment: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/investment`).update({
                    click: this.angencies[`user_${i}`].choose.investment.click + 1
                });
            }
        },
        clickHospitality: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/protection/data`).update({
                    hospitality: this.angencies[`user_${i}`].choose.protection.data.hospitality + 1
                });
            }
        },
        clickAccident: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/protection/data`).update({
                    accident: this.angencies[`user_${i}`].choose.protection.data.accident + 1
                });
            }
        },
        clickIllness: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/protection/data`).update({
                    critical_illness: this.angencies[`user_${i}`].choose.protection.data.critical_illness + 1
                });
            }
        },
        clickDeath: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/protection/data`).update({
                    death_coverage: this.angencies[`user_${i}`].choose.protection.data.death_coverage + 1
                });
            }
        },
        clickInsurance: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/protection/data`).update({
                    montage_insurance: this.angencies[`user_${i}`].choose.protection.data.montage_insurance + 1
                });
            }
        },
        clickPlanning: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/protection/data`).update({
                    legacy_planning: this.angencies[`user_${i}`].choose.protection.data.legacy_planning + 1
                });
            }
        },
        clickSaving: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/investment/data`).update({
                    force_saving: this.angencies[`user_${i}`].choose.investment.data.force_saving + 1
                });
            }
        },
        clickRetirement: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/investment/data`).update({
                    retirement_planning: this.angencies[`user_${i}`].choose.investment.data.retirement_planning + 1
                });
            }
        },
        clickSrs: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/investment/data`).update({
                    srs: this.angencies[`user_${i}`].choose.investment.data.srs + 1
                });
            }
        },
        clickInvest: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/investment/data`).update({
                    investment: this.angencies[`user_${i}`].choose.investment.data.investment + 1
                });
            }
        },
        clickFund: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/investment/data`).update({
                    trust_fund_management: this.angencies[`user_${i}`].choose.investment.data.trust_fund_management + 1
                });
            }
        },
        clickLcpf: function() {
            let i = this.$route.query.id;
            if( i ) {
                bookRef.child(`user_${i}/choose/investment/data`).update({
                    lcpf_investment: this.angencies[`user_${i}`].choose.investment.data.lcpf_investment + 1
                });
            }
        },
        saveInfo: function() {
            let i = this.$route.query.id;
            if ( i ) {
                bookRef.child(`user_${i}/form`).update({
                    email: document.getElementsByName("email")[0].value,
                    name: document.getElementsByName("name")[0].value,
                    package: document.getElementsByClassName("form-container")[0].children[0].innerText,
                    phone: document.getElementsByName("phone")[0].value
                });
            }
        },
        landing: function() {
            console.log("aa");
            let i = this.$route.query.id;
            if ( i ) {
                bookRef.child(`user_${i}`).update({
                    'landing': this.angencies[`user_${i}`].landing + 1
                });
                bookRef.on('value', (snapshot) => console.log(snapshot.val()[`user_${i}`].landing));
            }
        }
    },
    mounted() {
        bookRef.on('value', (snapshot) => {
            this.angencies = (snapshot.val()); 
            this.$store.state.client = this.angencies;
        });
        const darkBg = document.getElementsByClassName("dark-bg"),
              formContainer = document.getElementsByClassName("form-container"),
              btn = document.getElementsByClassName("btn-no-border"),
              btnSubmit = document.getElementsByClassName("submit"),
              email = document.getElementsByName("email"),
              name = document.getElementsByName("name"),
              phone = document.getElementsByName("phone");
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", (e) => {
                func.popUpForm(e, darkBg[0], formContainer[0]);
            })
        }
        darkBg[0].addEventListener("click", () => {
            if (
                darkBg[0].className === "dark-bg active"
            ) {
                darkBg[0].className = darkBg[0].className.replace(" active", "");
                formContainer[0].className = formContainer[0].className.replace(" active", "");
            }
            const form = document.getElementsByClassName("form-content")[0];
            form.children[2].innerHTML = "";
            form.children[3].innerHTML = "";
            form.children[6].innerHTML = "";
            email[0].value = "";
            name[0].value = "";
            phone[0].value = "";
        })
        btnSubmit[0].addEventListener("click", (e) => {
            const text = document.getElementsByClassName("form-container")[0].children[0].innerHTML;
            const form = document.getElementsByClassName("form-content")[0];
            let obj = {
                email: '',
                name: '',
                phone: '',
                package: text
            };

            if (
                email[0].value === ""
            ) {
                form.children[2].innerHTML = "You must type email";
            } else { 
                form.children[2].innerHTML = "";
                obj.email = email[0].value;
            }
            if (
                name[0].value === ""
            ) {
                form.children[3].innerHTML = "You must type name";
            } else { 
                form.children[3].innerHTML = "";
                obj.name = name[0].value;
            }
            if (
                phone[0].value === ""
            ) {
                form.children[6].innerHTML = "You must type phone";
            } else { 
                form.children[6].innerHTML = ""; 
                obj.phone = phone[0].value;
            }

            
            if (
                email[0].value === "" ||
                name[0].value === "" ||
                phone[0].value === ""
            ) {
                e.preventDefault();
            } else {
                localStorage.setItem("data", JSON.stringify(obj));
                this.saveInfo();
            }
        })
    },
    watch: {
        
    }
}
</script>