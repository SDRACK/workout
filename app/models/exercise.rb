class Exercise < ApplicationRecord
  include FlagShihTzu

  BODYPARTS = %w(legs core chest back shoulders).freeze

  serialize :reps_by_level

  enum bodypart: BODYPARTS

  has_flags 1 => :requires_bar
end
