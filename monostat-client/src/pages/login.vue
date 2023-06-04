<template>
  <div class="wrapper">
    <form name="login">
      <h1 class="title">Login</h1>
      <div class="form_input">
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Enter your username"/>
      </div>
      <div class="form_input">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" />
      </div>
      <Button>Continue</Button>
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped>
.wrapper {
  width: 100%; 
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
}

.form_input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #f2f2f2;
}

</style>

