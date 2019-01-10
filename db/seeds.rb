5.times do
  Post.create([{
    user_id: 1,
    title: Faker::Games::Zelda.unique.item,
    body: Faker::Lorem.paragraphs(1, true)
  }])
end