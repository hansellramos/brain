/**
 * Created by hansel.ramos on 9/5/2016.
 */
( function() {

  angular.module( 'starter', [] )

  .controller( 'MainController', function( $scope, $http ) {

    //var apiHost = 'http://localhost:8056/hansel/brain2clash/wordpress/wp-json';
    var apiHost = 'https://www.brain2clash.com/wp-json';

    $http.post( apiHost + '/jwt-auth/v1/token', {
        username: 'hansellramos',
        password: 'admin'
      } )

      .then( function( response ) {
        debugger;
        console.log( response.data )
      } )

      .catch( function( error ) {
        debugger;
        console.error( 'Error', error.data );
      } );

  } );

} )();
