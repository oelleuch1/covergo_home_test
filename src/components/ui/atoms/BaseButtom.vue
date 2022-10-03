<template>
  <button v-on.native="$listeners"
          v-bind="$attrs"
          :disabled="disabled"
          class="base-button"
          :class="{ 'base-button__disabled': this.disabled }"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  border: 1px solid;
  border-radius: 0.5rem;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 100%;
  color: $white;
  cursor: pointer;
  background: blueviolet;

  &__disabled {
    background: $disabled;
    color: $black;
    border-color: $black;
  }
}
</style>