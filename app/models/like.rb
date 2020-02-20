class Like < ApplicationRecord
  validates :user_id, :tweet_id, presence:true
end
