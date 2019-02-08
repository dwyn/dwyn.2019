class ApplicationController < ActionController::API
  # protect_from_forgery with: :exception
  # acts_as_token_authentication_handler_for User, fallback: :none
  # before_action :configure_permitted_parameters, if: :devise_controller?
  
  private
    def current_ability
      @current_ability ||= ::Ability.new(current_user)
    end
end
