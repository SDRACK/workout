module Api
  module V1
    class WorkoutsController < ActionController::API
      def show
        @exercises = Exercise.where(bodypart: params[:bodyparts])
                             .include_dynamic(params[:include_dynamic])
                             .include_bar(params[:include_bar])
                             .with_levels(params[:level].to_i)
                             .select('distinct on (bodypart) *')
                             .order('bodypart, RANDOM()')
                             .shuffle

        render json: @exercises
      end
    end
  end
end
