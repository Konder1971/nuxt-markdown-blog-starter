<template>

<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')">Show all</button>
  <button class="btn" onclick="filterSelection('korob')">Korob</button>
  <button class="btn" onclick="filterSelection('cars')">Cars</button>
  <button class="btn" onclick="filterSelection('animals')">Animals</button>
  <button class="btn" onclick="filterSelection('fruits')">Fruits</button>
</div>

<div class="container">
  <div class="filterDiv cars">BMW</div>
  <div class="filterDiv korob">kr-1</div>
  <div class="filterDiv fruits">Orange</div>
  <div class="filterDiv animals">Blue</div>
</div>

	<div class="clearfix"></div>
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
.filterDiv {
  float: left;
  background-color: #2196F3;
  color: #ffffff;
  width: 100px;
  line-height: 100px;
  text-align: center;
  margin: 2px;
  display: none;
}

.show {
  display: block;
}

.container {
  margin-top: 20px;
  overflow: hidden;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}
</style>
