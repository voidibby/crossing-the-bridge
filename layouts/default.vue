<template>
  <div>
    <Nuxt />
    <Logos />
  </div>
</template>

<style>
:root {
    --main: #F6FA36;
    --black: #000000;
}

html {
  /*font-family: "Ubuntu";*/
  font-family: "Neue Metana";
  font-size: 18px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Neue Metana";
  text-transform: uppercase;
  background: var(--main);
  display: table;
  padding: 2px 10px 2px 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.intro-text {
  column-count: 3;
  column-gap: 40px;
}

.projects-list h1,
.projects-list h2,
.projects-list h3,
.projects-list h4,
.projects-list h5,
.projects-list h6 {
  margin: 0;
  margin-top: 5px;
}

.projects-list {
  max-width: 800px;
  display: inline-block;
  margin: 10px;
}

footer {
  width: calc(100% - 40px);
  display: flex;
  padding: 20px;
  background: black;
}

.logo {
  width: 33%;
  margin: 70px;
}

</style>