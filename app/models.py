from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

class Blog(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='Blog/images')
    description = CKEditor5Field('Text', config_name='wordlike')
    author_name = models.CharField(max_length=250)
    author_image = models.ImageField(upload_to='Blog/images')
    created_at = models.DateField(auto_now_add=True)

class Video(models.Model):
    title = models.CharField(max_length=255)
    youtube_url = models.URLField(help_text="Paste YouTube Embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID)")
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Category(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Subcategory(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Audio(models.Model):
    title = models.CharField(max_length=250)
    author = models.CharField(max_length=250)
    cover_image = models.ImageField(upload_to='Audio/images')
    audio_file = models.FileField(upload_to='Audio/files')
    sub_category = models.ForeignKey(Subcategory, on_delete=models.DO_NOTHING, null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Creed(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='creeds_confessions/images/')
    pdf = models.FileField(upload_to='creeds_confessions/pdfs/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Book(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='books/images/')
    pdf = models.FileField(upload_to='books/pdfs/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Article(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='Article/images')
    description = CKEditor5Field('Text', config_name='wordlike')
    author_name = models.CharField(max_length=250)
    author_image = models.ImageField(upload_to='Article/images')
    created_at = models.DateField(auto_now_add=True)



class ReformedQuote(models.Model):
    image = models.ImageField(upload_to='quotes_images/')
    alt_text = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.alt_text or f"Quote Image {self.id}"


class Course(models.Model):
    COURSE_TYPES = [
        ('BOOTCAMP', 'Bootcamp'),
        ('WEBINAR', 'Webinar'),
        ('WORKSHOP', 'Workshop'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    course_type = models.CharField(max_length=20, choices=COURSE_TYPES)
    thumbnail = models.ImageField(upload_to='courses/thumbnails/')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title


class CourseVideo(models.Model):  # Renamed model
    course = models.ForeignKey(Course, related_name='videos', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    video_file = models.FileField(upload_to='courses/videos/')
    duration = models.CharField(max_length=20)  # e.g. "(0:10)"
    section = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.course.title} - {self.title}"