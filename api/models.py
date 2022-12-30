from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Exercise(models.Model):
    name = models.CharField(max_length=40, default="")
    equipment = models.CharField(max_length=40, default="")
    PR = models.IntegerField(null=False, default=0)
    reps = models.IntegerField(null=False, default=0)
    sets = models.IntegerField(null=False, default=0)

class WorkOut(models.Model):
    name = models.CharField(max_length=40, default="")
    exercises = models.ManyToManyField(Exercise)


"""
Meal model which includes multiple foods (many to many)
and various other fields
"""
class Meal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']
    def __str__(self):
        return self.name

"""
Food model which can be part of many meals (many to many)
has fields for various nutritional values
"""
class Food(models.Model):
    user = models.ManyToManyField(User, related_name='user')
    meal = models.ManyToManyField(Meal, related_name='meal')
    name = models.CharField(max_length=200)
    calories = models.PositiveIntegerField()
    serving_amount = models.PositiveIntegerField()
    serving_unit = models.CharField(max_length=50)
    # Unit is grams
    total_fat = models.PositiveIntegerField()
    carbohydrates = models.PositiveIntegerField()
    protein = models.PositiveIntegerField()

    def __str__(self):
        return self.name
