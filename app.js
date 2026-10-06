/* =========================================
   COLLEGE DATA
========================================= */


const departments = [

    {
        name: "BCA",
        icon: "💻",
        description:
            "Bachelor of Computer Applications — programming, databases, web development and computing.",
        rooms: "204, 205, 206"
    },

    {
        name: "BBA",
        icon: "💼",
        description:
            "Bachelor of Business Administration — management, marketing, finance and entrepreneurship.",
        rooms: "301, 302, 303"
    },

    {
        name: "B.Com",
        icon: "📊",
        description:
            "Bachelor of Commerce — accounting, finance, taxation and business studies.",
        rooms: "304, 305, 306"
    },

    {
        name: "Kannada",
        icon: "🪔",
        description:
            "Kannada Department and Kuvempu Kannada Sangha activities.",
        rooms: "401, 402"
    },

    {
        name: "English",
        icon: "📖",
        description:
            "English Department covering language, literature and communication.",
        rooms: "403, 404"
    }

];


const timetable = [

    {
        time: "09:00 AM",
        subject: "Database Management",
        department: "BCA",
        room: "204"
    },

    {
        time: "10:00 AM",
        subject: "Web Development",
        department: "BCA",
        room: "205"
    },

    {
        time: "11:00 AM",
        subject: "Principles of Management",
        department: "BBA",
        room: "201"
    },

    {
        time: "12:00 PM",
        subject: "Financial Accounting",
        department: "B.Com",
        room: "301"
    },

    {
        time: "02:00 PM",
        subject: "English Literature",
        department: "English",
        room: "403"
    }

];


const events = [

    {
        name: "Inter-Collegiate Hackathon 2026",
        date: "Coming Soon",
        venue: "C.B. Bhandari Jain College",
        icon: "💻"
    },

    {
        name: "AI Debate Competition",
        date: "28th",
        venue: "Room 206",
        icon: "🎤"
    },

    {
        name: "Folk Song & Dance Competition",
        date: "30/09/2026",
        venue: "College Auditorium",
        icon: "🎭"
    },

    {
        name: "Digital Cell Workshop",
        date: "Coming Soon",
        venue: "College Campus",
        icon: "🚀"
    }

];


const faculty = [

    {
        name: "BCA Faculty",
        department: "BCA",
        subject: "Computer Applications",
        icon: "👨‍💻"
    },

    {
        name: "BBA Faculty",
        department: "BBA",
        subject: "Management & Business",
        icon: "👩‍💼"
    },

    {
        name: "B.Com Faculty",
        department: "B.Com",
        subject: "Commerce & Accounting",
        icon: "👨‍🏫"
    },

    {
        name: "Kannada Faculty",
        department: "Kannada",
        subject: "Kannada Language & Literature",
        icon: "📚"
    },

    {
        name: "English Faculty",
        department: "English",
        subject: "English Language & Literature",
        icon: "📖"
    }

];


const rooms = [

    {
        room: "204",
        location: "BCA Block",
        floor: "2nd Floor",
        status: "Academic Room"
    },

    {
        room: "205",
        location: "BCA Block",
        floor: "1st Floor",
        status: "Academic Room"
    },

    {
        room: "301",
        location: "BBA Block",
        floor: "3rd Floor",
        status: "BBA Classroom"
    },

    {
        room: "304",
        location: "Commerce Block",
        floor: "3rd Floor",
        status: "B.Com Classroom"
    },

    {
        room: "Auditorium",
        location: "Main Campus",
        floor: "Fifth Floor",
        status: "Events"
    }

];


const notices = [

    {
        title: "Hackathon Registration",
        text: "Registration information for the Inter-Collegiate Hackathon will be announced here.",
        icon: "💻"
    },

    {
        title: "Digital Cell",
        text: "Students can check this section for upcoming Digital Cell activities.",
        icon: "📱"
    },

    {
        title: "College Events",
        text: "Check the Events section for upcoming competitions and activities.",
        icon: "🎉"
    }

];


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active-page");

        });


    document
        .getElementById(pageId)
        .classList.add("active-page");


    document
        .querySelectorAll(".nav")
        .forEach(button => {

            button.classList.remove("active");

        });


    const buttons =
        document.querySelectorAll(".nav");


    buttons.forEach(button => {

        if (
            button.getAttribute("onclick")
                .includes(pageId)
        ) {

            button.classList.add("active");

        }

    });

}


/* =========================================
   DASHBOARD
========================================= */

function loadDashboard() {

    const today =
        document.getElementById("todayClasses");


    today.innerHTML = "";


    timetable.slice(0, 3).forEach(item => {

        today.innerHTML += `

            <div class="class-item">

                <div>

                    <strong>
                        ${item.subject}
                    </strong>

                    <small>
                        ${item.department}
                    </small>

                </div>

                <strong>
                    ${item.time}
                </strong>

            </div>

        `;

    });


    const eventContainer =
        document.getElementById(
            "dashboardEvents"
        );


    eventContainer.innerHTML = "";


    events.slice(0, 3).forEach(event => {

        eventContainer.innerHTML += `

            <div class="class-item">

                <div>

                    <strong>
                        ${event.icon}
                        ${event.name}
                    </strong>

                    <small>
                        ${event.venue}
                    </small>

                </div>

                <strong>
                    ${event.date}
                </strong>

            </div>

        `;

    });

}


/* =========================================
   TIMETABLE
========================================= */

function loadTimetable() {

    const container =
        document.getElementById(
            "timetableData"
        );


    container.innerHTML = "";


    timetable.forEach(item => {

        container.innerHTML += `

            <tr>

                <td>
                    <strong>
                        ${item.time}
                    </strong>
                </td>

                <td>
                    ${item.subject}
                </td>

                <td>
                    ${item.department}
                </td>

                <td>
                    ${item.room}
                </td>

            </tr>

        `;

    });

}


/* =========================================
   COURSES
========================================= */

function loadCourses() {

    const container =
        document.getElementById(
            "courseCards"
        );


    container.innerHTML = "";


    departments.forEach(department => {

        container.innerHTML += `

            <div class="card">

                <div class="card-icon">
                    ${department.icon}
                </div>

                <h3>
                    ${department.name}
                </h3>

                <p>
                    ${department.description}
                </p>

                <span class="badge">
                    Rooms: ${department.rooms}
                </span>

            </div>

        `;

    });

}


/* =========================================
   EVENTS
========================================= */

function loadEvents() {

    const container =
        document.getElementById(
            "eventCards"
        );


    container.innerHTML = "";


    events.forEach(event => {

        container.innerHTML += `

            <div class="card">

                <div class="card-icon">
                    ${event.icon}
                </div>

                <h3>
                    ${event.name}
                </h3>

                <p>
                    📅 ${event.date}
                    <br>
                    📍 ${event.venue}
                </p>

                <span class="badge">
                    Upcoming
                </span>

            </div>

        `;

    });

}


/* =========================================
   FACULTY
========================================= */

function loadFaculty() {

    const container =
        document.getElementById(
            "facultyCards"
        );


    container.innerHTML = "";


    faculty.forEach(person => {

        container.innerHTML += `

            <div class="card">

                <div class="card-icon">
                    ${person.icon}
                </div>

                <h3>
                    ${person.name}
                </h3>

                <p>
                    Department:
                    ${person.department}
                    <br><br>

                    Subject:
                    ${person.subject}
                </p>

            </div>

        `;

    });

}


/* =========================================
   ROOMS
========================================= */

function loadRooms() {

    const container =
        document.getElementById(
            "roomCards"
        );


    container.innerHTML = "";


    rooms.forEach(room => {

        container.innerHTML += `

            <div class="card">

                <div class="card-icon">
                    📍
                </div>

                <h3>
                    Room ${room.room}
                </h3>

                <p>

                    Location:
                    ${room.location}

                    <br>

                    Floor:
                    ${room.floor}

                    <br>

                    Purpose:
                    ${room.status}

                </p>

                <span class="badge">
                    View Location
                </span>

            </div>

        `;

    });

}


/* =========================================
   NOTICES
========================================= */

function loadNotices() {

    const container =
        document.getElementById(
            "noticeCards"
        );


    container.innerHTML = "";


    notices.forEach(notice => {

        container.innerHTML += `

            <div class="card">

                <div class="card-icon">
                    ${notice.icon}
                </div>

                <h3>
                    ${notice.title}
                </h3>

                <p>
                    ${notice.text}
                </p>

                <span class="badge">
                    Notice
                </span>

            </div>

        `;

    });

}


/* =========================================
   AI ASSISTANT
========================================= */

function handleEnter(event) {

    if (event.key === "Enter") {

        sendQuestion();

    }

}


function askQuestion(question) {

    document.getElementById(
        "question"
    ).value = question;


    sendQuestion();

}


function sendQuestion() {

    const input =
        document.getElementById(
            "question"
        );


    const question =
        input.value.trim();


    if (!question) {

        return;

    }


    addMessage(
        question,
        "user"
    );


    input.value = "";


    setTimeout(() => {

        const answer =
            generateAnswer(question);


        addMessage(
            answer,
            "ai"
        );

    }, 500);

}


function addMessage(text, type) {

    const container =
        document.getElementById(
            "chatMessages"
        );


    const message =
        document.createElement("div");


    message.className =
        `message ${type}`;


    message.innerHTML =
        text;


    container.appendChild(message);


    container.scrollTop =
        container.scrollHeight;

}


/* =========================================
   SIMPLE AI KNOWLEDGE ENGINE
========================================= */

function generateAnswer(question) {

    const q =
        question.toLowerCase();


    /* BBA */

    if (
        q.includes("bba") ||
        q.includes("business administration")
    ) {

        return `
            💼 <strong>BBA Department</strong>
            <br><br>
            The BBA department is associated
            with rooms 201, 202 and 203.
            <br><br>
            The department focuses on management,
            marketing, finance and entrepreneurship.
        `;

    }


    /* BCA */

    if (
        q.includes("bca")
    ) {

        return `
            💻 <strong>BCA Department</strong>
            <br><br>
            BCA rooms include 203, 204 and 205.
            <br><br>
        Room 206     is also used for Digital
            Cell activities and events.
        `;

    }


    /* B.COM */

    if (
        q.includes("b.com") ||
        q.includes("bcom") ||
        q.includes("commerce")
    ) {

        return `
            📊 <strong>B.Com Department</strong>
            <br><br>
            B.Com classrooms include rooms
            204, 205 and 206.
        `;

    }


    /* ROOM */

    if (
        q.includes("room 205") ||
        q.includes("205")
    ) {

        return `
            📍 <strong>Room 205</strong>
            <br><br>
            BCA Block
            <br>
            2nd Floor
            <br><br>
            It can also be used for Digital Cell
            activities and events.
        `;

    }


    if (
        q.includes("room 204") ||
        q.includes("204")
    ) {

        return `
            📍 <strong>Room 204</strong>
            <br><br>
            BCA Block
            <br>
            2nd Floor
            <br><br>
            Database Management class is scheduled
            here in the sample timetable.
        `;

    }


    /* CLASSES */

    if (
        q.includes("class") ||
        q.includes("timetable") ||
        q.includes("today")
    ) {

        return `
            📅 <strong>Today's sample timetable</strong>
            <br><br>

            09:00 AM — Database Management — Room 204
            <br>
            10:00 AM — Web Development — Room 205
            <br>
            11:00 AM — Principles of Management — Room 201
        `;

    }


    /* EVENTS */

    if (
        q.includes("event") ||
        q.includes("competition") ||
        q.includes("hackathon")
    ) {

        return `
            🎉 <strong>Upcoming Events</strong>
            <br><br>

            💻 Inter-Collegiate Hackathon 2026
            <br>
            🎤 AI Debate Competition
            <br>
            🎭 Folk Song & Dance Competition
            <br>
            🚀 Digital Cell Workshop
        `;

    }


    /* FACULTY */

    if (
        q.includes("faculty") ||
        q.includes("teacher") ||
        q.includes("professor")
    ) {

        return `
            👨‍🏫 <strong>Faculty Directory</strong>
            <br><br>

            BCA — Computer Applications Faculty
            <br>
            BBA — Management & Business Faculty
            <br>
            B.Com — Commerce & Accounting Faculty
            <br>
            Kannada — Kannada Faculty
            <br>
            English — English Faculty
        `;

    }


    /* LIBRARY */

    if (
        q.includes("library")
    ) {

        return `
            📚 The college library can be added
            to the Campus Directory.
            <br><br>
            Once you give me the actual library
            location, I can add it to the database.
        `;

    }


    /* GREETING */

    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("hey")
    ) {

        return `
            👋 Hello!
            <br><br>
            I'm your C.B. Bhandari Jain College
            Student Life Assistant.
            <br><br>
            Ask me about BCA, BBA, B.Com,
            rooms, classes, faculty or events.
        `;

    }


    /* DEFAULT */

    return `
        🤔 I don't have that information yet.

        <br><br>

        Try asking:

        <br><br>

        • Where is BBA?
        <br>
        • What classes do I have today?
        <br>
        • What events are coming up?
        <br>
        • Who teaches BCA?
        <br>
        • Where is Room 306?
    `;

}


/* =========================================
   START APPLICATION
========================================= */

loadDashboard();

loadTimetable();

loadCourses();

loadEvents();

loadFaculty();

loadRooms();

loadNotices();