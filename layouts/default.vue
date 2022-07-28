<template>
  <Nuxt />
</template>

<style>
#__layout {
  min-height: 100vh;
}

:root {
  --main: #F6FA36;
  --black: #000000;
}

* {
  box-sizing: border-box;
  /*padding: 0;
	margin: 0;*/
}

body {
  padding: 0;
  margin: 0;
  font-size: calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
}

html {
  /*font-family: "Ubuntu";*/
  font-family: "Neue Metana";
  font-size: 16px;
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

h6 {
  line-height: 1em;
  margin: 0;
}

p {
  background: var(--main);
  padding: 2px 10px 2px 10px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 2px 10px 2px 10px;
  display: inline-block;
}

li {
  background: var(--main);
}

.video-wrapper {
  position: relative;
  overflow: hidden;
  width: 90%;
  max-width: 900px;
  margin: 20px;
  padding-top: 2%;
  padding-bottom: 6%;
}

.video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  /*padding-top: 56.25%;
  padding-top: 75%;*/
  aspect-ratio: 16 / 9;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}


.project-list-element h1,
.project-list-element h2,
.project-list-element h3,
.project-list-element h4,
.project-list-element h5,
.project-list-element h6 {
  margin: 0;
  margin-top: 5px;
  padding: 10px 50px 5px 15px;
}

.project-list-element h1 {
  font-size: 1.5em;
}

.project-list-element-container {
  width: 50%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: 80px;
  padding: 20px 15px 10px 0;
}

.project-list-element {
  position: relative;
  display: inline-block;
  width: 100%;
}

.project-list-title {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.project-list-title h1 {
  padding: 10px;
  margin: 20px;
  text-align: right;
  color: var(--black);
  transition: padding 0.2s;
}


.project-list-element img {
  opacity: 1;
}

.project-list-element:hover h1 {
  padding: 40px;
}

.project-list-element:hover img {
  opacity: 0.8;
}

footer {
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;

  padding: 20px;
  /*background-image: url(assets/images/00-mainbackgroundtexture-02.png);*/
  background-size: 150% auto;
  background-position-x: center;
  background-color: black;
}

.logo {
  width: 27%;
}

.main-background {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background-image: url(assets/images/00-mainbackgroundtexture-02.png);
  background-size: 150% auto;
  background-position-x: center;
  background-color: black;

}

main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(assets/images/00-mainbackgroundtexture-01.png);
  background-size: 150% auto;
  background-position-x: center;
  background-color: var(--main);
}

.main-header {
  position: relative;
  display: inline-block;
  height: 100vh;
  width: 100%;
}

.section-container {
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
}

.section-title {
  position: relative;
  width: 20%;
  min-width: 30px;
  /*background: lightpink;*/
  z-index: 1;
  text-align: center;
}

.title-svgs {
  position: sticky;
  top: 0;
  padding: 25% 15% 8vh 15%;
  width: calc(13vw - 1%);
  background: #F6FA36;
}

#title-svg {
  position: sticky;
  top: 0;
  padding: 25% 15% 8vh 15%;
  aspect-ratio: inherit;
  transition: width 1s, height 0s;
}

.title-svg-expanded {
  height: 100vh;
  background: unset;
  fill: var(--main);
}

.title-svg-shrinked {
  width: calc(13vw - 1%);
  background: #F6FA36;
  fill: var(--black);
}

.section-title h1 {
  position: sticky;
  top: 95vh;
  margin: 0;
}

.section-content {
  position: relative;
  width: 80%;
  padding: 2% 0 4vh 0;
}

.intro-text {
  column-gap: 50px;
}

.intro-text h1 {
  padding: 0;
  margin: 0;
}

.project-container {
padding: 13% 0 7vh 0;
}

.section-backarrow {
   position: sticky;
  top: 0;
  padding: 25% 15% 8vh 15%;
  width: calc(10vw - 1%);
}

.project-content {
  padding-top: 15%;
}

.project-title h1 {
  font-size: calc(23px + (80 - 23) * ((100vw - 300px) / (1600 - 300)));
margin: 0;
line-height: 1em;
}

.project-title h3 {
margin: 0;
padding-bottom: 0;
}

.main_image {
  width: 30%;
  max-width: 600px;
  padding-top: 2%;
}

.project-text p {
  column-count: 2;
  column-gap: 40px;
margin-right: 15%;
word-break: break-word;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

  .section-title {
    width: calc(13vw + 0%);
  }

  .section-content {
    width: calc(100% - (13vw + 0%));
  }

  .intro-text {
    column-count: 1;
    margin: 20px;
  }

  .project-list-element-container {
    width: 100%;
    margin-bottom: 10px;
  }

  footer {
    height: unset;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
  }

  .logo {
    width: 61%;
    margin: 22px;
  }

  .example {
    background: red;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

  .section-title {
    width: 15%;
  }

  .section-content {
    width: 85%;
  }

  .intro-text {
    column-count: 1;
    margin: 20px;
  }

  .project-list-title {
    display: none;
  }

  .example {
    background: green;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

  .section-title {
    width: 14%;
  }

  .section-content {
    width: 86%;
  }

  .intro-text {
    column-count: 1;
    margin-right: 10%;
  }

  .project-list-element-container {
    width: 50%;
  }

  .project-list-title {
    display: block;
  }

  .example {
    background: blue;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

  .intro-text {
    column-count: 2;
    padding-right: 10%;
  }


  .example {
    background: orange;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {

  .intro-text {
    column-count: 2;
    padding-right: 10%;
  }

  .project-list-element-container {
    width: 33%;
  }

  .example {
    background: pink;
  }
}

@media only screen and (min-width: 2000px) {
  .section-title {
    width: 20%;
  }

  .section-content {
    width: 80%;
    max-width: 2300px;
  }
}
</style>