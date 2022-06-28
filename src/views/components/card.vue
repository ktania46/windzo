<template>
    <div id="all-students">
        <h1 style="font-weight:bold; text-align: center;">List the students</h1>

        <p><router-link :to="{ name: 'create_student' }" class="btn btn-primary">create student</router-link></p>

        <div class="form-group">
            <input type="text" name="search" v-model="studentIdSearch" placeholder="Enter student ID" class="form-control" v-on:keyup="searchStudentId">
        </div>

        <table class="table table-hover" style=" overflow : hidden; border-radius : 5px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);">
            <thead>
            <tr style="color : white; font-weight : bold; background: #060411 ">
        <!--    <td>ID</td> -->
                <td>questionID</td>
                <td>question</td>
                <td>correct</td>
                <td>answer</td>
                <td>stdPoints</td>
                            </tr>
            </thead>

            <tbody>
                <tr v-for="question in questions" v-bind:key="student.id">
             
                    <td>{{ response.data['questions'][i-1]['questionID'] }}</td>
                    <td>{{ response.data['questions'][i-1]['question'] }}</td>
                    <td>{{ response.data['questions'][i-1]['correct'] }}</td>
                    <td>{{ response.data['questions'][i-1]['answer'] }}</td>
                    <td>{{ response.data['questions'][i-1]['stdPoints'] }}</td>
                    <td>
                        <router-link :to="{name: 'edit_questions', params: { id: response.data['questions'][i-1]['stdPoints'] }}" class="btn btn-outline-primary" style="">Modifier</router-link>
                        <router-link :to="{name: 'delete_questions', params: { id: response.data['questions'][i-1]['stdPoints'] }}" class="btn btn-outline-danger">Supprimer</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                products: [],
                originalProducts: [],
                productSearch: ''
            }
        },
        created: function()
        {
            this.fetchProductData();
        },
        methods: {
            fetchProductData: function()
            {//https://kaptan-app.herokuapp.com/ --- http://localhost:8080
                this.$http.get("http://127.0.0.1:8080/exams/product management/students/" +
        std +
        "/reports").then((response) => {
                    this.products = response.body;
                    this.originalProducts = this.products;
                }, (response) => {
                });
            },
            searchProducts: function()
            {
                if(this.productSearch == '')
                {
                    this.products = this.originalProducts;
                    return;
                }
                var searchedProducts = [];
                for(var i = 0; i < this.originalProducts.length; i++)
                {
                    var productName = this.originalProducts[i]['name'].toLowerCase();
                    if(productName.indexOf(this.productSearch.toLowerCase()) >= 0)
                    {
                        searchedProducts.push(this.originalProducts[i]);
                    }
                }
                this.products = searchedProducts;
            }
        }
    }
</script>