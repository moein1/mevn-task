<template>
  <div class="task-board">
    <div>{{task.author}}</div>
    <div>{{task.priority}}</div>
  </div>
</template>

<script>
export default {
  name: "taskBoard",
  data() {
    return {
      test: "dfgdg"
    };
  },
  props: { task: Object }
};
</script>

<style>
</style>
