<template>
  <div class="container">
    <inputForm @create="create" />
    <div v-if="loaded">
      <TaskList :items="items" @del="del" @done="done" />
    </div>
    <div v-if="!loaded">
      <iconLoading />
    </div>
  </div>
</template>

<script>
import iconLoading from "@/assets/iconLoading.vue";
import inputForm from "@/components/InputForm.vue";
import TaskList from "./components/TaskList.vue";
export default {
  components: { TaskList, inputForm, iconLoading },

  methods: {
    async getitems() {
      try {
        const data = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        ).then((response) => response.json());
        this.items = data;
        this.loaded = true;
      } catch {
        alert("Faild to load items");
      }
    },
    del(id) {
      this.items = this.items.filter((el) => el.id !== id);
    },
    done(id) {
      this.items.forEach((el) => {
        if (el.id === id) {
          el.complited = !el.complited;
        }
      });
    },
    create(item) {
      this.items.unshift(item);
    },
  },
  mounted() {
    this.getitems();
  },
  data() {
    return {
      loaded: false,
      items: [],
    };
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3f4041;
}
</style>
