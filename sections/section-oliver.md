---
layout: posts
title: Oliver
section: 2
---

- Instructor: [Oliver Steele](ows1@nyu.edu)
- Meeting Time: Tuesday / Thursday / Friday 9:45am – 11:00am
- Mode: In-person
- Assignments: [Google Classroom](https://classroom.google.com/u/0/c/MTIyNjY4MDU3NDI1)
- [Slides](https://drive.google.com/drive/folders/18UIs0775R-IxmyngyzBhT_igl3mrsBnB)
- Appointments: [Sign up here.](https://calendar.google.com/calendar/u/0/selfsched?sstoken=UU1TaDFWeEV2ZzFHfGRlZmF1bHR8NzBkMmRmNGEzZGE3ZDBmNzExMGUwYWZkYzkwZmFkYWI)
  - To ensure that the instructor is available, schedule your appointment at
    least an hour ahead of time. Google Calendar will let you schedule it at the
    last minute, but the instructor may not see it or be available then.

## Student Blogs

<ul class="shuffled">
{% for student in site.data.students %}
{% unless student.section == page.section %}{% continue %}{% endunless %}
<li><a href="{{ student.blog }}">{{ student.name }}</a></li>
{% endfor %}
 </ul>
