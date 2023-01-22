<template>
  <div class="con">
    <div v-for="item in items" :key="item.id">
      <TaskItem
        :id="item.id"
        :title="item.title"
        :complited="item.complited"
        @del="del"
        @done="done"
      />
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  props: ["items"],
  emits: ["done", "del"],
  components: {
    TaskItem,
  },
  methods: {
    del(id) {
      this.$emit("del", id);
    },
    done(id) {
      this.$emit("done", id);
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #666666;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #30c13f;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3bf04d;
}
.con {
  margin-top: 20px;
  overflow-y: scroll;
  height: 78vh;
  width: 102%;
}
</style>
