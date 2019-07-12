# PaperTrader

PaperTrade, a Robinhood clone, is an application that allows users to "paper trade", to simulate the purchase and sale shares of stock in publicly-traded companies

[Live Demo](http://robinhood.com)

## Technologies
* Backend: Rails/ActiveRecord/PostgreSQL
* Frontend: React/Redux
* [IEX API](https://iextrading.com)
* [Recharts](http://recharts.org/en-US/)

## Features
* Secure frontend to backend user authentication using BCrypt
* Real-time and historical price data of all stocks traded on the major exchanges
* Interactive charts displaying stock price fluctuation over time as well as user's portfolio balance fluctuation overtime
* Dashboard displaying share ownership and current market price of all stocks that make up a user's portfolio
* Ability to simulate real stock-market trades by buying and selling shares at the most recent market price
* Ability to search stocks by both their ticker symbol

### Dashboard & Portfolio
Once a user logs in, they are immediately redirected to their dashboard, which shows a chart displaying their portfolio balance over time and a list of their holdings.


### Stock Show Page
The stock show page contains current and historical price information about the stock, general company information, and allows users to purchase and sell shares of the stock at the most recent market price. Colored elements of the page will be rendered in green if the chart being displayed shows a positive price fluctuation, and in red when the price fluctuation is negative.


#### Fetching Stock Information
When a stock show page is visited, a variety an API call is made to fetch the necessary information to render the stock's price chart, information ('About' section). The following APIs are hit

* IEX API - Price Data



#### Dynamic Chart Rendering
Charts are dynamic and interactive, allowing users to switch between ranges of **1D**, **1W**, **1M**, **3M**, **1Y**, and **5Y** for individual stocks or their overall portfolio. Buttons for each range appear below the chart with click handlers installed, which serve to update the React component's local state with the relevant chunk of data.
