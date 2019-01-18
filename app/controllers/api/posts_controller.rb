class Api::PostsController < ApplicationController
  # load_and_authorize_resource
  
  def index
    @posts = Post.all
    render json: @posts
  end

  def create
    post = current_user.posts.build(post_params)
    post.save

    render json: @post
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