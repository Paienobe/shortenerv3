from django.db import models

# Create your models here.


class UrlItem(models.Model):
    key = models.CharField(max_length=6, default="")
    long_url = models.TextField()
    short_url = models.URLField(default="")
