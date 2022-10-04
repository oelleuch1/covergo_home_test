<template>
  <div class="base-radio-group" v-bind="$attrs">
    <div
        v-for="option in options"
        :key="option.id"
        class="base-radio-group__option"
        @click="$emit('input', option)"
    >
      <input :checked="isChecked(option)"
             :name="name"
             :value="option.value"
             class="base-radio-group__option__input"
             type="radio"
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
      type: [Object, String, Number]
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    isChecked(option) {
      return option === this.value || option.id === this.value.id
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