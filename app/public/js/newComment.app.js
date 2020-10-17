var commentInput = new Vue({
  el: '#commentTable',
  data: {
    comments: [{
      id: "",
      commentText: ""
    }],

    newComment: {
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
    //  this.newComment.id = (this.newComment.commentText.substring(0,1)).toLowerCase();
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
        this.comments.push(json[0]);
        this.newComment = this.newCommentData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newComment);

    },
    newCommentData() {
      return {
        commentText: "",
      }
    }

    },

    created(){
      this.fetchUser();
    }


})
