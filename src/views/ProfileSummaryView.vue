<template>
  <default-layout>
    <profile-summary />
  </default-layout>
</template>
  
<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import ProfileSummary from "@/components/summary/ProfileSummary.vue";

export default {
  name: "MyProfileView",
  components: { DefaultLayout, ProfileSummary },
};
</script>
