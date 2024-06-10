from django.shortcuts import render, redirect
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import UrlItem
from .serializers import UrlItemSerializer
import secrets
from django.http import Http404


# Create your views here.


class ShortenUrlApiView(APIView):
    def get_object(self, key):
        try:
            return UrlItem.objects.get(key=key)
        except:
            raise Http404

    def get(self, request, key=None):
        url_item = self.get_object(key)
        return redirect(url_item.long_url)

    def post(self, request):
        key = secrets.token_urlsafe(4)
        long_url = request.data.get("long_url")
        short_url = f"http://{request.headers.get("Host")}/{key}/"
        UrlItem.objects.create(
            key=key, long_url=long_url, short_url=short_url)
        instance = UrlItem.objects.last()
        serializer = UrlItemSerializer(instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
