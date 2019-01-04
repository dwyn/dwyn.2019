class UserSerializer < ActiveModel::Serializer
  attributes :username, :firstname, :lastname
  has_many :posts
end