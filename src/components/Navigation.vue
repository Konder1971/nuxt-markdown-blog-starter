<template>
	<div class="top" :class="bar">
		<!-- logo start -->
		<div class="logo">
			<RouterLink to="/" @class="closeBar"><img alt="sundead" src="@/assets/images/fox.svg" /></RouterLink>
			<em>News across the country</em>
		</div>
		<!-- logo stop -->
		<!-- navigations start -->
		<a class="nav-toggle" @click="isActive = !isActive"><span></span></a>
		<div class="navigations">
			<nav>
				<ul>
          <li>
            <img alt="" src="@/assets/images/fox.svg" />
          </li>
					<li>
						<RouterLink to="/" exact>Home</RouterLink>
					</li>
					<li>
						<RouterLink to="/about">About Us</RouterLink>
					</li>
					<li>
						<RouterLink to="/allnews">News</RouterLink>
					</li>
          <!--
					<li>
						<RouterLink to="/art">Art</RouterLink>
					</li>
					<li>
						<RouterLink to="/post">Post</RouterLink>
					</li>
          -->
					<li>
						<RouterLink to="/contact">Contact</RouterLink>
					</li>
					<li>
						<a href="https://itweb.vercel.app/" target="_blank" title="itweb">ITweb</a>
					</li>
				</ul>
			</nav>
		</div>
		<!-- navigations stop -->
	</div>
</template>

<script>
export default {
  data() {
    return {
      isLogo: false,
      isActive: false,
    };
  },
  computed: {
    bar() {
      return {
        navigationActive: this.isActive,
      };
    },
    closeBar() {
      return {
        isActive: false,
      };
    },
  },
};
</script>

<style scoped>
.top {
	width: 100%;
	-webkit-transition: 300ms ease-out;
	-moz-transition: 300ms ease-out;
	transition: 300ms ease-out;
}
.navigations .logo em {
  line-height: 1;
  text-align: center;
	cursor: default;
}

.navigations nav a {
  line-height: 1;
  display: block;
	font-weight: 600;
}
.navigations nav a.router-link-exact-active {
	cursor: default;
}
.navigations nav ul,
.navigations nav li {
	margin: 0;
	padding: 0;
	list-style: none;
}
/*
.navigations .dropdown ul li a {
	text-transform: none;
	font-weight: 700;
	line-height: 1;
	color: #000;
}
.navigations .dropdown ul li a svg {
	fill: #000;
	width: 21px;
	height: auto;
	margin-right: 18px;
}
.navigations .dropdown ul li a img {
	width: 21px;
	height: auto;
}
.navigations .dropdown ul li a:hover,
.navigations .dropdown ul li a:focus {
	color: #00B465;
}
.navigations .dropdown ul li a:hover svg,
.navigations .dropdown ul li a:focus svg  {
	fill: #00B465;
}
*/
@media (min-width: 768px) {
	.top .logo,
	.top .nav-toggle {
		display: none;
	}
	.navigations {
    background-color: #fff;;
		border-top: 1px solid var(--black333);
		border-bottom: 1px solid var(--black333);
		-webkit-transition: 300ms ease-out;
		-moz-transition: 300ms ease-out;
		transition: 300ms ease-out;
	}
	body.navigationsFixed .navigations {
		position: fixed;
		z-index: 98;
		top: 0;
		width: 100%;
		-webkit-transition: 300ms ease-out;
		-moz-transition: 300ms ease-out;
		transition: 300ms ease-out;
	}

	.navigations nav > ul {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
    transition: all 500ms ease-in-out;
	}
	.navigations nav ul > li {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
	}


  .navigations nav li:first-child {
    opacity: 0;
    padding: 0 20px 0;
    -webkit-transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out;
    -ms-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
  }
  body.navigationsFixed .navigations nav li:first-child {
    opacity: 1;
    -webkit-transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out;
    -ms-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
  }
.navigations nav li:first-child img {
    width: auto;
    height: 45px;
  }


  
	.navigations nav ul > li a {
		padding: 16px 28px 18px;
		color: var(--blue);
  	font-size: 22px;
	}
  .navigations nav ul > li:last-child a {
    color: #00b465;
  }
	.navigations nav a:hover,
	.navigations nav a.router-link-exact-active,
  .navigations nav ul > li:last-child a:hover {
		color: var(--white);
		background-color: var(--black333);
	}
	/*
	.dropdown {
		position: absolute;
		z-index: 3;
		z-index: 20;
		-webkit-border-radius: 12px;
		border-radius: 12px;
		top: -5px;
		left: 0;
		display: none;
		margin-left: -90px;	
	}
	.navigations nav > ul > li:hover > .dropdown {
		display: block;
		-webkit-animation: fadeInFromNone 0.5s ease-out;
		-moz-animation: fadeInFromNone 0.5s ease-out;
		-o-animation: fadeInFromNone 0.5s ease-out;
		animation: fadeInFromNone 0.5s ease-out;
	}
	@-webkit-keyframes fadeInFromNone {
		0% {
			opacity: 0;
			margin-top: 30px;
		}
		100% {
			opacity: 1;
			margin-top: 0;
		}
	}
	@-moz-keyframes fadeInFromNone {
		0% {
			opacity: 0;
			margin-top: 30px;
		}
		100% {
			opacity: 1;
			margin-top: 0;
		}
	}
	@-o-keyframes fadeInFromNone {
		0% {
			opacity: 0;
			margin-top: 30px;
		}
		100% {
			opacity: 1;
			margin-top: 0;
		}
	}
	@keyframes fadeInFromNone {
		0% {

			opacity: 0;
			margin-top: 30px;
		}
		100% {
			opacity: 1;
			margin-top: 0;
		}
	}
	
	.dropdown ul {
		display: block;
	}
	.dropdown-col-2 {
		background-color: #00B465;		
		-webkit-border-radius: 12px;
		border-radius: 12px;
		padding: 30px 30px;
		width: 320px;
		position: absolute;
		top: 100px;
	}
	.dropdown-col-2:before {
		content: '';
		display: block;
		width: 20px;
		height: 20px;
		background-color: #00B465;
		position: absolute;
		z-index: 20;
		top: -9px;
		left: 50%;
		margin-left: -10px;
		-ms-transform:rotate(45deg);
		-webkit-transform:rotate(45deg);
		transform:rotate(45deg);
	}
	.navigations .dropdown ul {
		display: block;
	}
	.navigations .dropdown ul li {
		margin-left: 0;
		margin-bottom: 25px;
		height: auto;
		display: block;
	}
	.navigations .dropdown ul li:last-child {
		margin-bottom: 0;
	}
	.navigations .dropdown ul li a {
		font-size: 20px;
		font-weight: 500;
	}
	.navigations .dropdown ul li a:hover,
	.navigations .dropdown ul li a.active {
		color: #fff;
	}
	.navigations .dropdown ul li a.active {
		cursor: default;
	}

	.navigations .dropdown ul li ul.subNuv li {
		margin: 25px 0 0 15px;
	}
	*/
}

@media (max-width: 767.98px) {
	.top {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 70px;
    background-color: var(--blue);
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
	}
  .top .logo {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
  .top .logo a {
    display: block;
    height: 50px;
  }
  .top .logo img {
    height: 50px;
    width: auto;
    max-width: none;
  }
	.top .logo em {
		color: var(--white);
		font-style: normal;
		padding-left: 7px;
	}

	.nav-toggle {
		position: relative;
		display: inline-block;
		width: 26px;
		height: 24px;
	}
	.nav-toggle span { 
		position: absolute;
		left: 0; 
		top: 10px;  
	}
	.nav-toggle span, 
	.nav-toggle span:before,
	.nav-toggle span:after {
		position: absolute;
		display: block;
		content: '';
		background-color: #fff;
		cursor: pointer;
		height: 3px;
		width: 28px;
		-webkit-transition: 300ms ease-out;
		-moz-transition: 300ms ease-out;
		transition: 300ms ease-out;
	}
	.nav-toggle span:before {
		top: -8px;
	}
	.nav-toggle span:after {
		bottom: -8px; 
	}
	.navigationActive .nav-toggle span {
		background-color: transparent;
	}
	.navigationActive .nav-toggle span:before, 
	.navigationActive .nav-toggle span:after {
		top: 0;
	}
	.navigationActive .nav-toggle span:before {
		transform: rotate(45deg);
	}
	.navigationActive .nav-toggle span:after {
		transform: rotate(-45deg);
	}

	.navigations {
		position: fixed;
		z-index: 99;
		left: 100%;
		top: 70px;
		width: 100%;
    transition: all 500ms ease-in-out;
    padding: 25px 22px;
    background-color: var(--green2);
    height: calc(100vh - 70px);
		overflow-y: auto;
	}
	.navigationActive .navigations {
    left: 0;
    transition: all 500ms ease-in-out;
	}
  .navigations nav li:first-child {
    display: none;
  }
	.navigations nav ul > li a {
		color: var(--black);
    font-size: 29px;
    line-height: 33px;
    margin-bottom: 20px;
	}
	.navigations nav a:focus,
	.navigations nav a.router-link-exact-active {
		color: var(--white);
	}

	/*
	.dropdown-col-1 {
		display: none;
	}
	.navlink {
		display: block;
		font-weight: 600;
		color: #000;
		position: relative;
		padding-right: 40px;
	}
	.navlink:before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		right: 0;
		top: 50%;
		-moz-transform:translate(0, -50%);
		-ms-transform:translate(0, -50%);
		-webkit-transform:translate(0, -50%);
		-o-transform:translate(0, -50%);
		transform:translate(0, -50%); 		
		width: 30px;
		height: 30px;
		background-image: url(../images/down.svg);
		background-position: center center;
		background-repeat: no-repeat;
	}
	.navlink:last-child:before{
		display:none;
	}
	.navlink.active:before {
		background-image: url(../images/up.svg);
	}
	.navigations .dropdown {
		display: none;
	}
	.navigations .navlink.active + .dropdown {
		display: block;
	}
	.navigations .dropdown ul {
		margin: 30px 0;
	}
	.navigations .dropdown ul li {
		margin-bottom: 20px;
		margin-left: 10px;
	}
	.navigations .dropdown ul li a {
		margin-bottom: 20px;
	}
	.navigations .dropdown ul li a {
		display: block;
		font-size: 20px;
		font-weight: 600;
	}
	.navigations .dropdown ul li a.active {
		color: #00B465;
		cursor: default;
	}
	*/
}
</style>