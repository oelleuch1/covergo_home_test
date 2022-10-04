<template>
  <default-layout>
    <my-profile />
  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import MyProfile from "@/components/profile/MyProfile";

export default {
  name: "MyProfileView",
  components: { DefaultLayout, MyProfile },
};
</script>
