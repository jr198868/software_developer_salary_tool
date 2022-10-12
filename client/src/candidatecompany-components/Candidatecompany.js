import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import * as d3 from 'd3';
import companylist from './assets/unicorn_without_whiteboard.csv';
import Box from '@mui/material/Box';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'CompanyName',
    headerName: 'Company Name',
    width: 200,
  },
  {
    field: 'Location',
    headerName: 'Location',
    width: 300,
  },
  {
    field: 'InterviewDescription',
    headerName: 'Interview Description',
    width: 1500,
    editable: true,
  },
];



const rows = [
{id: 1, CompanyName: "Stripe", Location:"San Francisco/Seattle/Remote ", InterviewDescription: "Programming/debugging phone screen and on site with your own laptop/setup and full access to internet systems design discussion and talk with hiring manager about team alignment"},
{id: 2, CompanyName: "Instacart",Location:"San Francisco",InterviewDescription:"Take-home real world project  pair programming on-site"},
{id: 3, CompanyName: "Airtable",Location:"San Francisco/Austin/Mountain View/New York/Remote ",InterviewDescription:"Take home project that resembles a problem Airtable solves for. Five hour on-site which includes a discussion of the project  UI design discussing architectural tradeoffs and code debugging."},
{id: 4, CompanyName:"Ramp",Location:"New York",InterviewDescription:"Phone interview on a basic applied problem followed by 2-3 onsite programming interviews that test practical day-to-day software skills."},
{id: 5, CompanyName: "Automattic",Location:"Remote ",InterviewDescription:"Short take-home code test then a part-time paid project."},
{id: 6, CompanyName: "Gemini",Location:"New York",InterviewDescription:"Phone chat. Take-home project discussion on-site. Questions on prior experiences and culture fit"},
{id: 7, CompanyName: "Checkr",Location:"San Francisco/Denver/Orlando/Remote ",InterviewDescription:"1 hour CoderPad problem  if pass  then four 1 hour interviews: API Design using your computer and languages Refactoring in language of your choice Object Design (no coding) System Architecture (no coding) and sometimes a 30 minute manager chat [read more](https://medium.com/checkr/an-engineers-guide-to-interviewing-at-checkr-fc28f9e8014b)"},
{id: 8, CompanyName: "Monzo",Location:"London/Remote ",InterviewDescription:"Phone interview with another engineer. Take-home assignment. Call to debrief on take-home assignment. Half-day interview (on-site or Hangouts) with three conversational sessions: (1) building on take-home test & real-world system design (verbal and collaborative); (2) digging into knowledge & understanding in 1-2 other relevant technical areas; (3) general background teams and ways of working."},
{id: 9, CompanyName: "Webflow",Location:"San Francisco/ Remote ",InterviewDescription:"Short take-home challenge followed by a paid 3-5 day freelance contract project"},
{id: 10,CompanyName: "LaunchDarkly",Location:"Oakland",InterviewDescription:"Informational phone screen with Eng leadership take home project onsite interviews"},
{id: 11,CompanyName: "Lattice",Location:"San Francisco/New York/ Remote ",InterviewDescription:"Technical exercises based on work we do at Lattice discussion of a new architecture to solve a real world problem"},
{id: 12,CompanyName:"Remote",Location:"Remote ",InterviewDescription:"Call with a recruiter (if needed) call with manager code exercise call with team."},
{id: 13,CompanyName: "Sourcegraph",Location:"San Francisco/Remote ",InterviewDescription:"Tailored to the candidate often consists of take-home work discussion of real-world eng challenges and product familiarity."},
{id: 14,CompanyName: "Fetch Rewards",Location:"Remote ",InterviewDescription:"Short take-home project. 50 min screening interview that includes discussion of project. 5.5 hr (w/ breaks) final interview that involves speaking with your future manager and a non-technical product manager a real-world coding problem and high-level and low-level system design problems."},
{id: 15,CompanyName:"Avant",Location:"Chicago",InterviewDescription:"Pair programming interviews."},
{id: 16,CompanyName:"Netlify",Location:"San Francisco/Remote ",InterviewDescription:"Takehome project and online/onsite discussion"},
{id: 17,CompanyName: "CircleCI",Location:"San Francisco/Remote ",InterviewDescription:"Take-home project and discussion followed by on-site interview that includes pair programming on actual CircleCI bugs/feature requests."},
{id: 18,CompanyName: "Extend",Location:"San Francisco/Dallas/Remote ",InterviewDescription:"Phone call a take home project similar to making a PR at work then a meet & greet with the team."},
{id: 19,CompanyName:"HomeLight",Location:"San Francisco/Scottsdale/Seattle",InterviewDescription:"Phone screen take home that is close to production code onsite with pair programming"},
{id: 20,CompanyName: "Loom",Location:"San Francisco",InterviewDescription:"Google Hangouts resume dive on past experience take-home project OR architectural phone screen on-site interviews (2 technical architecture related to work 1 or 2 non-technical)"},
{id: 21,CompanyName: "Komodo Health",Location:"Tel Aviv",InterviewDescription:"Phone screening to discuss technical background and past experience. Take-home assignment followed by on-site code review and interview. Cultural fit assessment"},
{id: 22,CompanyName: "Kong",Location:"San Francisco",InterviewDescription:"Phone interview. Pairing and technical interviews. Take home assigment."},
{id: 23,CompanyName: "Betterment",Location:"New York",InterviewDescription:"Phone interview followed by on-site pair programming to simulate a Betterment feature build."},
{id: 24,CompanyName: "CloudBees",Location:"Remote ",InterviewDescription:"Multiple interviews discussion of technical background and experiences."},
{id: 25,CompanyName: "VTS",Location:"New York City",InterviewDescription:"Technical Phone Screen Pair programming on-site & in-person talks with multiple engineers"},
{id: 26,CompanyName: "Omada Health",Location:"San Francisco",InterviewDescription:"Take home exercise and/or pair programming session."},
{id: 27,CompanyName: "Persona",Location:"San Francisco",InterviewDescription:" Tech interview (technical background and experiences), pair programming, and culture fit"},
]

export default function DataGridDemo() {
  
  var rowsmap = new Map();
  var newdata = []
  d3.csv(companylist, (data) => {
    var newdata = Object.assign([], data)
        
 
    
  //     rowsmap['id'] = data['id'];
  //     rowsmap['Company Name'] = data['Company Name'];
  //     rowsmap['Location'] = data['Location'];
  //     rowsmap['Interview Description'] = data['Interview Description'];

  //     //console.log(rows)
})

  return (
    <div style={{  height: '100%', width: '100%' }}>
    <Box sx={{ height: 1000, width: '100%' }}> 
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
    </div>
  );





}










