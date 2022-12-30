from rest_framework import serializers
from .models import Exercise, WorkOut, Meal, Food

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id','name','equipment','PR','reps','sets')

class WorkOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkOut
        fields = ('id','name','exercises')

class MealSeralizer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ('user', 'name', 'updated', 'created')

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('user', 'meal', 'name', 'calories', 'serving_amount', 'serving_unit',
                  'total_fat', 'carbohydrates', 'protein')