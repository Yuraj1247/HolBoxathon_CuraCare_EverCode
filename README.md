# 🏥 AI-Powered Clinic Appointment Booking Website

This project is a smart clinic appointment system where patients can book appointments online and receive automated, AI-driven follow-up calls. The system captures additional information via voice AI, confirms appointment slots, and sends a personalized email confirmation — all without human intervention.

---

## Deployement Link :- https://hol-boxathon-cura-cure-ever-code.vercel.app/
## Repo Link :- https://github.com/Yuraj1247/HolBoxathon_CuraCure_EverCode/

---

## 🚀 Features

### ✅ 1. Online Appointment Booking
- Patients fill out a user-friendly form (powered by **Fillout**).
- Information like name, email, phone, and preferred date/time is collected.

### 🤖 2. Voice AI Follow-Up (Vapi Agent)
- Once the form is submitted, a **Vapi AI Voice Agent** calls the patient via **Twilio**.
- The agent interacts conversationally, asking:
  - Patient symptoms or concern
  - Preferred time slots
  - Any doctor preferences

### 📆 3. Slot Confirmation
- Based on inputs, the AI suggests and confirms the most suitable appointment slot.
- All conversations are handled through the voice agent using natural language.

### 📧 4. Automated Email Summary
- After the call ends, the confirmed appointment details are sent via email using **Make automation**.
- Email includes:
  - Appointment date/time
  - Doctor info
  - Any required preparation
  - Contact details

### 📱 5. Glide App Integration *(Optional)*
- An admin-facing mobile dashboard built using **Glideapps** for viewing form responses and managing appointments on the go.

---

## 🧠 Tools Used

| Tool         | Purpose                                               |
|--------------|--------------------------------------------------------|
| **Fillout**  | Form interface for user appointment submission        |
| **Vapi.ai**  | Voice AI agent for calling and interacting with users |
| **Twilio**   | Voice calling infrastructure                          |
| **Make.com** | Automations for triggering calls and sending emails   |
| **Glideapps**| Admin dashboard to view/manage bookings               |

---

## 💻 Tech Stack

| Technology      | Role                              |
|------------------|------------------------------------|
| **Next.js**       | Frontend framework (React-based)  |
| **TypeScript**    | Type safety for clean coding      |
| **Tailwind CSS**  | Modern responsive styling         |
| **Vercel** | Deployment platform               |

---

## 🧭 Workflow Overview

[1] User submits appointment form (Fillout)
↓
[2] Make.com automation is triggered
↓
[3] Vapi AI agent calls user (via Twilio)
↓
[4] Agent collects extra info + confirms slot
↓
[5] Make.com sends an automated confirmation email
↓
[6] Admins view/manage data via Glideapps

---

## Glimpse of Webpages

![Screenshot 2025-05-26 052605](https://github.com/user-attachments/assets/0e8641fd-84d8-4c13-aa84-0b4bc7b2805c)
![Screenshot 2025-05-26 052612](https://github.com/user-attachments/assets/39067a65-359d-44c4-82b4-7a8193321803)
![Screenshot 2025-05-26 052641](https://github.com/user-attachments/assets/fef86a6f-0dd3-4cbb-9ee8-adb35e797faf)
![Screenshot 2025-05-26 052706](https://github.com/user-attachments/assets/b058f2b7-cdd2-4bd1-b18c-821b0983d374)
![Screenshot 2025-05-26 052632](https://github.com/user-attachments/assets/3cfb2375-300a-4802-b348-aece2164f067)
![Screenshot 2025-05-26 052745](https://github.com/user-attachments/assets/4a37879f-1315-4184-b50a-d7f957249901)
![Screenshot 2025-05-26 052938](https://github.com/user-attachments/assets/eb53574a-b191-4242-b8cd-a139d101a81c)
![Screenshot 2025-05-26 053215](https://github.com/user-attachments/assets/5251453e-4bbc-4630-9bba-6d530cd95a72)
![Screenshot 2025-05-26 053048](https://github.com/user-attachments/assets/9cf73ae7-dda7-416b-9874-643bbe5dbf0e)
![Screenshot 2025-05-26 053316](https://github.com/user-attachments/assets/7958d83d-ce5b-4ddc-911d-669bee412b6d)


