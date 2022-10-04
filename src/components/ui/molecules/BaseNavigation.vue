<template>
  <div class="base-navigation">
    <base-button class="base-navigation__back" label="Back" @click="$router.go(-1)" />
    <base-button class="base-navigation__next" label="Next" @click="$emit('next')" />
  </div>
</template>

<script>
import BaseButton from "@/components/ui/atoms/BaseButtom";
export default {
  name: "BaseNavigation",
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
.base-navigation {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__back {
    color: $black;
    background: $white;
    margin-right: 4rem;
  }

  &__back,
  &__next {
    width: 6rem;
  }
}
</style>