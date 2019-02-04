<template>
    <div>
        <h1>UserForm</h1>
        <form>
            <div class="form-group">
                <label for="name">Имя</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    placeholder="Введите имя"
                    v-model.trim="name">
            </div>
            <div class="form-group">
                <label for="surname">Фамилия</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="surname" 
                    placeholder="Введите фамилию"
                    v-model.trim="surname">
            </div>
            <div class="custom-file">
                <input 
                    type="file" 
                    class="custom-file-input" 
                    id="avatar"
                    v-on:change="avatar" >
                <label class="custom-file-label" for="avatar">Аватар</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
            </div>
            <button class="btn btn-secondary" @click="addUser">Отправить</button>
        </form>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            // id: this.$router.currentRoute.params['id'],
            name: "",
            surname: "",
            avatar: ""
        }
    },
    methods: {
        addUser() {
            const user = {
                name: this.name,
                surname: this.surname,
                avatar: this.avatar
            }
            axios.post('http://localhost:3000/users', user)
                .then(response => {
                    console.log(response)
                    this.$router.push('/users')
                })
            this.name = "",
            this.surname = "",
            this.avatar = ""
        },
    }    
}
</script>

<style scoped>
        form {
            max-width: 400px;
            margin: 20px auto;
        }
        h1 {
            text-align: center;
            color: #999;
        }
        button {
            margin: 20px 0;
        }
    </style>

