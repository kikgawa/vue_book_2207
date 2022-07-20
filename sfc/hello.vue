<template>
  <p class="message">メッセージ{{ meg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
    };
  },
};
</script>

<style scoped>
.message {
  color: #429999;
}
</style>
