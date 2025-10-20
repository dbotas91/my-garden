---
{"dg-publish":true,"permalink":"/11-templates/tasks-note/","noteIcon":"outgoing"}
---

<%* await tp.file.move(`06 - DAILY-WEEKLY TASKS/${tp.file.title}`) %>

Tags: [[<% tp.date.now("YYYY-MM") %>\|<% tp.date.now("YYYY-MM") %>]], 
 
<%*
// Template tasks for templater
const tasks = [];

while (true) {

  const t = await tp.system.prompt("New Task (Empty Enter to end the prompt)");

  if (!t) break; // termina se estiver vazio ou cancelar

  tasks.push(`- [ ] ${t}`);

}

-%>

<% tasks.join("\n") %>