# Weather Dashboard

This is a React application for displaying weather information for a specific location. It allows users to search for a city and view weather details, including temperature, humidity, and wind speed. Users can also choose between Celsius and Fahrenheit temperature units.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [`App.js`](#appjs)
  - [`SearchBar.js`](#searchbarjs)
  - [`Weather.js`](#weatherjs)
- [API Integration](#api-integration)
- [How to Run](#how-to-run)
- [License](#license)

## Getting Started

To get started with the Weather Dashboard App, follow these steps:

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- Node.js: You'll need Node.js to run the application and install dependencies. You can download it from [nodejs.org](https://nodejs.org/).

## Components

The Weather Dashboard App is built using several components, each responsible for a specific part of the application. Here's an overview of the components used in the project:

### App.js

- **Description**: The main component of the Weather Dashboard App. It sets up the application's structure and state, including the weather data and unit (metric or imperial). It contains the application header, search bar, and weather display.

### SearchBar.js

- **Description**: The SearchBar component is responsible for taking user input, such as the location and unit preference (Celsius or Fahrenheit), and initiating the weather data retrieval process.

### Weather.js

- **Description**: The Weather component displays the current weather information for the selected location. It includes temperature, weather description, feels-like temperature, humidity, and wind speed data. Users can also switch between Celsius and Fahrenheit units.

Each of these components plays a crucial role in making the Weather Dashboard App functional and user-friendly.

## API Integration

To fetch weather data from the OpenWeather API, you'll need to obtain an API key. Follow these steps to get your API key:

1. **Sign Up**: If you don't have an account on OpenWeather, start by signing up for a free account at [OpenWeather Sign-Up](https://openweathermap.org/).
2. **Generate API Key**: After logging in to your OpenWeather account, go to your account dashboard. You should find an option to generate an API key. Click on it to obtain your unique API key.
3. **Configure the App**: Once you have your API key, you need to configure the Weather Dashboard App to use it. Open the `Apps.js` file in your project directory.
4. **Set API Key**: Locate the following line of code in `Apps.js`:

   ```javascript
   const apiKey = 'your_api_key_here';

Replace `'your_api_key_here'` with the API key you obtained from OpenWeather.

## How to Run

Follow these steps to run the Weather Dashboard App on your local machine:

1. **Clone the Repository**: First, clone this repository to your local machine using Git. Open your terminal and run the following command:

   ```shell
   git clone <repository-url>
2.Navigate to the Project Directory: Change your working directory to the project folder:
npm install
or
yarn install

3.Obtain an API Key: To fetch weather data, you'll need an API key from OpenWeather. Follow the API Key section in this README to obtain and configure your API key in the Apps.js file.

4.Start the App: Once you have your API key configured, you can start the app by running:
npm start
# or
yarn start

5.Access the App: Open your web browser and navigate to http://localhost:3000 to access the Weather Dashboard App.

## License
The Weather Dashboard App is licensed under the MIT License.
