async function analyzeTask(task) {
  return `
🔍 AI Analysis

📌 Task: ${task}

⚡ Priority: High

✅ Suggested Action:
Complete this task as soon as possible

⏰ Reminder:
Set a reminder for this task
`;
}

module.exports = analyzeTask;