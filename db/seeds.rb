# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create!([
  {title: "first post:", body: "something about being first"},
  {title: "second post:", body: "something about being third"},
  {title: "third post:", body: "thirdly last"},
  {title: "cat post:", body: "cats..."}
])