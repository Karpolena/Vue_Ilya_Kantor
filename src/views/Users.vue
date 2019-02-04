<template>
    <div>
        <h1>Visitors</h1>
        <div v-if="!users.length">Loading...</div>
        <user-list v-else :users="users"></user-list>
    </div>    
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'
export default {
    components: {
        'user-list': UserList
    },
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.getUsers() 
    },
    methods: {
        getUsers() {
            axios.get('http://localhost:3000/users')
            .then(response => {
                this.users = response.data
            })
        }
    } 
}
</script>

