# 🗓️ Employee Shift Scheduler — Automate Your Workforce Planning

Welcome to the **Employee Shift Scheduler** — a smart, automated Google Apps Script solution designed to simplify how businesses assign shifts and communicate schedules to their employees.

---
## 🚀 What It Does

Say goodbye to manual scheduling headaches! This project:

- **Reads employee availability** from your Google Sheet  
- **Assigns shifts automatically** without overlapping assignments  
- **Sends personalized email notifications** to employees with their upcoming shifts  

Perfect for HR teams, small businesses, or any organization looking to streamline workforce management.

---

## 🧩 How It Works — Behind the Scenes

1. **Input Data:** Employees mark their availability (“Y” for yes) on the **Availability** sheet (with their name, date, and shift).  
2. **Magic Scheduler:** The script scans the availability, assigns shifts fairly ensuring no duplicates, and writes assignments to the **Shift Assignments** sheet.  
3. **Inbox Delivery:** Using Gmail integration, it emails each employee their personalized shift schedule, keeping everyone informed and reducing follow-up chaos.

---
## 🧪 Testing and Validation

- **Populate** the Availability sheet with sample data (employees, dates, shifts, availability).  
- **Run** `assignShifts()` and check the Shift Assignments sheet for correct assignments.  
- **Add** email addresses to assignments.  
- **Run** `sendShiftEmails()` and verify emails are delivered — check your Gmail Sent folder and Logs in Apps Script Editor.

---
