from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Post(models.Model):
    image = models.ImageField(upload_to='uploads/%d')
    content = models.TextField(max_length=140)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="author")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.content} posted by {self.author}'
    
    @property
    def _likes_count(self):
        return self.like.count()

    @property
    def _comments_count(self):
        return self.comment.count()

class Like(models.Model):
    post = models.ForeignKey(Post, related_name='like',on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='liker',on_delete=models.CASCADE)
    created_at = created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'{self.post.content} liked by {self.user.username}'

class Comment(models.Model):
    content = models.TextField(max_length=140)
    post = models.ForeignKey(Post, related_name='comment', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f" {self.user.username} 's comment  "