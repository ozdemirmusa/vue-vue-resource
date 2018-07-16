var app = new Vue({
  el: '#app',
  data: {
    dizi:{}
  },
  created:function(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(response => {
   console.log(response.body);
   this.dizi=response.body;

 }, response => {
   // error callback
   console.log(response);

 });

  }
})
