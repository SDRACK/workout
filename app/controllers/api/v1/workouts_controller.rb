module Api
  module V1
    class WorkoutsController < ActionController::API
      def show
        @exercises = Exercise::BODYPARTS.map do |bp|
          Exercise.public_send(bp).sample
        end.shuffle
        # render json: { exercises: @exercises }
        render json: @exercises
      end
    end
  end
end
