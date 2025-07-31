# reformedbytruth

A Django-based web application for managing and sharing articles, blogs, audio, books, creeds, confessions, and quotes.

## Features

- Article, blog, and book management
- Audio uploads and streaming
- Image and quote sharing
- Admin interface for content management
- Static and media file handling

## Project Structure

- `app/` - Main Django app with models, views, admin, and templates
- `media/` - Uploaded media files (articles, audio, books, images, etc.)
- `reformedbytruth/` - Project configuration (settings, URLs, WSGI/ASGI)
- `requirements.txt` - Python dependencies
- `manage.py` - Django management script

## Setup

1. **Install dependencies:**
   ```sh
   pip install -r requirements.txt
   ```

2. **Apply migrations:**
   ```sh
   python manage.py migrate
   ```

3. **Create a superuser (optional, for admin access):**
   ```sh
   python manage.py createsuperuser
   ```

4. **Collect static files:**
   ```sh
   python manage.py collectstatic
   ```

5. **Run the development server:**
   ```sh
   python manage.py runserver
   ```

6. **Access the site:**
   - Main site: http://127.0.0.1:8000/
   - Admin: http://127.0.0.1:8000/admin/

## Static & Media Files

- Place static files in `app/static/`
- Uploaded media files are stored in `media/`

## License

See [LICENSE](LICENSE) for details.