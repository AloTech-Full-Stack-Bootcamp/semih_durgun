from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from main.serializers import UserSerializer, PostSerializer, CommentSerializer, LikeSerializer
from django.contrib.auth.models import User
from .models import Post,Like,Comment
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

    @action(detail=True, methods=['get'])
    def like(self, request, pk=None):
        post = self.get_object()
        queryset, new = Like.objects.get_or_create(post=post, user=request.user)
        serializer = LikeSerializer(queryset)
        return Response(serializer.data)

class CommentViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()


class LikeViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = LikeSerializer
    queryset = Like.objects.all()