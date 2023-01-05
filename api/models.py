from django.db import models

# Create your models here.
class Exercise(models.Model):
    equipment = models.CharField(max_length=40, default="")
    gifUrl = models.CharField(max_length=200, default="")
    name = models.CharField(max_length=50, default="")
    target = models.CharField(max_length=12, default="")


class WorkOut(models.Model):
    name = models.CharField(max_length=40, default="")
    exercises = models.ManyToManyField(Exercise)
    