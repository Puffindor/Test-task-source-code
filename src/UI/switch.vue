<template>
  <div class="switch">
    <div class="curcle" @click="toggle"></div>
  </div>
</template>

<script>
export default {
  emits: ["on"],
  data() {
    return {
      on: false,
    };
  },
  methods: {
    toggle() {
      this.on = !this.on;
      this.$emit("on");
    },
  },
  computed: {
    color() {
      if (this.on) {
        return "#30c13f";
      } else {
        return "#B41A1A";
      }
    },
    pos() {
      if (this.on) {
        return "0px";
      } else {
        return "40px";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.switch {
  width: 80px;
  height: 40px;
  background-color: #3f4041;
  border-radius: 20px;
  padding: 5px;
  .curcle {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: v-bind(color);
    cursor: pointer;
    transform: translateX(v-bind(pos));
    transition: 500ms;
  }
}
</style>
