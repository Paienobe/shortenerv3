# URL SHORTENER SETUP INSTRUCTIONS

## BACKEND
* cd into backend/url_shortener_v3
* python3 -m venv venv
* source venv/bin/activate (on mac)
* venv\Scripts\activate (on windows)
* pip install -r requirements. txt
* python3 manage.py migrate
* python3 manage.py runserver 8080


## CLIENT
* cd into client/shortener
* npm install or yarn add
* npm run dev

