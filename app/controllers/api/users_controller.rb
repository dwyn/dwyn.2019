class Api::UsersController < ApplicationController
  private

  def user_params
    params.require(:user).permit(
        :email,
        :password,
        :password_confirmation,
        :firstname,
        :lastname
      )
  end
end