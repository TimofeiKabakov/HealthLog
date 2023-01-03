from rest_framework import serializers
from django.contrib.auth.models import User
from diet.models import Meal
from diet.models import Food

class MealSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only = True, default = serializers.CurrentUserDefault())
    
    class Meta:
        model = Meal
        fields = ['user', 'name', 'updated', 'created']

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('id', 'title', 'calories')