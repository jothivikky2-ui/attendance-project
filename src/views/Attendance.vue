<template>
  <div class="container">

    <h2 class="title">Student Attendance Application</h2>

    <table class="attendance-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Attendance</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>
            <button
              class="btn"
              :class="{ activePresent: student.status === 'Present' }"
              @click="student.status = 'Present'"
            >
              Present
            </button>

            <button
              class="btn"
              :class="{ activeAbsent: student.status === 'Absent' }"
              @click="student.status = 'Absent'"
            >
              Absent
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Buttons -->
    <button class="send-btn" @click="sendReport">
      Send Report
    </button>

    <button class="send-btn csv-btn" @click="downloadCSV">
      Download CSV
    </button>

    <!-- Message -->
    <p v-if="message" class="status-message">
      {{ message }}
    </p>

  </div>
</template>

<script>
export default {
  data() {
    return {
students: [
  { name: "Student 1", email: "s1@gmail.com", mobile: "9876543210", status: "" },
  { name: "Student 2", email: "s2@gmail.com", mobile: "9876543211", status: "" },
  { name: "Student 3", email: "s3@gmail.com", mobile: "9876543212", status: "" },
  { name: "Student 4", email: "s4@gmail.com", mobile: "9876543213", status: "" },
  { name: "Student 5", email: "s5@gmail.com", mobile: "9876543214", status: "" },
  { name: "Student 6", email: "s6@gmail.com", mobile: "9876543215", status: "" },
  { name: "Student 7", email: "s7@gmail.com", mobile: "9876543216", status: "" },
  { name: "Student 8", email: "s8@gmail.com", mobile: "9876543217", status: "" },
  { name: "Student 9", email: "s9@gmail.com", mobile: "9876543218", status: "" },
  { name: "Student 10", email: "s10@gmail.com", mobile: "9876543219", status: "" },
  { name: "Student 11", email: "s11@gmail.com", mobile: "9876543220", status: "" },
  { name: "Student 12", email: "s12@gmail.com", mobile: "9876543221", status: "" },
  { name: "Student 13", email: "s13@gmail.com", mobile: "9876543222", status: "" },
  { name: "Student 14", email: "s14@gmail.com", mobile: "9876543223", status: "" },
  { name: "Student 15", email: "s15@gmail.com", mobile: "9876543224", status: "" }
],

      message: ""
    };
  },

  methods: {
    // Send Report with Date & Time
sendReport() {
  for (let s of this.students) {
    if (!s.status) {
      this.message = "Please mark attendance for all students ❌";
      return;
    }
  }

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  this.message = "Attendance message sent successfully 📱\n\n";

  this.students.forEach(s => {
    this.message += 
      `To: ${s.mobile} | Status: ${s.status}\n`;
  });

  this.message += `\nDate: ${date}  Time: ${time}`;
},

    // CSV Export
    downloadCSV() {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();

      let csv = "Name,Email,Status,Date,Time\n";

      this.students.forEach(student => {
        csv += `${student.name},${student.email},${student.status},${date},${time}\n`;
      });

      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "attendance_report.csv";
      a.click();
    }
  }
};
</script>

<style>
body {
  margin: 0;
  background: linear-gradient(135deg, #e0e7ff, #f8fafc);
  font-family: "Segoe UI", Tahoma, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 25px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.title {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1e293b;
}

.attendance-table {
  width: 100%;
  border-collapse: collapse;
}

.attendance-table th {
  background: linear-gradient(90deg, #2563eb, #1e40af);
  color: white;
  padding: 14px;
}

.attendance-table td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
  color: #334155;
}

.btn {
  padding: 6px 14px;
  margin: 4px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: white;
  font-weight: 600;
  cursor: pointer;
}

.activePresent {
  background: #22c55e;
  color: white;
}

.activeAbsent {
  background: #ef4444;
  color: white;
}

.send-btn {
  width: 100%;
  margin-top: 20px;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(90deg, #22c55e, #16a34a);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.csv-btn {
  background: linear-gradient(90deg, #2563eb, #1e40af);
}

.status-message {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #15803d;
  white-space: pre-line;
}
</style>