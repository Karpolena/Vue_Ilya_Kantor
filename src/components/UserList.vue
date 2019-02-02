<template>
    <div>
        <h1>Список сотрудников</h1>
        <table v-if="isVisible" class="table">
            <thead>
                <tr>
                    <th scope="col">Номер</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col">Активность</th>
                    <th scope="col">Аватар</th>
                    <th scope="col">Редактирование</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <th scope="row">{{index }}</th>
                    <td>{{user.name | uppercase}}</td>
                    <td>{{user.lastName | uppercase}}</td>
                    <td>{{active}}</td>
                    <td v-if="user.avatar"  class="avatar">
                        <img 
                            :src= "user.avatar"    
                            :alt= "user.alt">
                    </td>
                    <td v-else class="avatar">
                        <img 
                            :src= "defaultAvatar"    
                            :alt= "user.alt">
                    </td>
                    <td>
                        <a href="user.html" class="nav-link">
                            Редактировать
                        </a>
                        
                    </td>
                </tr>            
            </tbody>
            <tfoot> 
                <tr>                                
                    <td colspan="4">Всего</td>
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
            isVisible: true,
        }
    },    
    created() {     
        this.users = [
            {
                name: 'Иван_1',
                lastName: 'Иванов_1',
                avatar: 'https://st2.depositphotos.com/8029582/11321/v/950/depositphotos_113218352-stock-illustration-satisfied-contented-seducer-and-happy.jpg',
                alt: 'Иванов И.И.'
            },
            {
                name: 'Иван_2',
                lastName: 'Иванов_2',
                avatar: null
            },
            {
                name: 'Иван_3',
                lastName: 'Иванов_3',
                avatar: 'https://st2.depositphotos.com/8029582/11321/v/950/depositphotos_113218352-stock-illustration-satisfied-contented-seducer-and-happy.jpg',
                alt: 'Иванов_3 И.И.'
            },
            {
                name: 'Иван_4',
                lastName: 'Иванов_4',
                avatar: 'https://st2.depositphotos.com/8029582/11321/v/950/depositphotos_113218352-stock-illustration-satisfied-contented-seducer-and-happy.jpg',
                alt: 'Иванов_4 И.И.'
            },
            {
                name: 'Иван_5',
                lastName: 'Иванов_5',
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

