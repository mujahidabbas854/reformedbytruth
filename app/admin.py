from django.contrib import admin
from .models import Blog, Audio, Video, Category, Subcategory, Creed, Book, Article, ReformedQuote

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ["id","name","author_name", "created_at"]


@admin.register(Audio)
class AudioAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "author","sub_category", "created_at"]



@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'created_at']



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'created_at']


@admin.register(Subcategory)
class SubcategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'title',"category", 'created_at']

@admin.register(Creed)
class CreedAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at')

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at')

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ["id","name","author_name", "created_at"]

admin.site.register(ReformedQuote)
