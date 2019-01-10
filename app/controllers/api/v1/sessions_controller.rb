class Api::V1::SessionsController < ApplicationController

  def show
    current_user ? head(:ok) : head(:unauthorized)
  end

def create
  user = User.where(email: params[:email]).first
  if user&.valid_password?(params[:password])
    render json: user.as_json(only: [:email, :authentication_token]), status: :created
  else
    head(:unauthorized)
end

def destroy
  if death_to_user && current_user.save
    head(:ok)
  else
    head(unauthorized)
  end
end

  private
  def death_to_user
    current_user&.authentication_token = nil
  end

end