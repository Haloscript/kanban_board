<template>
  <div>
    <MainHeader />
    <div class="container">
      <router-view />
    </div>
    <Modals />
    <notifications group="app" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    MainHeader: () => import("../components/HeaderFooter/Header"),
    Modals: () => import("../components/Modals")
  }
};
</script>
