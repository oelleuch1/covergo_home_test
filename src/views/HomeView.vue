<template>
  <default-layout>
      <home-content />
  </default-layout>
</template>

<script>
import HomeContent from "@/components/home/HomeContent";
import DefaultLayout from "@/layouts/DefaultLayout";
export default {
  name: "HomeView",
  components: { DefaultLayout, HomeContent },
};
</script>
