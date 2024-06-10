from django.urls import path
from . import views

urlpatterns = [
    path("shorten/", views.ShortenUrlApiView.as_view()),
    path("<str:key>/", views.ShortenUrlApiView.as_view()),
]
