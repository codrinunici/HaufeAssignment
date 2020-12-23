# Dev Test

Creeaza un `docker-compose` care bootup-uie 3 instante:

* una de Mongo
* una de Node.js
* una de Nginx.

Cea de Node.js trebuie sa ruleze un server de HapiJS cu un plugin care expose-uie 3 endpointuri.

* 1 endpoint pe GET care spune daca conexiunea la mongo mai este intacta
* 1 endpoint pe POST care genereaza dummy date (data model este la libera alegere)
* 1 endpoint care da timpul de agregare a datelor (criteriul de agregare este la libera alegere)

## Cerinte

1. Cea de Mongo e self explanatory
2. Cea de Nginx trebuie sa serveasca static content. Acel static content este practic un React app (dupa build)
3. Acest React app trebuie sa aibe un login (hardcodat) care sa stocheze userul intr-un redux state.  
4. Loginul se efectueaza doar daca endpointul de “existing connection” din api returneaza 200.
5. Avem un meniu care are 2 pagini:
   1. Prima cu un buton care, odata apasat, apeleaza endpointul de dummy data generation.
   2. A doua pagina displayuie doar timpul de agregare (luat de pe al treilea endpoint)
6.Te rugam sa folosesti git pentru source control. Dorim sa vedem fiecare commit individual, si sa reiasa din asta parcursul si abordarea in solutionarea problemei.

Success.