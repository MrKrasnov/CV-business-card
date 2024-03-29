"use strict"
const myName = document.getElementById('my-name');
const myJob = document.getElementById('job-title');
const meDesc = document.getElementById('profile-desc')
const experienceDiv = document.getElementById('experience-section');
const contact = document.querySelector('.contacts-block');
const adress = document.querySelector('.address');
const photo = document.getElementById('my-photo');
const skill = document.getElementById('skills-list');
const education = document.getElementById('education-list');
const achievements = document.getElementById('achievements-list');

myName.innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
myJob.textContent = data.job_title;
meDesc.innerHTML = data.profile;
/**
 * section data
 */

let experienceData = '';
experience.forEach(item => {
    experienceData += `<div class="mb-5">`;
    experienceData += ` <h4 class="experience-company">${item.company} - ${item.city}, <span class="italic">${item.from} - ${item.to}</span></h4>`;
    experienceData += `<h5>${item.position}</h5>`;
    experienceData += `<p>${item.description}</p>`;
    experienceData += `</div>`;
});
experienceDiv.innerHTML = experienceData;
/**
 * contact data
 */

adress.innerHTML = `<p>${data.phone} <br> ${data.email} <br> ${data.address}</p>`;
photo.src = data.photo;
/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
skill.innerHTML = skillsData;
/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
education.innerHTML = educationData;
/**
 * Achievements
 */

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item}</li>`;
});
achievements.innerHTML = achievementsData;