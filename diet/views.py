from rest_framework import viewsets
from .serializers import FoodSerializer
from .models import Food

class FoodView(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()