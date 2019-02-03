<template>
    <div>
        <h1>Visitors</h1>
        <user-list></user-list>
    </div>    
</template>

<script>
import UserList from '@/components/UserList'
export default {
    components: {
        'user-list': UserList
    }    
}
</script>

