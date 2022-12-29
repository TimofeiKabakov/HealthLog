from django.contrib.auth.models import User
from diet.models import Meal
from rest_framework import serializers

class MealSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only = True,
        default = serializers.CurrentUserDefault()
    )

    class Meta:
        model = Meal
        fields = ('user', 'name', 'updated', 'created')