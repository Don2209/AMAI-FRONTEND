# amai-mvp

## Project Structure 

AMAI-MVP/
│
├── amai-backend/
│   ├── __init__.py
│   ├── app.py
│   ├── config.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── chat.py
│   │   ├── image_chat.py
│   │   ├── letter_draft.py
│   │   ├── pdf_chat.py
│   │   ├── study.py
│   │   ├── test.py
│   │   ├── yt_chat.py
│   └── services/
│       ├── __init__.py
│       ├── openai_service.py
│       ├── gemini_service.py
│       ├── study_service.py
│       ├── test_service.py
│       ├── pdf_service.py
│       ├── yt_service.py
│       ├── letter_draft_service.py
│       ├── image_chat_service.py
├── amai-frontend/
│   └── <frontend_files>
│
└── .env
