module Api
  module V1
    class WorkoutsController < ActionController::API
      def show
        @exercises = Exercise.where(bodypart: params[:bodyparts],
                                    level: params[:exercise_levels])
                             .include_dynamic(params[:include_dynamic])
                             .include_bar(params[:include_bar])
                             .select('distinct on (bodypart) *')
                             .order('bodypart, RANDOM()')
                             .shuffle

        render json: @exercises
      end
    end
  end
end
