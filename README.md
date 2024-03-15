This application is an ERP system which is used to manage a business.


Table of contents
1. Prerequisites
2. Installation
3. Running the application
4. Usage

Prerequisites

Before running the application, ensure you have the following prerequisites installed on your system:

* Node.js (recommended version: 12.x or higher)
* npm (Node Package Manager)
* Web browser

Installation

To install the application, follow these steps:

1. Clone the Github repository to your local machine by using command

git clone https://github.com/ashrafkhan10897/apex-erp.git

2. Navigate to the project directory using the command

cd apexerp

3. Install project dependencies using npm using the command

npm install

Running the application

To run the application locally, execute the following command:

npm run dev

This command will start a local development server and open the application in your default web browser. If it doesn't open automatically, navigate to 'http://localhost:5173 in your browser.

Usage

The website has name of the  

Pages in application:
1. Dashboard
2. Products management
3. Orders management
4. Orders calender view

1. Dashboard page: All the features of ERP system are displayed here. The features are displayed using cards. You can quickly navigate to Order management, product management and orders calender view pages from dashboard. 

2. Products management page:

Page displays list of all products using material UI card view.The card consist of name,category, price, and stock quantity information. Each individual card can be Edited and deleted from the list. You can also add a new product by filling the details and clicking on the add product button.

3. Orders management page:

Page displays the list of all Orders. The card consists of orderId, customer name, order date,and status.

You can edit the status of orders by clicking on edit status button and delete an order by clicking on delete button.

4. Calender View page:

By default the current date is selected. Tick marks on the dates represent that there is an order due on that day. If you click the date you can see the details of the orders respresented as list.

The screenshots of the website are stored in the screenshots folder.