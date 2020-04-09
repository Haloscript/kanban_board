<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#"
      ><img :src="require('@/assets/images/blackboard.svg')" alt="" /><span
        >MyKanban</span
      ></a
    >
    <HeaderSearch />
  </nav>
</template>

<script>
export default {
  name: "Header",
  components: {
    HeaderSearch: () => import("./HeaderSerch")
  }
};
</script>

<style scoped lang="scss">
.navbar {
  & .navbar-brand {
    & img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
