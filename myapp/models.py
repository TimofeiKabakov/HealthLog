from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# class Meals(models.Model):
class Meals(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name

