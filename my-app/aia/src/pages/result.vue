<template>
    <div class="result" id="result">
        <Header />
        <main>
            <div class="result-container">
                <div class="row">
                    <div class="col-md-12">
                        <h4>Your Result</h4>
                    </div>
                    <div class="col-md-12">
                        <p>Name: &nbsp;&nbsp; <span>{{get_data().name}}</span>  </p>
                    </div>
                    <div class="col-md-12">
                        <p>Email: <span>{{get_data().email}}</span> </p>
                    </div>
                    <div class="col-md-12">
                        <p>Phone Number: <span>{{get_data().phone}}</span></p>
                    </div>
                    <div class="col-md-12">
                        <p>Package Selected: <span>{{get_data().package}}</span></p>
                    </div>
                    <div class="col-md-6">
                        <p>Result</p>
                        <p>1000 SGD</p>
                    </div>
                    <div class="col-md-6">
                        <p>Cost</p>
                        <p>1000 SGD</p>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer.vue';
export default {
    path: '/result',
    name: 'Result',
    components: {
        Header,
        Footer
    },
    methods: {
        get_data: function() {
            return JSON.parse(localStorage.getItem("data"));
        }
    }
}
</script>