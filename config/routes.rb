Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resources :users, only: [:show]
    resource :session, only: [:create, :destroy]
    resources :stocks, only: [:index]
    get '/stocks/:ticker', to: 'stocks#show'
    resources :watchlists
    resources :trades, only: [:create, :show, :index]
  end

  root "static_pages#root"
end
