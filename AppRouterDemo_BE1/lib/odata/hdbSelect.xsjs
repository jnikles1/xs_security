var connection = $.hdb.getConnection();
var result = connection.executeQuery(`SELECT * FROM SFLIGHT_VIEW WHERE MANDT = SESSION_CONTEXT('XS_CLIENT')`);

$.response.setBody(JSON.stringify(result));