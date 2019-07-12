class Api::TradesController < ApplicationController
    
    def index
        @trades = Trade.all
    end

    def show
        @trade = Trade.find(params[:id])
    end

    def create
        @trade = Trade.new(trade_params)
        if @trade.save
            # render :show
        else
            render json: @trade.errors.full_messages, status: 422
        end
    end

    # def update
    # @trade = trade.find_by(id: params[:id])
    #     if @trade.update(event_params)
    #         # render :show
    #     else
    #         render json: @trade.errors.full_messages, status: 422
    #     end
    # end

    # def destroy
    #     @trade = trade.find(params[:id])
    #     @trade.destroy

    #     # render :show
    # end

    private

    def trade_params
        params.require(:trade).permit(:user_id, :symbol, :shares, :price, :trade_type)
    end

    
end
