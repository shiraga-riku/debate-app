class AddLinkToTweets < ActiveRecord::Migration[5.2]
  def change
    add_column :tweets, :link, :text
  end
end
