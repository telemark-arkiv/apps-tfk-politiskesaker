#apps-tfk-politiskesaker#

Løsning for å vise politiske saker og møteprotokoller for utvalgene. Løsningen ligger på [apps.t-fk.no/politiske-saker](http://apps.t-fk.no/politiske-saker)

##Slik bruker du løsningen##


##API##

political

committees all Returns all committees

committeeid id Returns all meetings for committee

meetingid id Returns all cases and files

cases string Returns meetings with case



Examples

committees:
http://ws.t-fk.no/?resource=political&search=committees&string=all

committeeid:
http://ws.t-fk.no/?resource=political&search=committeeid&string=value

meetingid:
http://ws.t-fk.no/?resource=political&search=meetingid&string=value

case:
http://ws.t-fk.no/?resource=political&search=title&string=text
