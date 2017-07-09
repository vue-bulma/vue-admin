<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -190px 0 0 -468px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: #9f9f9f;
  font-size: 15px;
}
.package {
  box-sizing: border-box;
  width: 301px;
  height: 380px;
  border: 3px solid #e8e8e8;
  border-radius: 7px;
  display: inline-block;
  padding: 24px;
  text-align: center;
  float: left;
  -webkit-transition: margin-top 0.5s linear;
  transition: margin-top 0.5s linear;
  position: relative;
  margin-right: 11px;
}
.package:hover {
  margin-top: -30px;
  -webkit-transition: margin-top 0.3s linear;
  transition: margin-top 0.3s linear;
  cursor: pointer;
}
.name {
  color: #565656;
  font-weight: 300;
  font-size: 3rem;
  margin-top: -5px;
}
.price {
  margin-top: 7px;
  font-weight: bold;
}
.price::after {
  content: " / mensal";
  font-weight: normal;
}
hr {
  background-color: #dedede;
  border: none;
  height: 1px;
}
.trial {
  font-size: .9rem;
  font-weight: 600;
  padding: 2px 21px 2px 21px;
  color: #33c4b6;
  border: 1px solid #e4e4e4;
  display: inline-block;
  border-radius: 15px;
  background-color: white;
  position: relative;
  bottom: -20px;
}
ul {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-top: 29px;
}
li {
  margin-bottom: 15px;
}
.checkIcon {
  font-family: "";
  content: "\f00c";
}
li::before {
  font-family: "FontAwesome";
  content: "\f00c";
  font-size: 1.3rem;
  color: #33c4b6;
  margin-right: 3px;
}
.brilliant {
  border-color: #33c4b6;
}
/* Triangle */
.brilliant::before {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 64px 64px 0 0;
  border-color: #3bc6b8 transparent transparent transparent;
  position: absolute;
  left: 0;
  top: 0;
  content: "";
}
.brilliant::after {
  font-family: "FontAwesome";
  content: "\f00c";
  color: white;
  position: absolute;
  left: 9px;
  top: 6px;
  text-shadow: 0 0 2px #37c5b6;
  font-size: 1.4rem;
}
</style>

<template>
  <div class='wrapper'>
    <div class='package'>
      <div class='name'>Básico</div>
      <div class='price'>R$ 10,00</div>
      <div class='trial'>Avalie por 30 dias</div>
      <hr>
      <ul>
        <li>
          <strong>1</strong>
          Usuário
        </li>
        <li>
          <strong>Acesso a sua agenda</strong>
        </li>
        <li>
          <strong>Acesso Ilimitado</strong>
        </li>
      </ul>
    </div>
    <div class='package brilliant'>
      <div class='name'>Brilliant</div>
      <div class='price'>R$ 150,00</div>
      <div class='trial'>Avalie por 30 dias</div>
      <hr>
      <ul>
        <li>
          <strong>Ilimitado</strong>
        </li>
        <li>
          <strong>Unlimited</strong>
          team playlists
        </li>
        <li>
          <strong>Unlimited</strong>
          public playlists
        </li>
        <li>
          Team analytics
        </li>
        <li>
          Send files
        </li>
      </ul>
    </div>
    <div class='package'>
      <div class='name'>Basic</div>
      <div class='price'>€0</div>
      <div class='trial'>Avalie por 30 dias</div>
      <hr>
      <ul>
        <li>
          <strong>3</strong>
          Usuários
        </li>
        <li>
          <strong>3</strong>
          team playlists
        </li>
        <li>
          <strong>Unlimited</strong>
          public playlists
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
