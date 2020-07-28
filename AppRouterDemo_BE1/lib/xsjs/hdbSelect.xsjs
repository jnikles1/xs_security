var connection = $.hdb.getConnection();
var client = $env.user.CLIENT;
console.log(client);
var result = connection.executeQuery(`SELECT * FROM SFLIGHT_VIEW WHERE MANDT = 300`);
console.log(result);
$.response.setBody(JSON.stringify(result));