<template>
  <div class="form">
    <input
      placeholder="Enter title"
      :value="title"
      @input="title = $event.target.value"
    />
    <Switch @on="on" />
    <div @click="create">
      <IconAdd />
    </div>
  </div>
</template>

<script>
import Switch from "@/UI/switch.vue";
import IconAdd from "@/assets/iconAdd.vue";
export default {
  components: { Switch, IconAdd },
  emits: ["create"],
  methods: {
    on() {
      this.complited = !this.complited;
    },
    create() {
      if (this.title) {
        const item = {
          id: Math.random(),
          title: this.title,
          complited: this.complited,
        };
        this.$emit("create", item);
        this.title = "";
      } else {
        alert("Enter the title");
      }
    },
  },
  data() {
    return {
      complited: false,
      title: "",
    };
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
.form {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  width: 450px;
  height: 90px;
  background-color: #666666;
  border-radius: 10px;
  margin-left: 20px;
  input {
    width: 220px;
    height: 40px;
    border-radius: 10px;
    background-color: #3f4041;
    outline: none;
    border-style: hidden;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 20px;
    color: white;
    font-family: "Poppins", sans-serif;
  }
}
</style>
