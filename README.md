# Clean Architecture in TypeScript - POC

## Entities
Entities are implemented as pure TypeScript classes under
`src/entities`
### Testing entities
Each entity should also have unit tests to test the entity specific logic

## Use cases
Use cases are implemented as pure TypeScript modules exporting functions that implementing different use cases.

UseCase functions do not depend on any external components except Entities.  Each UseCase can define parameter and output formats as DTO types. 

As part of UseCase layer we have repository interfcase(s) in 
`src/usecases/__interfaces__` that defined data serialization/accecs component (Repository) interface used by use cases functions. Instance of Repository is allways given to Use Case as parameter.

### Testing usecases
Use Case unit tests validate all  business logic. Data interactions are mocked with the help of mock implementation of Repository(s). Mock repository is located in `src/usecases/mocks/ProductRepositoryMock.ts`

## Interfaces and Controllers

### Repository
Repository is a component for serializing and accessing data. Repository can store data in aw ay that most optimal for each case. 

`ProductRepositoryFile` in `src/repositories/ProductRepositoryFile.ts` implements product repository interface and stores data in json - files.

One can easily create implementation of the same repository interface in SQL or object database. 

### Adapter for different outputs
#### Terminal output

#### Exporess output

Presenters and Views for API and Terminal

## First steps

Install dependecies:
```
npm install
```

set up demo data, run script:
```
./setup_demo.sh
```

start the web server:
```
npm run start
```


check that outputs work
api output shows products at address:

[http://localhost:3000/api/products](http://localhost:3000/api/products)

web output shows products report at address
[http://localhost:3000/shop/products](http://localhost:3000/shop/products)

terminal outputs products with following command
```
npm run show_products
```