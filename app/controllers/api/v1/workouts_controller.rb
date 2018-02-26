module Api
  module V1
    class WorkoutsController < ActionController::API
      def show
        @exercises = Exercise.group(:bodypart, :id)
                             .select('distinct on (bodypart) *')
                             .order('bodypart, random()')
                             .shuffle

        render json: @exercises
      end
    end
  end
end
