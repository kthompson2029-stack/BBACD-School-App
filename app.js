function showPage(page) {

    const content = document.getElementById("content");

    if (page === "announcements") {

        content.innerHTML = `
            <div class="card">
                <h2>📢 Announcements</h2>

                <div class="announcement">
                    <h3>Welcome Back!</h3>
                    <p>Stay tuned for important school updates.</p>
                </div>

                <div class="announcement">
                    <h3>School News</h3>
                    <p>New announcements will appear here.</p>
                </div>

            </div>
        `;

    } 
    
   else if (page === "calendar") {

    content.innerHTML = `
        <div class="card">
            <h2>📅 School Calendar</h2>

            <div class="event">
                <h3>September 8</h3>
                <p>First Day of School</p>
            </div>

            <div class="event">
                <h3>September 15</h3>
                <p>Club Fair</p>
            </div>

            <div class="event">
                <h3>October 3</h3>
                <p>Picture Day</p>
            </div>

            <div class="event">
                <h3>November 27-28</h3>
                <p>Thanksgiving Break</p>
            </div>

        </div>
    `;

}
   else if (page === "events") {

    content.innerHTML = `
        <div class="card">
            <h2>🎉 Upcoming Events</h2>

            <div class="event">
                <h3>Club Fair</h3>
                <p>Discover clubs and activities available at BBACD.</p>
            </div>

            <div class="event">
                <h3>College & Career Day</h3>
                <p>Learn about colleges, careers, and future opportunities.</p>
            </div>

            <div class="event">
                <h3>School Spirit Week</h3>
                <p>A week of activities, games, and school pride.</p>
            </div>

        </div>
    `;

}

    else if (page === "links") {

        content.innerHTML = `
            <div class="card">
                <h2>🔗 Important Links</h2>
                <p>Add school websites and resources here.</p>
            </div>
        `;

    }

}
