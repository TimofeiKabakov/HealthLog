from django.db import models

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
    