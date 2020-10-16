var commentInput = new Vue({
  el: '#commentTableBody',
  data: {
    comments: [{
      id: "",
      commentText: ""
    }],
    newComments: {
      input: ''
    }
  },

    methods:{
      fetchUser(){
        fetch('api/comment/')
        .then( response => response.json() )
        .then( json => {
          this.comments=json;
          console.log(this.comments);
        });
      },

    commentNew() {
      //create ID?????
      // TODO: Validate the data!
      fetch('api/comment/create.php', {
        method:'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.ptList.push(json[0]);

      });

      console.log("Creating (POSTing)...!");
      console.log(this.newComment);

      this.newComment = this.newCommentData();
    }
  }
})
