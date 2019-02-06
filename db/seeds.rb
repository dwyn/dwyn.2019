100.times do
  Post.create([{
    user_id: 1,
    title: Faker::Games::Zelda.unique.item,
    body: Faker::Lorem.unique.paragraph(5, true, 0)
  }])
end