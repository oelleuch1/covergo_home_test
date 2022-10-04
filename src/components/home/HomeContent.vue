<template>
  <div class="home-content">
    <base-card>
      <h1 class="home-content__title"> Hello There! </h1>
      <p class="home-content__description">
        Let's buy some insurance. It is going only to make a few steps
      </p>
      <div class="home-content__start">
        <base-button label="Start" @click="startBuyingHandler" />
      </div>
    </base-card>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/atoms/BaseButtom";
import BaseCard from "@/components/ui/molecules/BaseCard";

export default {
  name: "HomeContent",
  components: { BaseButton, BaseCard },
  methods: {
    startBuyingHandler() {
      this.$router.push('/my-profile')
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-content {
    width: 38rem;
    height: 22rem;

    &__title {
      color: $black;
      margin-top: 0;
    }

    &__description {
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }

    &__start {
      width: 10rem;
    }

  }
</style>