<template>
    <div><h3>todos</h3>
        <div v-for="(todo,index) in allTodos" :key="index">{{todo.title}}</div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    name : "Todos",
    methods: {
         ...mapActions([
             'fetchTodos','fetchTasks'
         ])
    },
    computed: {
        ...mapGetters(['allTodos']
            
        )
    },
}
</script>

<style>

</style>
