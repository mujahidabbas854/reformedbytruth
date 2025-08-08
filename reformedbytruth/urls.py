from django.contrib import admin
from django.urls import path, include, re_path
from app import views
from .settings import MEDIA_ROOT, MEDIA_URL
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve


urlpatterns =[

    path('admin/', admin.site.urls),
    path("ckeditor5/", include('django_ckeditor_5.urls')),

    # 👇 This line maps the base URL to the home view
    path('', views.home, name='home'),
    path('home', views.home, name='home'),
    path('aboutus', views.aboutus, name='aboutus'),
    path('supportus', views.supportus, name='supportus'),
    path('contactus', views.contactus, name='contactus'),
    path('audio/', views.audio_page, name='audio'),
    path('video', views.video, name='video'),
    path('podcast', views.podcast, name='podcast'),
    path('blog', views.blog, name='blog'),
    path('blog/<int:id>/', views.blog_detail, name='blog-detail'),
    path('article', views.article, name='article'),
    path('article/<int:id>/', views.article_detail, name='article_detail'),
    path('book/', views.book_view, name='book'),
    path('courses', views.courses, name='courses'),
    path('courses/<slug:slug>/', views.course_detail, name='courses_detail'),
    path('creed_confession/', views.creed_confession_view, name='creed_confession'),
    path('reformed_quotes/', views.reformed_quotes, name='reformed_quotes'),

]

if not settings.DEBUG:
    urlpatterns += [
        re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    ]
else:
    urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)