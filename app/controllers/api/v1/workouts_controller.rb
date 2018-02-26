module Api
  module V1
    class WorkoutsController < ActionController::API
      def show
        @exercises = Exercise.select('distinct on (bodypart) *')
                             .order('bodypart, RANDOM()')
                             .shuffle

        render json: @exercises
      end
    end
  end
end
