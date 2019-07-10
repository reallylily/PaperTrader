class Api::WatchlistsController < ApplicationController
    def index
        @watchlists = Watchlist.all
      end
    
      def show
        @watchlist = Watchlist.find(params[:id])
      end
    
      def create
        @watchlist = Watchlist.new(watchlist_params)
        if @watchlist.save
          # render :show
        else
          render json: @watchlist.errors.full_messages, status: 422
        end
      end
    
      def update
        @watchlist = Watchlist.find_by(id: params[:id])
        if @watchlist.update(event_params)
          # render :show
        else
          render json: @watchlist.errors.full_messages, status: 422
        end
      end
    
      def destroy
        @watchlist = Watchlist.find(params[:id])
        @watchlist.destroy
    
        # render :show
      end

    private

    def watchlist_params
        params.require(:watchlist).permit(:user_id, :symbol)
    end
end
