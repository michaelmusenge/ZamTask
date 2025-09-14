# 🇿🇲 ZamTask – MVP Plan

**ZamTask** is a localized service provider platform (similar to Fiverr) designed to empower **Zambian youth** by connecting them with clients seeking side hustles, services, and small gigs.  

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
├── frontend/ # React Native + Expo app
│ ├── components/ # Reusable UI components
│ ├── screens/ # Screens (Login, Dashboard, etc.)
│ ├── assets/ # Icons, images
│ └── utils/ # Helpers (auth, API, etc.)
│
├── backend/ # Node.js / Firebase backend
│ ├── models/ # Database schemas
│ ├── routes/ # API endpoints
│ └── services/ # Business logic
│
└── docs/ # Documentation & planning


---

## 🧱 Tech Stack

### Frontend (Mobile)
- **React Native + Expo** → fast iteration, cross-platform.  
- **Tailwind CSS** via `nativewind` (for utility-first styling).  
- **Heroicons** via `react-native-heroicons` for a consistent icon set.  

### Backend
- **Option A: Firebase**  
  - Authentication, Firestore, Storage, Messaging.  
  - Simple setup, scalable for MVP.  

- **Option B: Node.js + Express + MongoDB**  
  - More flexibility and control.  
  - Suitable for future scaling and custom features.  

### Admin Panel
- **Firebase Console** (basic admin control).  
- **React Admin** (optional) for a professional dashboard.  

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
- Premium listings for providers.  
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

- [ ] Payment integration (e.g., Airtel Money, MTN Mobile Money).  
- [ ] Advanced chat (file sharing, voice notes).  
- [ ] Location-based recommendations (map integration).  
- [ ] Dispute resolution system.  
- [ ] Provider verification (KYC).  
- [ ] Web app version.  

---

## 🔧 Installation (Developer Setup)

```bash
# Clone repo
git clone https://github.com/michaelmusenge/zamtask.git
cd zamtask

# Frontend
cd frontend
npm install
npm start

# Backend
cd ../backend
npm install
npm run dev
"# ZamTask" 
