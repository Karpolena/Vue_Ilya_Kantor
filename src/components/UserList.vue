<template>
    <div>
        <table v-if="isVisible" class="table">
            <thead>
                <tr>
                    <th scope="col">Number</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Activity</th>
                    <th scope="col">Аvatar</th>
                    <th scope="col">Edite</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <th scope="row">{{index }}</th>
                    <td>{{user.name | uppercase}}</td>
                    <td>{{user.lastName | uppercase}}</td>
                    <td v-if="user.active">active</td>
                    <td v-else>no active</td>
                    <td class="avatar">
                        <img 
                            :src="user.avatar ? user.avatar : defaultAvatar"   
                            :alt= "user.alt">
                    </td>                    
                    <router-link tag="td" :to="'/user/' + user.id">
                        <a href="user.html" class="nav-link">
                            edite
                        </a>                        
                    </router-link>
                </tr>            
            </tbody>
            <tfoot> 
                <tr>                                
                    <td colspan="4">Total</td>
                    <td>{{ count }}</td>
                </tr> 
            </tfoot>
        </table>
        <button v-on:click="isVisible = !isVisible" type="button" class="btn btn-secondary">Show</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            defaultAvatar: "http://niiee.kg/wp-content/uploads/2017/05/avatar_male.png",
            isVisible: true
        }
    },    
    created() {     
        this.users = [
            {
                id: 1,
                name: 'Иван_1',
                lastName: 'Иванов_1',
                active: true,
                avatar: 'https://st2.depositphotos.com/8029582/11321/v/950/depositphotos_113218352-stock-illustration-satisfied-contented-seducer-and-happy.jpg',
                alt: 'Иванов И.И.'
            },
            {
                id: 2,
                name: 'Иван_2',
                lastName: 'Иванов_2',
                active: true,
                avatar: null
            },
            {
                id: 3,
                name: 'Иван_3',
                lastName: 'Иванов_3',
                active: true,
                avatar: 'https://st2.depositphotos.com/8029582/11321/v/950/depositphotos_113218352-stock-illustration-satisfied-contented-seducer-and-happy.jpg',
                alt: 'Иванов_3 И.И.'
            },
            {
                id: 4,
                name: 'Иван_4',
                lastName: 'Иванов_4',
                active: false,
                avatar: 'https://st2.depositphotos.com/8029582/11321/v/950/depositphotos_113218352-stock-illustration-satisfied-contented-seducer-and-happy.jpg',
                alt: 'Иванов_4 И.И.'
            },
            {
                id: 5,
                name: 'Иван_5',
                lastName: 'Иванов_5',
                active: true,
                avatar: null,
                alt: 'Иванов_5 И.И.'
            },
        ]
    },
    computed: {
                count() {
                    return this.users.length
                }
            },
            filters: {
                uppercase(value) {
                    return value.toUpperCase()
                }
            }
}
</script>
<style scoped>        
        .table {
            width: 80%;
            margin:  0px auto;
        }
        h1 {
            text-align: center;
            color: #888;
        }
        img {
            width: 30px;
            height: 30px;
        }   
        a {
            text-decoration: none;
        }
        
    </style>

