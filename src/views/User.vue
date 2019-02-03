<template>
    <div>
        <h1>user</h1>
        <user-form></user-form>
        <button 
            v-on:click="isVisible = !isVisible" 
            type="button" 
            class="btn btn-secondary"
            @click="goToUsers">Back</button>
    </div>    
</template>

<script>
import UserForm from '@/components/UserForm'
export default {
    components: {
        'user-form': UserForm
    },
    methods: {
       goToUsers() {
           this.$router.push('/users')
       } 
    }
    
}
</script>