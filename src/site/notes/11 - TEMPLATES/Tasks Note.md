---
{"dg-publish":true,"tags":null,"category":null,"created":"2025-10-13T20:17:13.910+01:00","permalink":"/11-templates/tasks-note/","dgPassFrontmatter":true,"noteIcon":"child","updated":"2025-10-17T19:53:31.500+01:00"}
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