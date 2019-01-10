class Api::PostsController < ApplicationController
  load_and_authorize_resource
  
  def index
    @posts
    @user
    binding.pry
    posts = get_current_user.posts.all

    render json: posts
  end

  def create
    post = get_current_user.posts.build(post_params)
    post.save

    render json: post
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy

    render json: post
  end

  private
  def create_params
    params.require(:post).permit(
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