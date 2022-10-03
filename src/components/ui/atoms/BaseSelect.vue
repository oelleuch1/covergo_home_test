<template>
  <div class="base-select">
    <div class="base-select__title"> {{ label }} </div>
    <select v-model="selectedOption" class="base-select__select">
      <option v-for="(option, index) in options" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectedOption: null
    }
  },
  watch: {
    selectedOption(changedValue) {
      this.$emit('input', changedValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  .base-select {

    &__title {
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }

    &__select {
      border-radius: 0.5rem;
      padding: 0.5rem;
      font-weight: 500;
    }

  }
</style>