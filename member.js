function skillsMember(){
    var skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'MongoDB',
        'Express',
        'Python',
        'Java',
        'SQL',
        'Sass',
        'Bootstrap',
        'Material UI',
        'Git',
        'GitHub',
        'Heroku',
        'Netlify',
        'VS Code',
        'Postman',
        'Photoshop',
        'Illustrator',
        'Figma',
        'Adobe XD'
    ];
    var skillsList = document.querySelector('.skills-list');
    for(var i = 0; i < skills.length; i++){
        var skill = document.createElement('li');
        skill.textContent = skills[i];
        skillsList.appendChild(skill);
    }
}