// Team members image mapping
document.addEventListener('DOMContentLoaded', () => {
  const teamMembersList = document.getElementById('team-members-list');
  if (teamMembersList && weatherVisionConfig && weatherVisionConfig.app && weatherVisionConfig.app.team) {
    teamMembersList.innerHTML = '';
    
    // Define image paths for each team member
    const memberImages = {
      'Madol Abraham': 'images/Madol Abraham.jpg',
      'John Akech': 'images/John Akech.png',
      'Geu Aguto': 'images/Geu Aguto Garang.jpg',
      'James Jok Dut': 'images/James.jpg',
      'Kuir Juach Kuir': 'images/Kuir Juach Kuir.png',
    };
    
    weatherVisionConfig.app.team.members.forEach((member, index) => {
      // Get member name and role
      const memberName = member.name || member;
      const memberRole = member.role || 'ML Engineer';
      
      // Get image path from the mapping
      const imagePath = memberImages[memberName] || `images/${memberName}.jpg`;
      
      teamMembersList.innerHTML += `
        <div class="team-member" style="--reveal-index: ${index}" title="${memberRole}">
          <div class="team-member-image-container">
            <img src="${imagePath}" alt="${memberName}" class="team-member-image">
            <div class="team-member-role">${memberRole}</div>
          </div>
          <span class="team-member-name">${memberName}</span>
        </div>
      `;
    });
  }
});