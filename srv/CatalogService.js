module.exports = srv => {
    srv.after("READ","Courses", (records) => {
        const newRecords = [];
        records.forEach(element => {
            if(element.method === "Online"){
                element.course_name = "[discount 15%]" + element.course_name;
            }
            newRecords.push(records);
        });
        console.log(newRecords);
        return newRecords;
    });
}