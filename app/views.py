from django.shortcuts import get_object_or_404, render
from .models import Blog

from django.shortcuts import render
from django.conf import settings
from .models import Audio

from .models import Video

from .models import Creed

from .models import Book

from .models import Article

from .models import ReformedQuote



# Create your views here.
def home(request):
    # try:
    #     rq_user = request.session.get("user_id")
    # except:
    #     pass
    # if rq_user != None:
    #     # dbuser = models.SignUp.objects.get(id=rq_user)
    #     data = {
    #         "logged": True,
    #         "full_name": dbuser.full_name,
    #     }
    #     return render(request, 'index.html', data)
    # else:
        return render(request, "home.html")

def supportus(request):
    return render(request, "supportus.html")

def aboutus(request):
    return render(request, "about.html")

def contactus(request):
    return render(request, "contact.html")

def audio_page(request):
    audios = Audio.objects.filter(sub_category__category__title="Audio").order_by('-created_at') | Audio.objects.filter(sub_category__isnull=True).order_by('-created_at')
    return render(request, 'audio.html', {'audios': audios})
    # return render(request, "audio.html")

def video(request):
    videos = Video.objects.all().order_by('-created_at')
    return render(request, 'video.html', {'videos': videos})

def podcast(request):
    mathew = Audio.objects.filter(sub_category__category__title="Podcast", sub_category__title="Mathew").order_by('-created_at')
    mark = Audio.objects.filter(sub_category__category__title="Podcast", sub_category__title="Mark").order_by('-created_at')
    luke = Audio.objects.filter(sub_category__category__title="Podcast", sub_category__title="Luke").order_by('-created_at')
    john = Audio.objects.filter(sub_category__category__title="Podcast", sub_category__title="John").order_by('-created_at')
    return render(request, "podcast.html", context={"mathew": mathew, "mark":mark, "luke":luke, "john":john})

def blog(request):
    blogs = Blog.objects.all()
    return render(request, "blog.html", context={"blogs":blogs})

def blog_detail(request, id):
    blog = get_object_or_404(Blog, pk=id)
    return render(request, 'blog_detail.html', context={'blog': blog})


def article(request):
    articles = Article.objects.all()
    return render(request, "article.html", context={"articles":articles})

def article_detail(request, id):
    article = get_object_or_404(Article, pk=id)
    return render(request, 'article_detail.html', context={'article': article})

def book_view(request):
    books = Book.objects.all()
    for book in books:
        book.full_pdf_url = request.build_absolute_uri(book.pdf.url)
    return render(request, 'book.html', {'books': books})

def courses(request):
    return render(request, "courses.html")

def creed_confession_view(request):
    creeds = Creed.objects.all()
    for creed in creeds:
        creed.full_pdf_url = request.build_absolute_uri(creed.pdf.url)
    return render(request, 'creed_confession.html', {'creeds': creeds})

def reformed_quotes_view(request):
    quotes = ReformedQuote.objects.all()
    return render(request, 'reformed_quotes.html', {'quotes': quotes})


# Social Media Youtube & Facebook Link
def test_home(request):
    context = {
        'facebook_url': 'https://www.facebook.com/profile.php?id=100068634679109',
        'youtube_url': 'https://www.youtube.com/@ReformedbyTruth_Ministry/videos',
    }
    return render(request, 'home.html', context)


# Reformed Quotes images Count
def reformed_quotes(request):
    quotes = ReformedQuote.objects.all()
    return render(request, 'reformed_quotes.html', {'quotes': quotes})

def courses_detail(request):
    return render(request, 'courses_detail.html')