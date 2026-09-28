const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.getElementById('navLinks');
if(menuBtn){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));}
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const form=document.getElementById('registrationForm');
const message=document.getElementById('formMessage');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const name=data.get('name'), phone=data.get('phone'), email=data.get('email'), course=data.get('course');
  const text=`Hello Intellectual Training Institute (ITI). I would like to register for a course.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email||'Not provided')}%0ACourse: ${encodeURIComponent(course)}`;
  window.open(`https://wa.me/260973892277?text=${text}`,'_blank');
  message.textContent='Your registration details have been prepared for WhatsApp.';
});

const demoStudent={id:"ITI001",password:"student123",name:"Demo Student",course:"Business Administration",progress:"65%",result:"78%",certificate:"ITI-CERT-2026-001"};
document.getElementById("studentLoginForm")?.addEventListener("submit",e=>{e.preventDefault();const id=document.getElementById("studentId").value.trim(),p=document.getElementById("studentPassword").value,msg=document.getElementById("loginMessage");if(id===demoStudent.id&&p===demoStudent.password){document.getElementById("studentDashboard").classList.remove("hidden");document.getElementById("dashName").textContent=demoStudent.name;document.getElementById("dashCourse").textContent=demoStudent.course;document.getElementById("dashProgress").textContent=demoStudent.progress;document.getElementById("dashResult").textContent=demoStudent.result;document.getElementById("dashCert").textContent=demoStudent.certificate;msg.textContent="Login successful."}else msg.textContent="Incorrect demo login details."});
document.getElementById("logoutBtn")?.addEventListener("click",()=>{document.getElementById("studentDashboard").classList.add("hidden");document.getElementById("studentLoginForm").reset()});
document.getElementById("adminLoginForm")?.addEventListener("submit",e=>{e.preventDefault();const u=document.getElementById("adminUser").value.trim(),p=document.getElementById("adminPass").value,msg=document.getElementById("adminMessage");if(u==="admin"&&p==="admin123"){document.getElementById("adminDashboard").classList.remove("hidden");document.getElementById("adminLogin").classList.add("hidden");msg.textContent=""}else msg.textContent="Incorrect demo admin login."});
document.getElementById("adminLogout")?.addEventListener("click",()=>{document.getElementById("adminDashboard").classList.add("hidden");document.getElementById("adminLogin").classList.remove("hidden");document.getElementById("adminLoginForm").reset()});
const managed=["Occupational Health & Safety","Business Administration","Data Analysis","Public Administration","Early Childhood Education","Psychosocial Counselling","Communication Skills","Office Management","Teaching Methods","Computer Skills","Microsoft Office Work"],managedList=document.getElementById("managedCourses");function renderCourses(){if(managedList)managedList.innerHTML=managed.map(c=>`<li>${c}</li>`).join("")}renderCourses();document.getElementById("addCourseBtn")?.addEventListener("click",()=>{const i=document.getElementById("newCourse"),v=i.value.trim();if(v&&!managed.includes(v)){managed.push(v);i.value="";renderCourses()}});
document.getElementById("verifyForm")?.addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("certificateNumber").value.trim().toUpperCase(),o=document.getElementById("verificationResult");if(n===demoStudent.certificate){o.className="verification-result success";o.innerHTML=`<strong>Certificate verified.</strong><br>Certificate No: ${demoStudent.certificate}<br>Student: ${demoStudent.name}<br>Course: ${demoStudent.course}<br>Status: Completed`}else{o.className="verification-result error";o.innerHTML="<strong>Certificate not found.</strong><br>Please check the certificate number or contact ITI."}});
