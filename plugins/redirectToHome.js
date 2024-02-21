// plugins/redirectToHome.ts



export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('redirectToHome', {
    backToHome() {
      nuxtApp.router.push('/');
    },
  });
});
