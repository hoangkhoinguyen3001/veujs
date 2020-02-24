<template>
    <div id="admin">
        <div class="my-container">
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Protection</th>
                <th scope="col">Investment</th>
                <th scope="col">Last Access</th>
                <th scope="col">Information</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td> {{user.form.name ? user.form.name : 'Null'}} </td>
                <td>
                    <div class="text-left">
                        <p>User has click on Protection: {{user.choose.protection.click}} </p>
                        <p style="border-bottom: 1px solid black"></p>
                        <p>Accident Click: {{user.choose.protection.data.accident}}</p>
                        <p>Criticial Illness Click: {{user.choose.protection.data.critical_illness}}</p>
                        <p>Death coverage Click: {{user.choose.protection.data.accident}}</p>
                        <p>Hospitality Click: {{user.choose.protection.data.hospitality}}</p>
                        <p>Legacy Planning Click: {{user.choose.protection.data.legacy_planning}}</p>
                        <p>Montage Insurance Click: {{user.choose.protection.data.montage_insurance}}</p>
                    </div>
                </td>
                <td>
                    <div class="text-left">
                        <p>User has click on Investment: {{user.choose.investment.click}} </p>
                        <p style="border-bottom: 1px solid black"></p>
                        <p>Force Saving Click: {{user.choose.investment.data.force_saving}}</p>
                        <p>Investment Click: {{user.choose.investment.data.investment}}</p>
                        <p>LCPF Investment Click: {{user.choose.investment.data.lcpf_investment}}</p>
                        <p>Retirement Planning Click: {{user.choose.investment.data.retirement_planning}}</p>
                        <p>SRS(Tax Planning) Click: {{user.choose.investment.data.srs}}</p>
                        <p>Trust Fund Management Click: {{user.choose.investment.data.trust_fund_management}}</p>
                    </div>
                </td>
                <td>{{user.last.day}}/{{user.last.month}}/{{user.last.year}}</td>
                <td clas>
                    <p>Email: {{user.form.email ? user.form.email : 'Null'}}</p>
                    <p>Selected: {{user.form.package ? user.form.package : 'Null'}}</p>
                    <p>Phone: {{user.form.phone ? user.form.phone : 'Null'}}</p>
                </td>
                </tr>
                
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// console.log(window.location.href); 
export default {
    name: 'client',
    data() {
        return {
            client: {},
            user: {}
        }
    },
    mounted() {
         let user_id = (this.$route.path).replace("/admin/","");
        this.client = this.$store.state.client;
        this.user = this.client[`${user_id}`];
    }
}
</script>