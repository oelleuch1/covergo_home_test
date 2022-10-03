<template>
  <div class="base-radio-group">
    <div
        v-for="(option, index) in options"
        :key="index"
        class="base-radio-group__option"
        @click="$emit('input', option)"
    >
      <input class="base-radio-group__option__input"
             type="radio"
             :name="name"
             :value="option.value"
             :checked="isChecked(option)"
      />
      <label class="base-radio-group__option__label"> {{ option.label }} </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseRadioGroup",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: Object,
      default() {
        return {}
      }
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    isChecked(option) {
      return option.value === this.value.value && option.label === this.value.label
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-radio-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__option {

      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }

      &__input {
        width: 1rem;
        height: 1rem;
      }

      &__label {
        position: relative;
        top: -0.125rem;
      }

    }
  }
</style>