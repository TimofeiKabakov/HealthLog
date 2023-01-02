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
    created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Meal
        fields = ('id', 'name', 'created_at')
    
    def create(self, validated_data):
        return Meal.objects.create(**validated_data, user=self.context['request'].user)

class FoodSerializer(serializers.ModelSerializer):
    meal = serializers.PrimaryKeyRelatedField(queryset=Meal.objects.all()) # should be user specific here

    class Meta:
        model = Food
        fields = ('id', 'meal', 'name', 'calories', 'amount', 'serving_size', 'serving_size_unit',
                  'total_fat', 'carbohydrates', 'protein')