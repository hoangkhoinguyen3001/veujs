<template>
    <div id="admin">
        <div class="my-container">
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Detail</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in angencies" :key="item.index">
                <th scope="row">{{index}}</th>
                <td>{{item.form.name}}</td>
                <td>{{item.form.phone}}</td>
                <td>
                    <div class="d-flex justify-content-between">
                        <p>{{item.form.email}}</p>
                    </div>
                </td>
                <td><router-link :to="`/admin/${index}`">view more</router-link></td>
                </tr>
            </tbody>
            </table>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';

let db = firebase.database();

let bookRef = db.ref("angencies");
// bookRef.on('value', (snapshot) => console.log(snapshot.val()));


export default {
    name: 'admin',
    data() {
        return {
            angencies: {}
        }
    },
    mounted() {
        bookRef.on('value', (snapshot) => {this.angencies = (snapshot.val()); this.$store.state.client = this.angencies;});
    }
}
</script>