let totalJobs = document.getElementById ("total-jobs")
let totalJobs2 = document.getElementById ("total-jobs2")
let jobLists = document.getElementById ("job-lists")
let totalJobsCount = jobLists.childElementCount
totalJobs.innerText = totalJobsCount;
totalJobs2.innerText = totalJobsCount;

let totalInterview = document.getElementById ("total-interview ")
let totalReject = document.getElementById ("total-reject")

const allBtn = document.getElementById('all-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectBtn = document.getElementById('reject-btn')

function toggleStyle (id){
    allBtn.classList.remove("bg-white")
    interviewBtn.classList.remove("bg-white")
    rejectBtn.classList.remove("bg-white")
    
    allBtn.classList.add("bg-white")
    rejectBtn.classList.add("bg-white")
    interviewBtn.classList.add("bg-white")

    const selected = document.getElementById(id)

    selected.classList.remove("bg-white")
    selected.classList.add("bg-blue-400")}

const delateBtn = document

 


