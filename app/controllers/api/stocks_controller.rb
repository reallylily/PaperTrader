class Api::StocksController < ApplicationController
    def create
        @stock = Stock.new(stock_params)
        @stock.save
    end
    
    def index
        @stocks = Stock.all
    end

    def show
        @stock = Stock.find_by(ticker: params[:ticker])
    end

    
    private

    def stock_params
        params.require(:stock).permit(:symbol, :exchange, :name, :type, :iexId, :region, :currency)
    end
end
