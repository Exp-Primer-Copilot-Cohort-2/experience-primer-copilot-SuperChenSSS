function skillsMember() {
    var member = this;
    member.skills = [
        'JavaScript',
        'HTML',
        'CSS',
        'React',
        'Node.js'
    ];
    member.getSkills = function() {
        return member.skills;
    };
    member.addSkill = function(skill) {
        member.skills.push(skill);
    };
}