<template>
  <div>
    <div class="task-backlog">
      <div v-for="(backlog,index) in backlogs" :key="index">
        <div class="task-boards">
          {{backlog.name}}
          <add-tasks :backlogId="backlog.id"/>
          <div v-for="(task , index) in allTasks" :key="index">
            <task-board :task="task"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "taskBoards",
  data() {
    return {
      backlogs: [
        {
          id: "backlog1",
          name: "Backlog"
        },
        {
          id: "backlog2",
          name: "In Progress"
        },
        {
          id: "backlog3",
          name: "Test"
        },
        {
          id: "backlog4",
          name: "done"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["allTasks"])
  }
};
</script>

<style>
</style>
