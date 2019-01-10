Rails.application.routes.draw do
  namespace :api do
    devise_for :users
    # resources :users

    get 'user', to: 'users#show', as: 'user_show'
    post 'signup', to: 'users#create', as: 'user_signup'
    post 'login', to: 'users#login', as: 'user_login'

    resources :posts
    resource :sessions, only: [:create, :destroy ]
  end
end
