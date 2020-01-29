class Tweet < ApplicationRecord
  validates :text, :title, presence: true
  belongs_to :user
  has_many :comments
  mount_uploader :image, ImageUploader
end
