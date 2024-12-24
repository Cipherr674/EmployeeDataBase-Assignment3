const express = require('express');
const router = express.Router();



const data = 
[
        { "EmployeeName": "John Doe", "EmployeeDesignation": "Software Engineer", "EmployeeLocation": "New York", "Salary": 80000 },
        { "EmployeeName": "Jane Smith", "EmployeeDesignation": "Product Manager", "EmployeeLocation": "San Francisco", "Salary": 95000 },
        { "EmployeeName": "Arun Kumar", "EmployeeDesignation": "Data Scientist", "EmployeeLocation": "Bangalore", "Salary": 75000 },
        { "EmployeeName": "Emily Davis", "EmployeeDesignation": "UX Designer", "EmployeeLocation": "London", "Salary": 72000 },
        { "EmployeeName": "Carlos Rodriguez", "EmployeeDesignation": "DevOps Engineer", "EmployeeLocation": "Toronto", "Salary": 85000 },
        { "EmployeeName": "Wei Zhang", "EmployeeDesignation": "AI Researcher", "EmployeeLocation": "Beijing", "Salary": 98000 },
        { "EmployeeName": "Sophia Brown", "EmployeeDesignation": "Content Strategist", "EmployeeLocation": "Berlin", "Salary": 68000 },
        { "EmployeeName": "Liam Johnson", "EmployeeDesignation": "Full Stack Developer", "EmployeeLocation": "Sydney", "Salary": 78000 },
        { "EmployeeName": "Mia Clark", "EmployeeDesignation": "HR Manager", "EmployeeLocation": "Mumbai", "Salary": 64000 },
        { "EmployeeName": "Ethan Turner", "EmployeeDesignation": "Cybersecurity Analyst", "EmployeeLocation": "Washington D.C.", "Salary": 87000 }
    ];



    function employeeroutes(nav) {
        router.get('/data', (req, res) => {
            res.render("home", {
                title: '',
                data,
                nav
            });
        });
    
        router.get('/form', (req, res) => {
            res.render("form", {
                nav
            });
        });
    
        router.post('/add', (req, res) => {
            console.log(req.body);
            data.push(req.body);
            res.redirect('/server/data')
        })
    
        router.get('/edit/:index', (req, res) => {
            const index = req.params.index;
            const employee = data[index];
            res.render("updateForm", { nav, employee, employeeIndex: index }); 
        });
    
        router.post('/update/:index', (req, res) => {
            const index = req.params.index;//get the index from the request
            console.log(req.body); 
            data[index] = req.body; // Update the employee data
            res.redirect('/server/data'); 
        });
    
        router.post('/delete/:index', (req, res) => {
            const index = req.params.index;
            data.splice(index, 1); 
            res.redirect('/server/data'); 
        });
    
        return router;
    }
    
    module.exports = employeeroutes;
