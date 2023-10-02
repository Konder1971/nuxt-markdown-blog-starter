<!-- 

https://herotofu.com/
https://herotofu.com/solutions/guides/vue-contact-form
https://herotofu.com/solutions/guides/vue-send-email

https://www.emailjs.com/docs/examples/vuejs/

https://www.formbackend.com/#pricing
https://www.formbackend.com/vuejs-form/

https://formspree.io/create/zeit


https://softauthor.com/vue3-ref-vs-reactive/
https://blog.logrocket.com/using-v-model-vue-3-build-complex-forms/#how-is-the-v-model-in-vue-3-different-from-vue-2
https://www.vuemastery.com/courses/intro-to-vue-3/forms-and-v-model-vue3/
https://vuejsexamples.com/simple-vue-js-contact-form/
https://www.vuemastery.com/courses/intro-to-vue-3/forms-and-v-model-vue3/
https://learnvue.co/articles/intro-to-vuelidate
https://medium.com/js-dojo/learn-form-validation-in-vue-3-in-10-minutes-with-vuelidate-8929c5059e66
https://mdbootstrap.com/docs/vue/extended/contact/?name=&email=&subject=&message=
https://dev.to/alvarosabu/create-dynamic-forms-in-vue3-4do0
https://www.bezkoder.com/vue-3-authentication-jwt/

https://codesandbox.io/s/pp9v8k9l8x?file=/App.vue
https://codepen.io/danielpro4/pen/oepXWJ

https://blog.getform.io/tag/vercel-contact-form/

-->

<script setup>
import SubHeader from "@/components/SubHeader.vue";
import UnderConten from "@/components/UnderConten.vue";
import UseEmail from "../UseEmail.js";
// import '@/assets/css/bootstrap.css';
</script>

<template>

	<SubHeader msg="We want to hear from you." />

	<UnderConten mgrtext="Interested in Learning More ? Tell us a little about yourself and we'll connect you with an expert who can share more about our product and answer any questions you have." />
	
	<main>

	 <!-- https://herotofu.com/solutions/guides/vue-contact-form -->
	 <div class="container">
		 <h2 style="text-align: center; margin-bottom: 20px;">Send a message</h2>
    <form
      :action="FORM_ENDPOINT"
      @submit="handleSubmit"
      method="POST"
      target="_blank"
    >
      <div>
				<span class="form-label">Your name<em>*</em></span>
        <input class="form-control" type="text" name="name" required />
      </div>

      <div>
				<span class="form-label">Email address<em>*</em></span>
        <input class="form-control" type="email" name="email" required />
      </div>

      <div>
				<span class="form-label">Message<em>*</em></span>
        <textarea class="form-control" name="message" required />
      </div>

      <div>
        <button type="submit" class="btn">Send a message</button>
      </div>
    </form>

    <div v-if="submitted">
      <h2>Thanks you!</h2>
      <div>We'll be in touch soon.</div>
    </div>

	</div>
		
	</main>

</template>

<script>
export default {
  name: "App",
  data: () => ({
    submitted: false,
    FORM_ENDPOINT: 'https://public.herotofu.com/v1/d4e40a90-ea63-11ed-b2e2-c10354b56774',
  }),

  methods: {
    handleSubmit() {
      setTimeout(() => {
        this.submitted = true;
      }, 100);
    },
  },
};
</script>

<style scoped>
 .container h2 {
    font-size: 28px;
    font-weight: 500;
  }
	.container {
		width: 100%;
		margin: 0 auto 40px;
		padding: 0;
		max-width: 380px;
	}
	.form-label {
		color: #000;
		font-size: 18px;
		display: block;
		margin-bottom: 4px;
	}
	.form-label em {
		color: #f00;
		font-style: normal;
	}
	.form-control {
		display: block;
		width: 100%;
		padding: 10px 15px;
		font-size: 18px;
		color: #000;
		border: 1px solid #000;
		margin-bottom: 25px;
	}
	textarea.form-control {
		min-height: 180px;
		margin-bottom: 35px;
	}
	.btn {
		border: normal;
		border-width: 0;
		border-radius: 6px;
		background-color: var(--green2);
		font-size: 18px;
		padding: 10px 14px;
		color: var(--white);
		cursor: pointer;
	}
	.btn:hover {
		background-color: var(--green);
	}
</style>