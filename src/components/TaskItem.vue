<template>
  <div class="item">
    <div>
      <div>{{ title }}</div>
      <span>
        <div @click="done">
          <icon-done />
        </div>
        <div @click="del">
          <icon-delete />
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import iconDelete from "@/assets/iconDelete.vue";
import iconDone from "@/assets/iconDone.vue";
export default {
  components: { iconDelete, iconDone },
  props: ["id", "title", "complited"],
  emits: ["done", "del"],
  computed: {
    color() {
      if (this.complited) {
        return "#3F763E";
      } else return "#666666";
    },
  },
  methods: {
    done() {
      this.$emit("done", this.id);
    },
    del() {
      this.$emit("del", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,400;1,500;1,600&family=Poppins&family=Sevillana&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.item {
  padding: 20px;
  width: 900px;
  height: 90px;
  background-color: v-bind(color);
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 20px;
  margin-bottom: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      display: flex;
    }
  }
}
</style>
