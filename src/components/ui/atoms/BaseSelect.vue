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
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;

    &__title {
      font-weight: 700;
      font-size: 1.125rem;
      margin-bottom: 0.625rem;
      color: $black;
    }

    &__select {
      border-radius: 0.5rem;
      padding: 0.625rem;
      font-weight: 500;
      width: 100%;
    }

  }
</style>