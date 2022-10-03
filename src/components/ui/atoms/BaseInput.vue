<template>
  <div class="base-input">
    <div v-if="label" class="base-input__label"> {{ label }} </div>
    <div class="base-input__block">
      <div v-if="placeholderUp" class="base-input__block__label"> {{ placeholder }} </div>
      <input class="base-input__block__value"
             v-bind="$attrs"
             :placeholder="getPlaceholder"
             v-on="getListeners"
             @blur="placeholderUp = false"
             @focus="placeholderUp = true"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      placeholderUp: false
    }
  },
  computed: {
    getListeners() {
      return {
        ...this.$listeners,
        input: ({ target: { value } }) => this.$emit('input', value)
      }
    },
    getPlaceholder() {
      return !this.placeholderUp ? this.placeholder : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input {

  &__label {
    font-weight: 700;
    font-size: 1.125rem;
    color: $black;
    text-align: left;
    margin-bottom: 0.625rem;
  }

  &__block {
    position: relative;

    &__label {
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      position: absolute;
      background: $white;
      left: 1rem;
      top: -0.5rem;
      z-index: 0;
      padding: 0 0.125rem;
    }

    &__value {
      height: 2.4rem;
      width: calc(100% - 2.5rem);
      background: $white;
      border: black solid 1px;
      border-radius: 0.5px;
      padding: 0 1rem;
      font-size: 1rem;
    }
  }
}

</style>