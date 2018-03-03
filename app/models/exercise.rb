class Exercise < ApplicationRecord
  include FlagShihTzu

  BODYPARTS = %w(legs core chest back shoulders).freeze
  LEVELS = %w(easy medium hard).freeze

  serialize :reps_by_level

  enum bodypart: BODYPARTS
  enum level: LEVELS

  has_flags 1 => :requires_bar,
            2 => :dynamic

  scope :with_levels, -> (level) { where(level: (0..level).to_a) }
  scope :include_dynamic, -> (dynamic) { dynamic ? all : not_dynamic }
  scope :include_bar, -> (requires_bar) { requires_bar ? all : not_requires_bar }
end
