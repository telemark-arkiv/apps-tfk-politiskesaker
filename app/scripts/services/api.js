'use strict';

angular.module('appsTfkPolitiskesakerApp')
  .service('Api', function Api($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var
      apiURLstart = 'http://ws.t-fk.no/',
      apiURLend = '&format=json&callback=JSON_CALLBACK',
      apiservice = {};

    apiservice.getUtvalg = function(){
      var
        url = apiURLstart + '?resource=political&search=utvalg&string=all' + apiURLend,
        call = $http({'method':'JSONP', 'url': url});

      return call;
    };

    apiservice.getUtvalget = function(utvid){
      var
        url = apiURLstart + '?resource=political&search=utvid&string=' + utvid + apiURLend,
        call = $http({'method':'JSONP', 'url': url});

      return call;
    };

    apiservice.getMoter = function(utvid){
      var
        json = [
          {'moteid' : 10881, 'motetittel' : 'Hovudutval for kompetanse 2013-11-07',
            'motedato' : '07.11.2013', 'motested':'Norsjø hotell, Akkerhaugen'},
          {'moteid' : 1892, 'motetittel' : 'Fylkestinget 2012-10-04',
            'motedato' : '07.11.2013', 'motested':'Bø hotell, Bø'}
        ];

      return json;
    };

    apiservice.getMotet = function(moteid){
      var
        url = apiURLstart + '?resource=political&search=moteid&string=' + moteid + apiURLend,
        call = $http({'method':'JSONP', 'url': url});

      return call;
    };

    apiservice.search = function(query){
      var
        call = $http({'method': 'GET', 'url': 'data/dummy-searchresults.json'});

      return call;
    }

    apiservice.getSak = function(sakid){
      var
        json = {'saksaar' : 2013, 'saksnr' : 31, 'sakstype' : 'PS', 'saksstatus' : 'BE',
          'tittel' : '31/13 Presentasjon av hovudfunn i forskingsprosjektet SMIL - samanheng mellom IKT-bruk og læringsutbytte i vidaregåande opplæring',
          'dokumenter': [
            {'dokid' : 13041277, 'versjon' : 1, 'variant' : 'A',
              'tittel' : 'Presentasjon av hovudfunn i forskingsprosjektet SMIL - samanheng mellom IKT-bruk og læringsutbytte i vidaregåande opplæring',
              'filnavn': '13041277.PDF', 'mimetype':'application/pdf', 'dokmal':'S',
              'dato':'08.10.2013'}
          ]};

      return json;
    }

    apiservice.getKontaktPersoner = function() {
      var
        call = $http({'method': 'GET', 'url': 'data/kontakt.json'});

      return call;
    }

    apiservice.getKontaktPersonForUtvalg = function() {
      var
        call = $http({'method': 'GET', 'url': 'data/utvalgskontakt.json'});

      return call;
    }

    return apiservice;
  });