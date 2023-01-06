# Generated by Django 4.1.4 on 2022-12-31 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_exercise_equipment'),
    ]

    operations = [
        migrations.RenameField(
            model_name='exercise',
            old_name='PR',
            new_name='weight',
        ),
        migrations.RemoveField(
            model_name='exercise',
            name='sets',
        ),
        migrations.AddField(
            model_name='exercise',
            name='bodyPart',
            field=models.CharField(default='', max_length=40),
        ),
        migrations.AddField(
            model_name='exercise',
            name='gifURl',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='exercise',
            name='target',
            field=models.CharField(default='', max_length=12),
        ),
        migrations.AlterField(
            model_name='exercise',
            name='name',
            field=models.CharField(default='', max_length=50),
        ),
    ]