---
{"dg-publish":true,"tags":null,"created":"2026-02-03T09:43:49.150+00:00","dg-note-icon":"stone","noteIcon":"stone","updated":"2026-02-03T09:43:49.150+00:00","dgPassFrontmatter":true,"permalink":"/11-templates/tasks-note/"}
---

[[Home\|Back home]]
<%* await tp.file.move(`06 - DAILY-WEEKLY TASKS/${tp.file.title}`) %>

Status: [[09 - STATUS NOTES/Stone\|Stone]]
Tags: [[<% tp.date.now("YYYY-MM") %>\|<% tp.date.now("YYYY-MM") %>]], 

<% tp.file.title %>
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