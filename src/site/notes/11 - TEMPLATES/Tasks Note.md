---
{"dg-publish":true,"tags":null,"mature-status":"Stone","created":"2025-10-13T20:17:13.910+01:00","dg-note-icon":"stone","noteI":"stone","updated":"2025-10-21T19:19:20.055+01:00","title":"<% tp.file.title %>","dgPassFrontmatter":true,"permalink":"/11-templates/tasks-note/","noteIcon":"stone"}
---

[[0. Home\|Back home]]
<%* await tp.file.move(`06 - DAILY-WEEKLY TASKS/${tp.file.title}`) %>

Status: [[09 - STATUS NOTES/Stone\|Stone]]
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