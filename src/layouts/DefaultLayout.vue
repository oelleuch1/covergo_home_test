<template>
  <div class="default-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>