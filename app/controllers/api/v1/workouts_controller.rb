module Api
  module V1
    class WorkoutsController < ActionController::API
      def show
        @exercises = Exercise.where(bodypart: params[:bodyparts],
                                    level: params[:exercise_levels])
                             .include_dynamic(parse_bool(params[:include_dynamic]))
                             .include_bar(parse_bool(params[:include_bar]))
                             .select('distinct on (bodypart) *')
                             .order('bodypart, RANDOM()')
                             .shuffle

        render json: @exercises
      end

      private

      def parse_bool(bool)
        ActiveRecord::Type::Boolean.new.deserialize(bool)
      end
    end
  end
end
