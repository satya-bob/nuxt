// middleware/validateInput.ts


export default defineNuxtMiddleware(({ redirect, route, query }) => {
  if (route.name === 'login' && query.input !== 'yes') {
    return redirect('/');
  }
});
