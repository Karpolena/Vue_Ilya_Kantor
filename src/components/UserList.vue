<template>   
    <div>
        <h5>userList</h5>
        <table  class="table">
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
                    <td>{{user.name}}</td>
                    <td>{{user.surname}}</td>
                    <td v-if="user.active">active</td>
                    <td v-else>no active</td>
                    <td class="avatar">
                        <img 
                            :src="user.avatar ? user.avatar : defaultAvatar"   
                            :alt= " user.name + user.surname">
                    </td>                    
                    <router-link tag="td" :to="'/user/' + user.id">
                        <a  class="nav-link">
                            edite
                        </a>                        
                    </router-link>
                </tr>            
            </tbody>
            <tfoot> 
                <tr>                                
                    <td colspan="4">Total</td>
                    <td>{{ total }}</td>
                </tr> 
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            defaultAvatar: "http://niiee.kg/wp-content/uploads/2017/05/avatar_male.png"
        }
    }, 
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    computed: {
        total() {
            return this.users.length
        }
    }
}
</script>
<style scoped>        
        .table {
            width: 80%;
            margin:  0px auto;
        }
        h5 {
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

