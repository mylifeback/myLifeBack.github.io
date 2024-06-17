<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=yes, minimum-scale=1.0"
    />
    <link rel="icon" type="images/x-icon" href="../src/favicon.ico" />


    <title>send json</title>
    <meta name="description" content="send to server">

    <style>
        img {
            width: 100%;
            height: auto;
            border: solid 1px red;
        }
        input {
          min-width: 80px;
        }
    </style>
    <script>
      function ada () {
        console.log ('test');
        fetch('https://io.adafruit.com/api/v2/mccwong/feeds/json/data', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      '
    },
    body: '{ "value": 789567 , "name": "spencer"}'
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))

      }
      
      function msg() {
        alert("Hello world!");
      }
      
      
      
      function test ( ){
        
      }
    </script>
  </head>

<body>

  
  
 
  <input type="button" onclick="ada()" value="send to ada">
    
  </input>


<form>
  <input type="button" value="alert" onclick="msg()">
</form>

</body>

</html>