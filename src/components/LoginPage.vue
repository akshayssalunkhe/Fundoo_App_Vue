<template>
 <div class="maindiv">
    <div class="login-container">
    
        <div class="fundoo">
            <a class="a1">F</a>
            <a class="a2">u</a>
            <a class="a3">n</a>
            <a class="a4">d</a>
            <a class="a5">o</a>
            <a class="a6">o</a>
        </div>
        
        <div class="signin">
            <h3>Sign in</h3>
        </div>
    
        <div class="continue"> to Continue to Fundoo

        </div>
        
        <div class="email">
            <input class="emailinput" v-model="email" placeholder="Email Address" type="email" required >
        </div>
        
        <div class="password">
            <input class="passwordinput" v-model="password" placeholder="password" type="password">
        </div>
        
        <div class="loginbtn">
            <div class="createacc">Create Account</div>
            <md-button class="md-raised md-primary" type="submit" @click="login">Log In</md-button>

        </div>
    </div>
 </div>
</template>

<script>
import service from '../services/UserService'
export default {
    name: "LoginPage",

    data() {
    return {
      cartID:"",
      email: "",
      password: "",
     };
  },
  methods: {
    login: function () {
        const loginData = {
         cartID: "",
         email: this.email,
         password: this.password,
        
       };

     service.getLogin(loginData).then((response) => {
         this.result = response.data;
         console.log(this.result.email);
         this.$router.push('/dashboard')
       })
     },
  },
}
</script>

<style scoped>
.maindiv{
    /* margin-top: 10%; */
    padding-top:10%;
}

.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 300px;
    height: 350px;
    padding: 15px;
    margin:auto;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 10px;
    
}

.fundoo {
  display: flex;
  flex-direction: row;
  font-size: 25px;
  font-family: fantasy;
  font-weight: bold;
  color: #d10303;
}

.emailinput,.passwordinput {
  width: 280px;
  height: 45px;
  border: solid 1px  #e7dcfe;
  border-radius: 10px;
}

.email,.password{
    margin:5%;
}

.a1,.a4 {
  color: rgb(106, 106, 252);
}
.a2,.a6 {
  color:rgb(241, 97, 97);
}
.a3{
    color:rgb(243, 243, 77);
}
.a5 {
  color: #038803;
}

.loginbtn {
  place-content: stretch flex-end;
  align-items: stretch;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin: auto;
}

.loginbtn>button{
    min-width: 88px;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 10px;
    overflow: visible;
    font-weight: 500;
    font-size: 15px;
    background-color: #7070e6;
}

.createacc{
    color: #0606f8;
    cursor: pointer;
    margin: 5px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    width:100%;
    padding-top: 5px;
}
</style>