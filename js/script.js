console.log('JS OK', Vue)

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'


// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data() {
      return {
        mails: [],
        items: 10
      }
    },

    mounted() {
      for(let i = 0; i < this.items; i++){
        axios.get(endpoint).then(res => {
          const newMail = res.data.response
          this.mails.push(newMail)
        })
      }
    }
  })
  app.mount("#app");
