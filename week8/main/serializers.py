from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Post, Like, Comment

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model  = User
        fields = ['url', 'username', 'email', 'is_staff']

class PostSerializer(serializers.ModelSerializer):

    author = serializers.SlugRelatedField(slug_field='username', read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'image', 'content', 'author', 'created_at',
                  '_likes_count', '_comments_count', 'url']


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Like
        fields = ['id', 'post', 'user', 'created_at']


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['id', 'post', 'user', 'created_at', 'url']