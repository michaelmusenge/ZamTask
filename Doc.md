# 🇿🇲 ZamTask – MVP Plan

**ZamTask** is a localized service provider platform designed to empower **Zambian youth** by connecting them with clients seeking side hustles, services, and small gigs.  

The app will embrace **Zambian identity** through the **national flag colors** and **Heroicons**, offering a clean, modern, and professional mobile-first experience.

---

## 📖 Project Overview

- **Mission:** Create a trusted, digital marketplace for youth in Zambia to monetize their skills and access new income opportunities.  
- **Problem:** Many Zambian youths are unemployed or underemployed but possess skills (e.g., design, plumbing, tutoring) that lack a digital marketplace.  
- **Solution:** A mobile-first platform where users can **post tasks, offer services, hire locally, and build reputation** through ratings and reviews.  
- **Target Market:** Urban youth in Lusaka, Kitwe, and other major Zambian towns.  

---

## ✅ Core Features (MVP)

### 👥 User Roles
- **Client** – Posts tasks and hires service providers.  
- **Service Provider** – Offers services.  
> Users can switch between roles within one account.  

---

### 📌 User Flows

#### 🔸 A. Sign Up / Login
- Email or phone number + password.  
- Optional: Google sign-in.  
- Profile setup: name, profile picture, location, skills.  

#### 🔸 B. Browse Services / Tasks
- Filter by category (Design, Plumbing, Cleaning, etc.).  
- Search functionality.  
- Each service includes: Title, Price, Description, Provider rating & profile.  

#### 🔸 C. Post a Task (Client)
- Task title.  
- Description.  
- Category.  
- Budget.  
- Location.  
- Deadline.  

#### 🔸 D. Offer a Service (Provider)
- Service title.  
- Description.  
- Category.  
- Price.  
- Delivery time.  
- Images (optional).  

#### 🔸 E. Hire / Request
- "Request Service" or "Hire" button.  
- In-app messaging.  
- Accept / Reject offers.  

#### 🔸 F. Dashboard
- **Clients:** View tasks, offers.  
- **Providers:** View bookings, earnings.  
- Notifications (basic).  

#### 🔸 G. Ratings & Reviews
- 5-star rating system.  
- Optional text comments.  

---

## 🎨 UI Theme

| Use               | Color   | Code       |
|-------------------|---------|------------|
| Primary           | Green   | `#007A33` |
| CTA / Highlights  | Orange  | `#FF8200` |
| Text & UI Base    | Black   | `#000000` |
| Background        | Light Gray / White | `#F9FAFB` |
| Alerts            | Red     | `#EF4444` |

- **Icons:** [Heroicons](https://heroicons.com)  
- **Fonts:** `Poppins`, `Inter`, or `Roboto`  

---

## 🗂 Suggested Folder Structure

zamtask/
├── frontend/ # React Native + TypeScript app
│ ├── components/ # Reusable UI components
│ ├── screens/ # Screens (Login, Dashboard, etc.)
│ ├── assets/ # Icons, images
│ └── utils/ # Helpers (auth, API, etc.)
│
├── backend/ # Python backend
│ ├── app/ # Main application
│ │ ├── models/ # SQLAlchemy models (MySQL tables)
│ │ ├── routes/ # API routes (FastAPI/Flask/Django REST)
│ │ ├── services/ # Business logic
│ │ └── utils/ # Helpers (auth, validation)
│ └── tests/ # Unit tests
│
└── docs/ # Documentation & planning


---

## 🧱 Tech Stack

### Frontend (Mobile)
- **React Native + TypeScript (Expo)** → cross-platform, mobile-first.  
- **UI:** `nativewind` (Tailwind CSS in RN) or `react-native-paper`.  
- **Heroicons:** `react-native-heroicons` for consistent icons.  

### Backend (Python)
- **Framework:** FastAPI (preferred for modern async APIs) or Django REST Framework (if you need built-in admin).  
- **ORM:** SQLAlchemy (for FastAPI) or Django ORM.  
- **Authentication:** JWT-based auth or Django built-in auth system.  
- **API:** RESTful endpoints consumed by the mobile app.  

### Database
- **MySQL** → structured, relational, widely supported.  
- Hosted on **AWS RDS / DigitalOcean / Azure** or local instance for dev.  

### Admin Panel
- Django Admin (if Django chosen).  
- Or a lightweight React Admin dashboard connected to API.  

---

## 🚀 Launch Strategy

### Phase 1: MVP Launch
- Mobile-first (Android).  
- Start in **Lusaka** or **Kitwe**.  
- Onboard **20–50 trusted providers** manually.  
- Promote via WhatsApp, Facebook groups, universities.  

### Phase 2: Growth
- Enable user signups at scale.  
- Expand categories (e.g., tutoring, car wash, delivery).  
- Introduce referral bonuses.  

### Phase 3: Monetization
- Commission per transaction (5–10%).  
- Premium provider listings.  
- Ads from local businesses.  

---

## 🧪 MVP Feature Checklist

| Feature           | Status       |
|-------------------|--------------|
| Sign Up / Login   | ✅ |
| Create Profile    | ✅ |
| Browse Services   | ✅ |
| Post Task         | ✅ |
| Offer Service     | ✅ |
| Hire / Request    | ✅ |
| Chat              | ✅ (basic) |
| Reviews / Ratings | ✅ |
| Notifications     | ✅ (in-app only) |
| Admin Access      | ✅ (manual / console) |

---

## 📌 Roadmap (Post-MVP)

- [ ] Payment integration (Airtel Money, MTN Mobile Money).  
- [ ] Advanced chat (file sharing, voice notes).  
- [ ] Location-based recommendations (map integration).  
- [ ] Dispute resolution system.  
- [ ] Provider verification (KYC).  
- [ ] Web app version.  

---

## 🔧 Installation (Developer Setup)

### Frontend (React Native + TS)
```bash
# Clone repo
git clone https://github.com/michaelmusenge/ZamTask.git
cd zamtask/frontend

# Install dependencies
npm install

# Run app
npm start