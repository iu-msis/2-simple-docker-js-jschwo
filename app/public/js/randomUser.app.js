var app = new Vue({
  el: '#userProfile',
  data: {
    userName: 'John Doe',
    userEmail: '',
    userNat: '',
    userBday: '',
    userAge: '',
    userImgL: '',
    profileThumb: ''

  },
    created() {
      this.fetchUser();
    },


    methods: {
      fetchUser: function() {
    // returns a promise
      fetch("https://randomuser.me/api/")

     .then( response => response.json())
     .then(data =>  {
      var userData = data.results[0];
      console.log(userData);
     this.userName = userData.name.first + " " + userData.name.last;
     this.userEmail = userData.email;
     this.userNat = userData.location.country;
     this.userBday = userData.dob.date.substring(0,10);
     this.userAge = userData.dob.age;
     this.userImgL = userData.picture.large;
     this.profileThumb = userData.picture.small;
   });

 },
    createNewUser: function (){
    this.fetchUser()
    }

  }
})
