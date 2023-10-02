<!-- https://splidejs.com/guides/getting-started/ -->
<script setup>
import SubHeader from "@/components/SubHeader.vue";
import UnderConten from "@/components/UnderConten.vue";
import NewsСategories from "@/components/NewsСategories.vue";
import NewsRoom from "@/components/NewsRoom.vue";
</script>

<template>
  <SubHeader msg="News categories" />
  <UnderConten mgrtext="All relevant and urgent news around the world and country." />
  <main>
    <div class="news--box">
      <NewsСategories />
      <NewsRoom />
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 768px) {
  .news--box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }  
  .news--box-content {
    width: calc(70% - 45px);
    margin-bottom: 40px;
  }
  .news--box-room {
    width: 30%;
    margin-bottom: 40px;
  }
}
@media (max-width: 767.98px) {
  .news--box {
    margin-bottom: 40px;
  }
}
</style>
