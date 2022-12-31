from rest_framework import viewsets
from .serializers import FoodSerializer
from .models import Food

class FoodView(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    def get_queryset(self):
        user = self.request.user
        return Food.objects.filter(user=user)