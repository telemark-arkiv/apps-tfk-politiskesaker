#Politiske saker#
##[![Build Status](https://travis-ci.org/telemark/apps-tfk-webstatistikk.png?branch=master)](https://travis-ci.org/telemark/apps-tfk-politiskesaker) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)##

Webløsning for å vise politiske saker og møteprotokoller for utvalgene.

Sidene kan sees på [apps.t-fk.no/politisk](http://apps.t-fk.no/politisk)

##Slik setter du opp din egen kopi##

Nettsidene bruker [AngularJS](http://angularjs.org/), [Bootstrap](http://getbootstrap.com/) og er laget vha [Yeoman](http://yeoman.io/).

For å kunne sette opp egen kopi må du derfor ha installert [Node.js](http://nodejs.org/), [Yeoman](http://yeoman.io/) og [generator-angular](https://github.com/yeoman/generator-angular).

Når dette er på plass kan du klone repoet fra GitHub

```
$ git clone git@github.com:telemark/apps-tfk-politiskesaker.git
```

Gå inn i mappen som er lastet ned og hent nødvendige moduler vha npm og bower

```
$ npm install && bower install
```

For å starte lokal server bruker du grunt

```
$ grunt serve
```

Grunt brukes også til å kjøre testene

```
$ grunt test_dev
```

For å bygge løsningen for distribusjon er kommandoen enkelt og greit

```
$ grunt
```

Alle nødvendige filer pakkes, minimeres og kopieres til en mappe *dist* som du deretter kan servere fra fritt valgt webserver.


##API##

Løsningen benytter seg av Telemark fylkeskommunes åpne API.

Les mer om APIene og webservicene på [http://ws.t-fk.no/help/index.html](http://ws.t-fk.no/help/index.html)


##Todo##

Oppdatere beskrivelsene og eksemplene for APIet

political

utvalg all returnerer alle utvalg med dato og id for siste møte

utvid id returnerer alle møter for utvalg

moteid id returnerer alle saker og dokumenter for et gitt møte

sak string søker blant alle saker på tittel

sakid id returnerer en gitt sak med dokumenter



Eksempler

utvalg:
http://ws.t-fk.no/?resource=political&search=utvalg&string=all

utvid:
http://ws.t-fk.no/?resource=political&search=utvid&string=value

moteid:
http://ws.t-fk.no/?resource=political&search=moteid&string=value

sak:
http://ws.t-fk.no/?resource=political&search=sak&string=text

sakid:
http://ws.t-fk.no/?resource=political&search=sakid&string=value
