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
                <h2>📅 Calendar</h2>
                <p>School dates and important events will appear here.</p>
            </div>
        `;

    }

    else if (page === "events") {

        content.innerHTML = `
            <div class="card">
                <h2>🎉 Events</h2>
                <p>Upcoming school events will appear here.</p>
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
