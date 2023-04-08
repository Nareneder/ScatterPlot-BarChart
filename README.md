Getting Started

To get started with the project, clone the repository and install the dependencies:

git clone https://github.com/Nareneder/ScatterPlot-BarChart.git
cd ScatterPlot-BarChart
npm install
Running the Application
To run the application, use the following command:
npm start
This will start the application in your default browser.

Understanding the Code
The application have three components: App, Scatter, and BarChart. App is the main component that renders the scatter plot and bar chart. Scatter and BarChart are child components that handle the actual rendering of the charts using the ECharts library.

The wine data is loaded from a JSON file using the wineData variable in App.tsx. The data is converted into the format according to the charts wuth the help of useEffect.

The Scatter and Chart components are simple stateless functional components that receive the data as props and use it to generate the chart using ECharts.

Dependencies
This project uses the following dependencies:

1. React
2. ECharts for React

Here is the screenshots of the scatter plot and bar chart working properly

https://www.linkpicture.com/q/Screenshot-2023-04-08-153558.png

https://www.linkpicture.com/q/Screenshot-2023-04-08-153625_1.png

