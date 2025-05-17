// To read the data
function readAvailability(){
  const spreadSheet=SpreadsheetApp.getActiveSpreadsheet();    
  const sheet=spreadSheet.getSheetByName("Availability");
  const data= sheet.getRange(2,1,sheet.getLastRow()-1,4).getValues();
  Logger.log(data);
  return data;
}

//Scheduling Logic
function assignShifts() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const availabilitySheet = ss.getSheetByName("Availability");
  const assignmentsSheet = ss.getSheetByName("Shift Assignments");
  assignmentsSheet.clearContents();
  assignmentsSheet.appendRow(["Date", "Shift", "Assigned Employee"]);
  
  const data = availabilitySheet.getRange(2, 1, availabilitySheet.getLastRow() - 1, 4).getValues();
  
  // We'll keep track of who got assigned to avoid duplicates
  const assigned = {};
  
  data.forEach(row => {
    const [employee, date, shift, available] = row;
    if (available === "Y") {
      const key = `${date}-${shift}`;
      if (!assigned[key]) {
        assignmentsSheet.appendRow([date, shift, employee]);
        assigned[key] = employee;
      }
    }
  });
}


function sendShiftEmails() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Shift Assignment");
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues(); // Date, Shift, Name, Email
  
  const messages = {};

  data.forEach(([date, shift, employee, email]) => {
    if (!email) return;
    
    // Group all shifts for each employee
    if (!messages[email]) {
      messages[email] = {
        name: employee,
        shifts: []
      };
    }
    messages[email].shifts.push({ date, shift });
  });

  // Send emails
  for (let email in messages) {
    const { name, shifts } = messages[email];
    let shiftList = shifts.map(s => `• ${s.date} — ${s.shift}`).join('\n');

    const subject = `Your Assigned Shifts`;
    const body = `Hi ${name},\n\nHere are your upcoming shift assignments:\n\n${shiftList}\n\nBest regards,\nHR Team`;

    GmailApp.sendEmail(email, subject, body);
    Logger.log(`Email sent to: ${email}`);
  }
}




