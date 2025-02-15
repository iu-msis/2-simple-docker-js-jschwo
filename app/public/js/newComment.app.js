var app = new Vue({
  el: '#comments',
  data: {
    comments: [{
      id: '',
      commentText: ''
    }],

    newComment: {
      id: '',
      commentText: ''
    }
  },

    methods:{
      fetchUser(){
        fetch('api/comments/')
        .then( response => response.json() )
        .then( json => {
          this.comments=json;
          console.log(this.comments);
        });
      },

    commentNew() {
    //  this.newComment.id = (this.newComment.commentText.substring(0,1)).toLowerCase();
      // TODO: Validate the data!
      fetch('api/comments/create.php', {
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
        this.comments=json;
        this.newComment = this.newCommentData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newComment);

    },
    newCommentData() {
      return {
        id: '',
        commentText:''
      }
    }

    },

    created(){
      this.fetchUser();
    }


});
