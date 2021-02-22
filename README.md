# Angular To-do Application

## Objective
The aim was to create a To-do list SPA that could retain data even after client browser was refreshed. The to-do list itself must have the following features:
- Create, Read, Update and Delete capabilities
- Nested lists could be created

## Instructions
1) Git clone this repository and run `npm install` or `yarn install` to install the dependencies
2) Run `ng serve` and open your browser to `http://localhost:4200/` to view the application

## Technologies used and how it works
- Angular 11
- HTML/CSS/JavaScript/TypeScript
- LocalStorage (for data persistence) allowed me to store the todo list as an object in the browser memory
- A service called TodoService was created as it creates a separate thread from the main thread, and is an intermediary between the browser and the data stored in localStorage.

## Challenges faced
- Creating a nested list requires more research and experimenting.
- The delete function is not working as intended.
- The todo list page needs to be refreshed to view latest additions.

## Conclusion
Overall this was a fun exercise as I got to dive into building a simple SPA with interesting features. I think my learning of Typescript was eased by some online courses, such as Flutter and Dart, which uses a declarative form of programming. I will definitely explore Angular and Typescript further in the near future!

