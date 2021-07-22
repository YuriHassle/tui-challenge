export default function (app: any) {
  app.$axios.onRequest((config: any) => {
    const token = app.$cookiz.get('amadeus_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  app.$axios.onError(async (error: any) => {
    const code = parseInt(error.response && error.response.status);
    //let originalRequest = error.config;
    if (code === 401) {
      // originalRequest.__isRetryRequest = true;
      // return new Promise((resolve, reject) => {
      //   app.$store.dispatch('Auth/authenticate')
      //     .then((response: any) => {
      //       if (response.status == 200) {
      //         app.$cookiz.set('amadeus_token', response.access_token);
      //         originalRequest.headers[
      //           'Authorization'
      //         ] = `Bearer ${response.access_token}`;
      //       }
      //       resolve(response);
      //     })
      //     .catch((e: any) => {
      //       reject('error in authentication');
      //     });
      // })
      //   .then((res) => {
      //     return app.$axios(originalRequest);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
      app.$cookiz.remove('amadeus_token');
      alert('Por favor, recarregue a página');
      app.$router.push({
        name: 'index',
      });
      return;
    }
  });
}
