Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    get 'user', to: 'sessions#show', as: 'user_show'
    post 'signup', to: 'sessions#create', as: 'user_signup'
    post 'login', to: 'sessions#login', as: 'user_login'

    resources :posts
    resource :sessions, only: [:create, :destroy ]
  end
end
