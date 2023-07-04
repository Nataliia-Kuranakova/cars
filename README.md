# Cars

## Introduction

This project is a dynamic web page that presents a car inventory management system. It features a table that lists various details about each car in the inventory, including the company, model, VIN, color, year, price, availability, and action options. The table uses local pagination, and a search functionality that works across all entries, not just the current page.

Users can perform actions on the car entries from the "Actions" column, where they can choose to edit or delete the specific car. The edit functionality opens a modal with the car's information, allowing users to change some fields such as color, price, and availability. The delete functionality prompts a confirmation modal asking the user to confirm their action.

Additionally, there is an "Add record" button that opens a modal where users can input details of a new car to add it to the table. All user interactions on the page affect the data displayed in the table and the data persists even after page reloads.

The project fetches its initial data from an external API and uses local storage to maintain state between sessions.

## Author

- **Nataliia Kuranakova**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation and Running the Project

Follow these steps to install and run the project:

1. Clone the repository to your local machine:
    ```
    git clone https://github.com/Nataliia-Kuranakova/cars.git
    ```

2. Navigate to the project directory:
    ```
    cd cars
    ```

3. Install the project dependencies:
    ```
    npm i
    ```

4. Start the project:
    ```
    npm start
    ```


## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Redux](https://react-redux.js.org/) - Official React bindings for Redux
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - A powerful data fetching and caching tool
- [MUI](https://mui.com/) - A popular React UI framework
