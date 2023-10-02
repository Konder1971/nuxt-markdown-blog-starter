<!-- https://splidejs.com/guides/getting-started/ -->
<script setup>
import SubHeader from "@/components/SubHeader.vue";
import UnderConten from "@/components/UnderConten.vue";
import NewsBox from "@/components/NewsBox.vue";
</script>

<template>
  <SubHeader msg="News category name" />
  <UnderConten mgrtext="Description news category name" />
  <main>
    <NewsBox />
  </main>
</template>
