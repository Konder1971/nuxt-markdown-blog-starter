<script setup>
  import PostContent from "@/components/PostContent.vue";
  import NewsRoom from "@/components/NewsRoom.vue";
</script>

<template>
  <div class="news--box">
    <PostContent />
    <NewsRoom />
  </div>
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
