var app = new Vue({
  el: '#app',
  data: {
    dizi:{}
  },
  created:function(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts/{/id}').then(response => {

   // get body data
   //this.someData = response.body;
   console.log(response.body);
   this.dizi=response.body;

 }, response => {
   // error callback
   console.log(response);

 });

  }
})
