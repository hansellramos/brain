/**
 * Created by hansel.ramos on 9/5/2016.
 */

(function () {
  'use strict';

  angular.module('starter')
  .constant('APPLICATION', {
    CONFIG: {
      API: {
        URL: 'http://localhost:1337/localhost:8056/hansel/brain2clash/wordpress/wp-json',
        //URL : 'http://localhost:8056/hansel/brain2clash/wordpress/wp-json',
        RESOURCES: {
          LOGIN: 'login/',
        }
      }
      , DEVICE_KEY: 'b4cd45f5b00b326a79ea6121f9cc0db8'
      , AUTH: {
        TOKEN_KEY: 'TOKEN_KEY',
        TOKEN_DATA: 'TOKEN_DATA',
        USER_DATA: 'USER_DATA'
      }
      , PERMISSIONS: {
        MODULES: {
          SERVICE: 'service'
        }
        , OPTIONS: {}
      }
    }
    , GLOBAL: {
      SESSION_TIMELIFE: 24 * 60 * 60
    }
    , ENUM: {
      CONFIG: {
        GLOBAL: {
          SESSION_TIMELIFE: 'SESSION_TIMELIFE'
        }
      }
    }
  })

});
