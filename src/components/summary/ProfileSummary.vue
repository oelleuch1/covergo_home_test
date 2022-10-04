<template>
    <div class="profile-summary">
        <base-card class="profile-summary__card">
            <h1 class="profile-summary__card__title"> Summary </h1>
            <div class="profile-summary__card__preview">
              <div class="profile-summary__card__preview__item"> Name: {{ getUser.name }} </div>
              <div class="profile-summary__card__preview__item"> Age: {{ getUser.age }} </div>
              <div class="profile-summary__card__preview__item"> Where do you live: {{ getUser.country }} </div>
              <div class="profile-summary__card__preview__item"> Package: {{ getUser.package?.name }} </div>
              <div class="profile-summary__card__preview__item">
                Premium: {{ getUser.package?.value }}{{ getUser.package?.currency }}  
              </div>
            </div>
            <div class="profile-summary__card__submit">
              <base-buttom 
                class="profile-summary__card__submit__back" 
                label="Back" 
                @click="$router.go(-1)" 
              />
              <base-buttom 
                class="profile-summary__card__submit__buy" 
                label="Buy" 
                @click="$router.push('/')" 
              />
            </div>
        </base-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseButtom from "../ui/atoms/BaseButtom.vue";
import BaseCard from "../ui/molecules/BaseCard.vue";
export default {
  name: "ProfileSummary",
  components: { BaseCard, BaseButtom },
  computed: {
    ...mapGetters({
      getUser: "getUser",
    }),
  },
};
</script>

<style lang="scss" scoped>
.profile-summary {
  color: $black;

  &__card {
    padding-top: 2rem;

    &__title {
      color: $black;
    }

    &__preview {
      margin-top: 2rem;

      &__item {
        &:not(:last-child) {
          margin-bottom: 1.5rem;
        }
      }
    }

    &__submit {
      margin-top: 2rem;

      &__back {
        color: $black;
        background: $white;
        margin-right: 4rem;
      }

      &__back,
      &__buy {
        width: 6rem;
      }
    }
  }
}

@media (min-width: $tabletOrMobile + 1) {
  .profile-summary {
    &__card {
      width: 40rem;
    }
  }
}

@media (max-width: $tabletOrMobile) {
  .profile-summary {
    &__card {
      width: initial;
    }
  }
}
</style>
