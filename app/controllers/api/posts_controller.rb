class Api::PostsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false

  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    @user = User.all.first
    @post = Post.new(post_params.merge(user_id: @user.id))
    if @post.save
      render json: @post, status: :created
      # head(:ok)
    else
      render json: @post.errors, status: :unprocessable_entity
      # head(:unprocessable_entity)
    end
  end

  def destroy
    post = current_user.posts.where(id: params[:id]).first
    if post.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end

  private
  def create_params
    params.require(:post).permit(
      :id,
      :title,
      :body
    )
  end

  def post_params
    params.require(:post).permit(
        :title,
        :body
      )
  end
end