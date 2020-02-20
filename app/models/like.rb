class Like < ApplicationRecord
  validates :user_id, :tweet_id, presence:true
  belongs_to :user
  belongs_to :tweet
end
