module Api
  module V1
    class WorkoutsController < ActionController::API
      def show
        @exercises = Exercise.all

        Exercise::BODYPARTS.map do |bp|
          @exercises.select { |e| e[:bodypart] == bp }.sample
        end.shuffle
        
        render json: @exercises
      end
    end
  end
end
