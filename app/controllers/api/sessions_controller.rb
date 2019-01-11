class Api::SessionsController < ApplicationController
  def show
    current_user ? head(:ok) : head(:unauthorized)
  end

  def create
    user = User.where(email: params[:email]).first
    if user&.valid_password?(params[:password])
      render json: user.(only: [:email, :authentication_token]), status: :created
    else
      head(:unauthorized)
    end
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