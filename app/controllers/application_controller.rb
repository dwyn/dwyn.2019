class ApplicationController < ActionController::API
  acts_as_token_authentication_handler_for User, fallback: :none
  # before_action :configure_permitted_parameters, if: :devise_controller?
  # protect_from_forgery with: :exception
  
  private
    def current_ability
      @current_ability ||= ::Ability.new(current_user)
    end
end
