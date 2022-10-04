<template>
  <div v-bind="$attrs" class="base-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseCard"
}
</script>

<style lang="scss" scoped>
  .base-card {
    background: $grey;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
</style>