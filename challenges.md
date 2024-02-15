# Challenges

We have here a rudimentary webshop where we have Products, Accounts and Transactions (see `/src/entites`). 

1. Lets add entity Service. This entity could have fields
- name
- description
- type (be creative what kind of services there could be)
- something else?
- number of hours how much this service has been provided

Service could need function that returns popularity ranking of the service:
- over 100 hours - top
- up to 50 hours - medium
- less than 10 - minor

Add test for this function

2. Add usecases for 
- adding service
- getting all services
Create separate services repository interface, repository mocks service, write unit tests 

3. Interact with the world!
- create api endpoint for adding services
- create api edpoint for getting all services
Optional: create web and/or terminal outputs for getting all services

Create services repository file implementation for storing data

Create ServicesPresenterAPI (and ServicesPresenterHMTL) for outer layer implementation

4. Lets switch the storage medium. Replace file-based repository with SQL Light or MongoDB (or something else) for storing services data

## Extras
- What should we do to get inventory list of all products on all output devices (terminal, api, html)
- Where and how should we add input validation and error handled?
- What should we do to create endpoint for adding orders (transaction of multiple products/services)?
- What should we do to get list of orders in api and terminal?  