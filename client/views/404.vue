<template>
  <div class="nofind">
    <p><span>4</span><span>0</span><span>4</span></p>
    <p>该页面不存在(´･ω･`)</p>
  </div>
</template>
<style type="text/css" scoped>
  body {
    background-color: #ECECEC;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #3c3c3c;
  }
  .nofind{width:600px;margin:0 auto;}
  .nofind p:first-child {
    text-align: center;
    font-family: cursive;
    font-size: 150px;
    font-weight: bold;
    line-height: 100px;
    letter-spacing: 5px;
    color: #fff;
    margin-top: 20%;
  }

  .nofind p:first-child span {
    cursor: pointer;
    text-shadow: 0px 0px 2px #686868,
    0px 1px 1px #ddd,
    0px 2px 1px #d6d6d6,
    0px 3px 1px #ccc,
    0px 4px 1px #c5c5c5,
    0px 5px 1px #c1c1c1,
    0px 6px 1px #bbb,
    0px 7px 1px #777,
    0px 8px 3px rgba(100, 100, 100, 0.4),
    0px 9px 5px rgba(100, 100, 100, 0.1),
    0px 10px 7px rgba(100, 100, 100, 0.15),
    0px 11px 9px rgba(100, 100, 100, 0.2),
    0px 12px 11px rgba(100, 100, 100, 0.25),
    0px 13px 15px rgba(100, 100, 100, 0.3);
    -webkit-transition: all .1s linear;
    transition: all .1s linear;
  }

  .nofind p:first-child span:hover {
    text-shadow: 0px 0px 2px #686868,
    0px 1px 1px #fff,
    0px 2px 1px #fff,
    0px 3px 1px #fff,
    0px 4px 1px #fff,
    0px 5px 1px #fff,
    0px 6px 1px #fff,
    0px 7px 1px #777,
    0px 8px 3px #fff,
    0px 9px 5px #fff,
    0px 10px 7px #fff,
    0px 11px 9px #fff,
    0px 12px 11px #fff,
    0px 13px 15px #fff;
    -webkit-transition: all .1s linear;
    transition: all .1s linear;
  }

  .nofind p:not(:first-child) {
    text-align: center;
    color: #666;
    font-family: cursive;
    font-size: 20px;
    text-shadow: 0 1px 0 #fff;
    letter-spacing: 1px;
    line-height: 2em;
    margin-top: 50px;
  }
</style>
