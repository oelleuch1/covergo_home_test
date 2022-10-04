<template>
  <div class="my-profile">
    <h1 class="my-profile__title">Tell us about your self</h1>
    <base-input
        v-model.trim="user.name"
        class="my-profile__input"
        label="Name"
        placeholder="Add text"
    />
    <base-input
        v-model.number="user.age"
        class="my-profile__input"
        label="Age"
        type="number"
    />
    <base-select
        v-model="user.country"
        :options="countries"
        class="my-profile__select" 
        label="Where do you live ?"
    />
    <base-card class="my-profile__card">
      <base-radio-group
          v-model="user.package"
          :options="getPackageOptions"
          name="package-options"
      />
      <div class="my-profile__card__package">
        <span> Your premium is: </span>
        <span v-if="selectedPackage"> {{ selectedPackage }} </span>
      </div>
      <div class="my-profile__card__navigation">
        <base-navigation @next="navigateToSummaryHandler"/>
      </div>
    </base-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { COUNTRIES, COUNTRY_CURRENCY, PACKAGE_OPTIONS } from "@/constants";
import { convertFromHDK } from "@/helpers";

import BaseInput from "@/components/ui/atoms/BaseInput";
import BaseSelect from "@/components/ui/atoms/BaseSelect";
import BaseCard from "@/components/ui/molecules/BaseCard";
import BaseRadioGroup from "@/components/ui/atoms/BaseRadioGroup";
import BaseNavigation from "@/components/ui/molecules/BaseNavigation";

export default {
  name: "MyProfile",
  components: {
    BaseInput,
    BaseSelect,
    BaseRadioGroup,
    BaseCard,
    BaseNavigation,
  },
  data() {
    return {
      user: {
        name: null,
        age: null,
        country: null,
        package: {},
      },
      countries: COUNTRIES,
    };
  },
  computed: {
    getPackageOptions() {
      return PACKAGE_OPTIONS.map((packageOption) => {
        const selectedCurrency = COUNTRY_CURRENCY[this.user.country];
        const convertedValue = convertFromHDK(
          packageOption.value,
          selectedCurrency
        );

        return this.getOptionLabel(
          packageOption,
          convertedValue,
          selectedCurrency
        );
      });
    },
    selectedPackage() {
      const {
        country,
        package: { value },
      } = this.user;
      return country && value ? value + COUNTRY_CURRENCY[country] : "";
    },
  },
  methods: {
    ...mapActions({
      setUser: "setUser",
    }),
    getOptionLabel(
      { label, percent, ...options },
      convertedValue,
      selectedCurrency
    ) {
      const isStandard = label === "Standard";
      const formattedLabel =
        selectedCurrency && !isStandard
          ? `${label} (+${convertedValue}, ${selectedCurrency}), ${percent}%`
          : label;

      return {
        ...options,
        label: formattedLabel,
        value: convertedValue,
        currency: selectedCurrency,
      };
    },
    navigateToSummaryHandler() {
      this.setUser(this.user);
      this.$router.push("/summary");
    },
  },
};
</script>

<style lang="scss" scoped>
.my-profile {
  width: 100%;

  &__title {
    color: $black;
  }

  &__input,
  &__select {
    max-width: 25rem;
    margin: 0 auto 1.5rem auto;
  }

  &__card {
    margin: 2rem auto 0 auto;
    padding-top: 1rem;

    &__package {
      margin-top: 4rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: $black;
    }

    &__navigation {
      margin-top: 2rem;
    }
  }
}

@media (min-width: $tabletOrMobile + 1) {
  .my-profile {
    &__card {
      width: 40rem;
    }
  }
}

@media (max-width: $tabletOrMobile) {
  .my-profile {
    &__card {
      width: initial;
    }
  }
}
</style>
