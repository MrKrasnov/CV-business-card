document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('#profile-desc').textContent = data.profile;
/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<div class="mb-5">`;
    expirienceData += ` <h4 class="experience-company">${item.company} - ${item.city}, <span class="italic">${item.from} - ${item.to}</span></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</div>`;
});
document.querySelector('#experience-section').innerHTML = expirienceData;

/**
 * contact data
 */

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">link to linkedin</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.djinni}">link to djinni</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.djinni}">link to CV file</a></li>`
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('#skills-list').innerHTML = skillsData;

/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('#education-list').innerHTML = educationData;

/**
 * Achievements
 */

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item}</li>`;
});
document.querySelector('#achievements-list').innerHTML = achievementsData;