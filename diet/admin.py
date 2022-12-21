from django.contrib import admin
from.models import Food

class FoodAdmin(admin.ModelAdmin):
    list_display = ("title", "calories")

# Register your models here.

admin.site.register(Food, FoodAdmin)