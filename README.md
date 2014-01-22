#apps-tfk-politiskesaker#

Løsning for å vise politiske saker og møteprotokoller for utvalgene. Løsningen ligger på [apps.t-fk.no/politiske-saker](http://apps.t-fk.no/politiske-saker)

##Slik bruker du løsningen##


##API##

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
