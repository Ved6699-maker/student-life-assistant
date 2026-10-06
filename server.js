const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;


/* =====================================
   MIDDLEWARE
===================================== */

app.use(express.json());


/* =====================================
   SERVE FRONTEND
===================================== */

app.use(
    express.static(
        path.join(__dirname, "..")
    )
);


/* =====================================
   DATA DIRECTORY
===================================== */

const DATA_DIR =
    path.join(
        __dirname,
        "..",
        "data"
    );


/* =====================================
   READ JSON FILE
===================================== */

function readJSON(filename) {

    const filePath =
        path.join(
            DATA_DIR,
            filename
        );


    try {

        const data =
            fs.readFileSync(
                filePath,
                "utf8"
            );


        return JSON.parse(data);

    }

    catch(error) {

        console.error(
            "Error reading:",
            filename,
            error
        );


        return [];

    }

}


/* =====================================
   API — STUDENTS
===================================== */

app.get(
    "/api/students",
    (req, res) => {

        const students =
            readJSON(
                "students.json"
            );


        res.json(students);

    }
);


/* =====================================
   API — FACULTY
===================================== */

app.get(
    "/api/faculty",
    (req, res) => {

        const faculty =
            readJSON(
                "faculty.json"
            );


        res.json(faculty);

    }
);


/* =====================================
   API — ROOMS
===================================== */

app.get(
    "/api/rooms",
    (req, res) => {

        const rooms =
            readJSON(
                "rooms.json"
            );


        res.json(rooms);

    }
);


/* =====================================
   API — EVENTS
===================================== */

app.get(
    "/api/events",
    (req, res) => {

        const events =
            readJSON(
                "events.json"
            );


        res.json(events);

    }
);


/* =====================================
   API — TIMETABLE
===================================== */

app.get(
    "/api/timetable",
    (req, res) => {

        const timetable =
            readJSON(
                "timetable.json"
            );


        res.json(timetable);

    }
);


/* =====================================
   AI / CAMPUS ASSISTANT
===================================== */

app.post(
    "/api/assistant",
    (req, res) => {

        const question =
            String(
                req.body.question || ""
            )
            .toLowerCase()
            .trim();


        if (!question) {

            return res.json({
                answer:
                    "Please enter a question."
            });

        }


        const students =
            readJSON(
                "students.json"
            );


        const faculty =
            readJSON(
                "faculty.json"
            );


        const rooms =
            readJSON(
                "rooms.json"
            );


        const events =
            readJSON(
                "events.json"
            );


        const timetable =
            readJSON(
                "timetable.json"
            );


        /* ==========================
           BBA
        ========================== */

        if (
            question.includes("bba")
        ) {

            return res.json({

                answer:
                    "💼 <b>BBA Department</b> " +
                    "is located in the " +
                    "<b>Main Block, 2nd Floor.</b>"

            });

        }


        /* ==========================
           BCA
        ========================== */

        if (
            question.includes("bca")
        ) {

            const bcaFaculty =
                faculty
                    .filter(
                        person =>
                            person.department
                                .toLowerCase()
                                .includes("bca")
                    )
                    .map(
                        person =>
                            person.name
                    )
                    .join(", ");


            return res.json({

                answer:

                    "💻 <b>BCA Department</b> " +

                    "is located in the " +

                    "<b>BCA Block, 3rd Floor.</b>" +

                    "<br><br>" +

                    "Faculty: " +

                    (
                        bcaFaculty ||
                        "Faculty information unavailable."
                    )

            });

        }


        /* ==========================
           B.COM
        ========================== */

        if (
            question.includes("b.com") ||
            question.includes("bcom")
        ) {

            return res.json({

                answer:
                    "📊 <b>B.Com Department</b> " +
                    "is located in the " +
                    "<b>Main Block, 1st Floor.</b>"

            });

        }


        /* ==========================
           EVENTS
        ========================== */

        if (
            question.includes("event") ||
            question.includes("hackathon") ||
            question.includes("debate") ||
            question.includes("workshop")
        ) {

            const eventText =
                events
                    .map(
                        event =>

                            `<b>${event.name}</b>` +

                            ` — ${event.date}` +

                            `<br>`

                    )
                    .join("");


            return res.json({

                answer:

                    "🎉 <b>Upcoming Events</b>" +

                    "<br><br>" +

                    eventText

            });

        }


        /* ==========================
           TIMETABLE
        ========================== */

        if (
            question.includes("class") ||
            question.includes("timetable")
        ) {

            const classText =
                timetable
                    .slice(0, 8)
                    .map(
                        item =>

                            `${item.day}` +

                            ` — ${item.time}` +

                            ` — ${item.subject}` +

                            ` — Room ${item.room}` +

                            `<br>`

                    )
                    .join("");


            return res.json({

                answer:

                    "📅 <b>Timetable</b>" +

                    "<br><br>" +

                    classText

            });

        }


        /* ==========================
           ROOM SEARCH
        ========================== */

        const roomMatch =
            question.match(
                /room\s*(\d+)/i
            );


        if (roomMatch) {

            const roomNumber =
                roomMatch[1];


            const room =
                rooms.find(
                    item =>
                        String(item.room)
                        === roomNumber
                );


            if (room) {

                return res.json({

                    answer:

                        "📍 <b>Room " +
                        room.room +
                        "</b>" +

                        "<br><br>" +

                        "Building: " +
                        room.building +

                        "<br>" +

                        "Floor: " +
                        room.floor +

                        "<br>" +

                        "Type: " +
                        room.type +

                        "<br>" +

                        "Status: <b>" +
                        room.status +
                        "</b>"

                });

            }

        }


        /* ==========================
           LIBRARY
        ========================== */

        if (
            question.includes("library")
        ) {

            return res.json({

                answer:

                    "📚 The <b>Library</b> " +
                    "is located in the " +
                    "<b>Main Block, 1st Floor.</b>"

            });

        }


        /* ==========================
           FACULTY
        ========================== */

        if (
            question.includes("faculty") ||
            question.includes("teacher") ||
            question.includes("professor")
        ) {

            const names =
                faculty
                    .map(
                        person =>
                            person.name
                    )
                    .join(", ");


            return res.json({

                answer:

                    "👨‍🏫 Faculty members " +
                    "currently in the system:" +

                    "<br><br>" +

                    names

            });

        }


        /* ==========================
           STUDENTS
        ========================== */

        if (
            question.includes("student")
        ) {

            return res.json({

                answer:

                    "👨‍🎓 There are currently " +

                    `<b>${students.length}</b>` +

                    " student records " +

                    "in the system."

            });

        }


        /* ==========================
           DEFAULT
        ========================== */

        return res.json({

            answer:

                "🤖 I can help you with:" +

                "<br><br>" +

                "• BCA<br>" +

                "• BBA<br>" +

                "• B.Com<br>" +

                "• Timetable<br>" +

                "• Events<br>" +

                "• Faculty<br>" +

                "• Rooms<br>" +

                "• Library<br>" +

                "• Students<br><br>" +

                'Try asking <b>"Where is BBA?"</b>'

        });

    }
);


/* =====================================
   DEFAULT PAGE
===================================== */

app.get(
    "*",
    (req, res) => {

        res.sendFile(
            path.join(
                __dirname,
                "..",
                "index.html"
            )
        );

    }
);


/* =====================================
   START SERVER
===================================== */

app.listen(
    PORT,
    () => {

        console.log(
            "================================="
        );

        console.log(
            "CBJ Student Life Assistant"
        );

        console.log(
            "================================="
        );

        console.log(
            `Server running at:`
        );

        console.log(
            `http://localhost:${PORT}`
        );

        console.log(
            "================================="
        );

    }
);