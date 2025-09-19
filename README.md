<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

   App uses
   https://wix.github.io/react-native-ui-lib
   and https://hugeicons.com/icons?search=home

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
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
>>>>>>> be24b6e1f785b48155452250e25ad99c797cd26d
"# ZamTask" 
