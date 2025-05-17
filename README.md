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
## 📋 Setup Guide — Get Started in 5 Minutes

1. **Prepare Your Google Sheet**

   - Create a sheet named **Availability** with columns:  
     `Employee Name | Date | Shift | Available (Y/N)`  
   - Create a sheet named **Shift Assignments** — the script will populate this automatically.

2. **Add Emails**

   - To enable email notifications, add a fourth column `Email` to the **Shift Assignments** sheet. Ensure employee emails are included here.

3. **Deploy the Script**

   - Open your Google Sheet.  
   - Go to **Extensions > Apps Script**.  
   - Paste the script code (provided in this repo).  
   - Save and authorize the script with your Google account.

4. **Run the Scheduler**

   - Run the function `assignShifts()` to assign shifts based on availability.  
   - Run the function `sendShiftEmails()` to notify employees via email.

---
## 🧪 Testing and Validation

- **Populate** the Availability sheet with sample data (employees, dates, shifts, availability).  
- **Run** `assignShifts()` and check the Shift Assignments sheet for correct assignments.  
- **Add** email addresses to assignments.  
- **Run** `sendShiftEmails()` and verify emails are delivered — check your Gmail Sent folder and Logs in Apps Script Editor.

---
