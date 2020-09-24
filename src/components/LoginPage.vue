<template>
 <div class="maindiv">
    <div class="login-container">
    
        <div class="fundoo">
            <a>F</a>u<a2>n</a2><a>d</a><a4>o</a4>o
        </div>
        
        <div class="signin">
            <h3>Sign in</h3>
        </div>
    
        <div class="continue"> to Continue to Fundoo

        </div>
        
        <div class="email">
            <input class="emailinput" placeholder="Email Address">
        </div>
        
        <div class="password">
            <input class="passwordinput" placeholder="password">
        </div>
        
        <div class="loginbtn">
            <button type="submit">Log In</button>
        </div>
        <div class="forgetpass">Forget Password?</div>
        <div class="createacc">Create Account</div>
    </div>
 </div>
</template>

<script>
export default {
    name: "LoginPage",
}
</script>

<style scoped>
.maindiv{
    margin-top: 10%;
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
  /* margin:5%; */
}

.emailinput,.passwordinput {
  /* font-size: 28px; */
  width: 280px;
  height: 45px;
  border: solid 1px  #e7dcfe;
  border-radius: 10px;
}

.email,.password{
    margin:5%;
}

a {
  color: blue;
}
a2 {
  color: #f0b000;
}
a4 {
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

.createacc,.forgetpass{
    color: #0606f8;
    cursor: pointer;
    margin: 5px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    width:100%;
}
</style>