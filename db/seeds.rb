# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Exercise.destroy_all

BODYPARTS = { legs: 0, core: 1, chest: 2, back: 3, shoulders: 4 }.freeze
LEVELS = { easy: 0, medium: 1, hard: 2 }.freeze


Exercise.create(
  [
    { name: "Squats", description: "", bodypart: BODYPARTS[:legs], level: LEVELS[:easy], reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Lunges", description: "", bodypart: BODYPARTS[:legs], level: LEVELS[:medium], reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Sit ups", description: "", bodypart: BODYPARTS[:core], level: LEVELS[:easy], reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Plank", description: "", bodypart: BODYPARTS[:core], level: LEVELS[:hard], reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Press up", description: "", bodypart: BODYPARTS[:chest], level: LEVELS[:easy], reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Narrow grip pressup", description: "", bodypart: BODYPARTS[:chest], level: LEVELS[:medium], reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Chin ups", description: "", bodypart: BODYPARTS[:back], level: LEVELS[:easy], reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Back raises", description: "", bodypart: BODYPARTS[:back], level: LEVELS[:hard], reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Punches", description: "", bodypart: BODYPARTS[:shoulders], level: LEVELS[:easy], reps_by_level: {1 => 10, 2 => 20, 3 => 30} },
    { name: "Shoulder press up", description: "", bodypart: BODYPARTS[:shoulders], level: LEVELS[:medium], reps_by_level: {1 => 10, 2 => 20, 3 => 30} }
  ]
)

Exercise.find_by_name("Chin ups").requires_bar = true
