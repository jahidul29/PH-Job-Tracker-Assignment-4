let totalJobs = document.getElementById ("total-jobs")
let totalJobs2 = document.getElementById ("total-jobs2")
let jobLists = document.getElementById ("job-lists")
let totalJobsCount = jobLists.childElementCount
totalJobs.innerText = totalJobsCount;
totalJobs2.innerText = totalJobsCount;

let interviewList = document.getElementById ('interview-tab')

let totalInterview = document.getElementById ("total-interview ")
let totalReject = document.getElementById ("total-reject")

const allBtn = document.getElementById('all-btn')
const interviewBtn = document.getElementById('interview-btn')
const rejectBtn = document.getElementById('reject-btn')
const interviewTab = document.getElementById("interview-tab")
const rejectTab = document.getElementById("reject-tab")

function toggleStyle (id){
    allBtn.classList.remove("bg-white")
    interviewBtn.classList.remove("bg-white")
    rejectBtn.classList.remove("bg-white")
    
    allBtn.classList.add("bg-white")
    rejectBtn.classList.add("bg-white")
    interviewBtn.classList.add("bg-white")

    const selected = document.getElementById(id)

    currentStatus = id

    selected.classList.remove("bg-white")
    selected.classList.add("bg-blue-400")

    jobLists.classList.add('hidden')
    interviewTab.classList.add('hidden')
    rejectTab.classList.add('hidden')

    if (id === 'all-btn'){
        jobLists.classList.remove('hidden')
    } else if (id === 'interview-btn'){
        interviewTab.classList.remove('hidden')
    } else if ( id === 'reject-btn'){
        rejectTab.classList.remove('hidden')
    }}

const delateBtn = document

// const jobLists = document.getElementById('job-lists')

jobLists.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;

    if(event.target.classList.contains('apply-interview-btn')) {
        const jobCardNode = event.target.parentNode.parentNode;
        const statusElement = jobCardNode.querySelector('.status');

        statusElement.innerText = 'Interview';
        statusElement.classList.add('text-green-600')}
        
    if(event.target.classList.contains('apply-reject-btn')) {
        const jobCardNode = event.target.parentNode.parentNode;
        const statusElement = jobCardNode.querySelector('.status');

        statusElement.innerText = 'Reject';
        statusElement.classList.add('text-red-600')}  
        
    if (event.target.classList.contains('dlt-btn')){
        const deleteBtn = event.target.parentNode.parentNode;
        const deleteElement = deleteBtn.querySelector('dlt-btn');

        deleteElement.classList.add('hidden')

    }
})



 


