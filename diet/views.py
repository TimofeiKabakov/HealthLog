from rest_framework import viewsets
from .serializers import FoodSerializer, MealSeralizer
from .models import Food, Meal

class MealView(viewsets.ModelViewSet):
    serializer_class = MealSeralizer

    def get_queryset(self):
        user = self.request.user
        return Meal.objects.filter(user=user)

class FoodView(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()