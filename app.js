function showPage(page) {

    let content = document.getElementById("content");

    if (page === "announcements") {
        content.innerHTML = `
            <h2>📢 Announcements</h2>
            <p>No announcements yet.</p>
            <p>Check back for updates!</p>
        `;
    }

    else if (page === "calendar") {
        content.innerHTML = `
            <h2>📅 School Calendar</h2>
            <p>Important dates will appear here.</p>
            <ul>
                <li>School Events</li>
                <li>Regents Exams</li>
                <li>Days Off</li>
            </ul>
        `;
    }

    else if (page === "events") {
        content.innerHTML = `
            <h2>🎉 Events</h2>
            <p>Upcoming school activities:</p>
            <ul>
                <li>Club Meetings</li>
                <li>Sports Events</li>
                <li>School Celebrations</li>
            </ul>
        `;
    }

    else if (page === "links") {
        content.innerHTML = `
            <h2>🔗 Important Links</h2>
            <p>Add school resources here.</p>
        `;
    }

}
