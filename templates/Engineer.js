
const engineerCard = `
<div class="card hovercard">
    <div class="cardheader">
        <div class="card-heading">
            ${currentMember.getName()}
        </div>

        <div class="role">
            <img src="../images/Engineer.ico"></img>
            ${currentMember.getRole()}
        </div>
    </div>
    <div class="card-body">
        <div class="desc">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${currentMember.getId()}</li>
                <li class="list-group-item">Email: ${currentMember.getEmail()}</li>
                <a href="${currentMember.getGithub()}">
                    <li class="list-group-item">Github</li>
                </a>
            </ul>
        </div>
    </div>
</div>
`

module.exports = template;