from rest_framework import serializers
from .models import UrlItem


class UrlItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = UrlItem
        fields = "__all__"
