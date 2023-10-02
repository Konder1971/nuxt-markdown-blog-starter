<template>
  <div class="news--box-content">
    <!-- Start new repeat -->
    <div class="new">
      <h2>
        <a href="/post">Headline for news</a>
      </h2>
      <h3>April 26, 2016</h3>
      <p>Media news - detailed description</p>
      <div class="row--news">
        <div class="prew"><a href="src/assets/images/f1.jpg" title="" data-lightbox="example"><img src="@/assets/images/f1.jpg" alt="" /></a></div>
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            impedit est fugit qui facere doloremque pariatur, laudantium
            adipisci ducimus porro possimus minus, numquam necessitatibus natus
            ipsam, eligendi temporibus praesentium harum at tenetur soluta
            libero aspernatur dolorum. Omnis aut consequatur id corrupti, ad
            tempore numquam fugit architecto maxime doloribus. Facere cum nulla,
            soluta aperiam exercitationem est dolorum officia fuga natus nihil.
          </p>
          <div class="read-more">
            <RouterLink to="/post">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <!-- Stop new repeat -->

    <!-- Start new repeat -->
    <div class="new">
      <h2>
        <a href="/post">Headline for news</a>
      </h2>
      <h3>April 26, 2016</h3>
      <p>Media news - detailed description 222</p>
      <div class="row--news">
        <div class="prew"><a href="src/assets/images/f2.jpg" title="" data-lightbox="example"><img src="@/assets/images/f2.jpg" alt="" /></a></div>
        <div class="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis in
            accusamus libero, quisquam ...
          </p>
          <div class="read-more">
            <RouterLink to="/post">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                <path
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <!-- Stop new repeat -->
  </div>
</template>

<script>
export default {
  mounted() {
      const insertScript = document.createElement('script')
      insertScript.setAttribute('src', '/src/lightbox-plus-jquery.min.js')
      document.body.appendChild(insertScript)
    }
}
</script>

<style scoped>
p {
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 10px;
}

.new {
  border-top: 1px solid var(--black222);
  padding-top: 30px;
  padding-bottom: 35px;
}

.new:first-child,
.new:first-of-type {
  border-top: none;
  padding-top: 0;
}

.new h2 {
  color: #004a87;
  font-size: 30px;
  font-weight: 600;
  line-height: 34px;
  margin: 0 0 12px 0;
}

.new h2 a {
  color: #004a87;
  font-size: 30px;
  line-height: 34px;
}

.new h2 a {
  color: #004a87;
}

.new h2 a:hover {
  color: #6ab93d;
}

.new h3 {
  color: #00b465;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  padding: 0;
  margin: 0 0 10px 0;
}

.prew {
  border: 1px solid #ccc;
  padding: 6px;
}

.read-more a {
  color: #004a87;
  font-weight: 600;
}

.read-more a svg {
  fill: #004a87;
  height: 16px;
  width: auto;
  position: relative;
  left: 1px;
  top: 3px;
}

.read-more a:hover {
  color: #00b465;
}

.read-more a:hover svg {
  fill: #00b465;
}

@media (min-width: 768px) {
  .new:last-child {
    padding-bottom: 0;
  }

  .row--news {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
  }

  .prew {
    width: 270px;
    margin-top: 8px;
  }

  .text {
    width: calc(100% - 300px);
  }
}

@media (min-width: 768px) and (max-width: 1199.98px) {
  .prew {
    width: 200px;
    margin-top: 8px;
  }

  .text {
    width: calc(100% - 220px);
  }
}

@media (max-width: 767.98px) {
  .new {
    padding-bottom: 31px;
  }

  .new:last-child {
    padding-bottom: 20px;
  }

  .news--box {
    margin-bottom: 40px;
  }

  .new {
    padding-top: 25px;
  }

  .prew {
    margin-bottom: 10px;
  }
}</style>
