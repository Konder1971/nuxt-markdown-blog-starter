<template>
  <div class="news--box-content">

    <h4>Filter category news:</h4>
    <div id="myBtnContainer">
      <button class="btn active" onclick="filterSelection('all')">Show all</button>
      <button class="btn" onclick="filterSelection('art')">Art</button>
      <button class="btn" onclick="filterSelection('sport')">Sport</button>
      <button class="btn" onclick="filterSelection('policy')">Policy</button>
      <button class="btn" onclick="filterSelection('music')">Music</button>
    </div>

    <div class="news--grid">

      <!-- Start new repeat -->
      <RouterLink to="/art" class="filterDiv art category">
        <div class="photo">
          <img src="@/assets/images/f1.jpg" alt="" />
        </div>
        <p>Art news</p>
      </RouterLink>
      <!-- Stop new repeat -->

      <!-- Start new repeat -->
      <RouterLink to="/art" class="filterDiv sport category">
        <div class="photo">
          <img src="@/assets/images/f2.jpg" alt="" />
        </div>
        <p>Sport news</p>
      </RouterLink>
      <!-- Stop new repeat -->

      <!-- Start new repeat -->
      <RouterLink to="/art" class="filterDiv policy category">
        <div class="photo">
          <img src="@/assets/images/f3.jpg" alt="" />
        </div>
        <p>Policy news</p>
      </RouterLink>
      <!-- Stop new repeat -->

      <!-- Start new repeat -->
      <RouterLink to="/art" class="filterDiv music category">
        <div class="photo">
          <img src="@/assets/images/f4.jpg" alt="" />
        </div>
        <p>Music news</p>
      </RouterLink>
      <!-- Stop new repeat -->

    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      const insertScript = document.createElement('script')
      insertScript.setAttribute('src', '/src/filter.js')
      document.body.appendChild(insertScript)
    }
  }
</script>

<style scoped>
.category {
  display: block;
}
.photo {
  border: 1px solid #ccc;
  padding: 6px;
  margin-bottom: 5px;
}
p {
  color: #00b465;
  text-align: center;
  font-weight: 600;
}
.category:hover .photo {
  background-color: #ccc;
}
.category:hover p {
  color: #004a87;
}
@media (min-width: 1200px) {
  .news--box-content {
    display: block;
  }
  .news--grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    padding-top: 8px;
  }
}

@media (min-width: 768px) and (max-width: 1199.98px) {
  .news--box-content {
    display: block;
  }  
  .news--grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding-top: 8px;
  }
}

@media (max-width: 767.98px) {
  .category {
    margin-bottom: 20px;
  }
}




h4 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 6px;
}
.filterDiv {
  display: none;
}
.show {
  display: block;
}
.btn {
  border: none;
  outline: none;
  padding: 12px 20px;
  background: #edf0f7;
  font-size: 18px;
  margin-bottom: 15px;
  cursor: pointer;
}
.btn:hover {
  background-color: #00b465;
}

.btn.active {
  background-color: var(--blue3);
  color: white;
}

</style>