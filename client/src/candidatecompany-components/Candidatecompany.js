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
{id: 2, CompanyName:"Instacart",Location:"San Francisco",InterviewDescription:"Take-home real world project  pair programming on-site"},
{id: 3, CompanyName:"Revolut",Location:"London",InterviewDescription:"Take-home exercise reflecting day-to-day work technical interview via hangouts or on-site."},
{id: 4, CompanyName:"Airtable",Location:"San Francisco/Austin/Mountain View/New York/Remote ",InterviewDescription:"Take home project that resembles a problem Airtable solves for. Five hour on-site which includes a discussion of the project  UI design discussing architectural tradeoffs and code debugging."},
{id: 5, CompanyName:"Snyk",Location:"London",InterviewDescription:"Take home task then a pair coding on it"},
{id: 6, CompanyName:"Tipalti",Location:"Glil-Yam",InterviewDescription:"Real-world design and coding challenges"},
{id: 7, CompanyName:"Ramp",Location:"New York",InterviewDescription:"Phone interview on a basic applied problem followed by 2-3 onsite programming interviews that test practical day-to-day software skills."},
{id:8,CompanyName:"Razorpay",Location:"Bangalore",InterviewDescription:"Phone screen On-site pair programming and occasionally a take home project."},
{id:9,CompanyName:"Automattic",Location:"Remote ",InterviewDescription:"Short take-home code test then a part-time paid project."},
{id:10,CompanyName:"Gemini",Location:"New York",InterviewDescription:"Phone chat. Take-home project discussion on-site. Questions on prior experiences and culture fit"},
{id:11,CompanyName:"Doctolib",Location:"Paris",InterviewDescription:"Take-home project  on-site interview and work half a day with one of our feature team"},
{id:12,CompanyName:"Checkr",Location:"San Francisco/Denver/Orlando/Remote ",InterviewDescription:"1 hour CoderPad problem  if pass  then four 1 hour interviews: API Design using your computer and languages Refactoring in language of your choice Object Design (no coding) System Architecture (no coding) and sometimes a 30 minute manager chat [read more](https://medium.com/checkr/an-engineers-guide-to-interviewing-at-checkr-fc28f9e8014b)"},
{id:13,CompanyName:"Monzo",Location:"London/Remote ",InterviewDescription:"Phone interview with another engineer. Take-home assignment. Call to debrief on take-home assignment. Half-day interview (on-site or Hangouts) with three conversational sessions: (1) building on take-home test & real-world system design (verbal and collaborative); (2) digging into knowledge & understanding in 1-2 other relevant technical areas; (3) general background teams and ways of working."},
{id:14,CompanyName:"Zapier",Location:"Remote ",InterviewDescription:"Recruiter interview take-home project code review of the take-home project technical discussions with hiring manager and engineers from the team values interview."},
{id:15,CompanyName:"Clubhouse",Location:"New York/Remote ",InterviewDescription:"Phone interview followed by onsite discussions and pair programming"},
{id:16,CompanyName:"BrowserStack",Location:"Mumbai",InterviewDescription:"Initial phone screen with semi-technical questions two 2-hour assignments based on real problems solved in company (allowed to lookup internet) final interview with EMs/Director."},
{id:17,CompanyName:"Webflow",Location:"San Francisco/ Remote ",InterviewDescription:"Short take-home challenge followed by a paid 3-5 day freelance contract project"},
{id:18,CompanyName:"Articulate",Location:"Remote ",InterviewDescription:"Take-home project & pair program on a problem similar to daily work"},
{id:19,CompanyName:"Contentful",Location:"San Francisco",InterviewDescription:"Multiple interviews discussion of technical background & live coding challenge (you can use the internet)."},
{id:20,CompanyName:"LaunchDarkly",Location:"Oakland",InterviewDescription:"Informational phone screen with Eng leadership take home project onsite interviews"},
{id:21,CompanyName:"Lattice",Location:"San Francisco/New York/ Remote ",InterviewDescription:"Technical exercises based on work we do at Lattice discussion of a new architecture to solve a real world problem"},
{id:22,CompanyName:"Remote",Location:"Remote ",InterviewDescription:"Call with a recruiter (if needed) call with manager code exercise call with team."},
{id:23,CompanyName:"ContentSquare",Location:"Paris",InterviewDescription:"Real-world challenges with open discussions."},
{id:24,CompanyName:"Sourcegraph",Location:"San Francisco/Remote ",InterviewDescription:"Tailored to the candidate often consists of take-home work discussion of real-world eng challenges and product familiarity."},
{id:25,CompanyName:"Fetch Rewards",Location:"Remote ",InterviewDescription:"Short take-home project. 50 min screening interview that includes discussion of project. 5.5 hr (w/ breaks) final interview that involves speaking with your future manager and a non-technical product manager a real-world coding problem and high-level and low-level system design problems."},
{id:26,CompanyName:"Algolia",Location:"San Francisco",InterviewDescription:"Takehome project & Onsite discussions and presentation"},
{id:27,CompanyName:"Bitso",Location:"Remote ",InterviewDescription:"Intro phone or hangouts/skype call with People team take home project followed by walkthrough of your code and some tech questions focused on your experience founders video call with one of the founders"},
{id:28,CompanyName:"GoCardless",Location:"London",InterviewDescription:"Project to work at home general technical questions pair programming with engineers"},
{id:29,CompanyName:"Avant",Location:"Chicago",InterviewDescription:"Pair programming interviews."},
{id:30,CompanyName:"Netlify",Location:"San Francisco/Remote ",InterviewDescription:"Takehome project and online/onsite discussion"},
{id:31,CompanyName:"Lightricks",Location:"Jerusalem",InterviewDescription:"Initial interview Take home project discussion on-site"},
{id:32,CompanyName:"CircleCI",Location:"San Francisco/Remote ",InterviewDescription:"Take-home project and discussion followed by on-site interview that includes pair programming on actual CircleCI bugs/feature requests."},
{id:33,CompanyName:"Extend",Location:"San Francisco/Dallas/Remote ",InterviewDescription:"Phone call a take home project similar to making a PR at work then a meet & greet with the team."},
{id:34,CompanyName:"HomeLight",Location:"San Francisco/Scottsdale/Seattle",InterviewDescription:"Phone screen take home that is close to production code onsite with pair programming"},
{id:35,CompanyName:"Loom",Location:"San Francisco",InterviewDescription:"Google Hangouts resume dive on past experience take-home project OR architectural phone screen on-site interviews (2 technical architecture related to work 1 or 2 non-technical)"},
{id:36,CompanyName:"K Health",Location:"Tel Aviv",InterviewDescription:"Phone screening to discuss technical background and past experience. Take-home assignment followed by on-site code review and interview. Cultural fit assessment"},
{id:37,CompanyName:"Persona",Location:"San Francisco",InterviewDescription:"Tech interview (technical background and experiences) pair programming and culture fit"},
{id:38,CompanyName:"Olist",Location:"Curitiba",InterviewDescription:"Take-home project and remote or on-site interviews"},
{id:39,CompanyName:"Kong",Location:"San Francisco",InterviewDescription:"Phone interview. Pairing and technical interviews. Take home assigment."},
{id:40,CompanyName:"Betterment",Location:"New York",InterviewDescription:"Phone interview followed by on-site pair programming to simulate a Betterment feature build."},
{id:41,CompanyName:"CloudBees",Location:"Remote ",InterviewDescription:"Multiple interviews discussion of technical background and experiences."},
{id:42,CompanyName:"VTS",Location:"New York City",InterviewDescription:"Technical Phone Screen Pair programming on-site & in-person talks with multiple engineers"},
{id:43,CompanyName:"The Zebra",Location:"Austin",InterviewDescription:"Take-home coding challenge with in-person review and pair programming."},
{id:44,CompanyName:"Mux",Location:"San Francisco/Remote ",InterviewDescription:"Hands-on software engineer and system-design interviews that focus on collaboratively building practical applications at scale."},
{id:45,CompanyName:"Lydia",Location:"Paris",InterviewDescription:"Mini take-home project phone interview discussion on-site"},
{id:46,CompanyName:"Omada Health",Location:"San Francisco",InterviewDescription:"Take home exercise and/or pair programming session."},
{id:47,CompanyName:"RapidAPI",Location:"San Francisco",InterviewDescription:"Take home assignment and discussion before/afterwards"},

  
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















// const columns = [
//   {field:'id',headerName:'id',width: 120 , align:"center"},
//   {field:'sample',headerName:'sample',width: 120 , align:"center"},
//   {field:'HJURP-1E/G:(T->C)',headerName:'HJURP-1E/G:(T->C)',width: 200 , align:'center'},
//   {field:'HMMR-1V/A:(C->T)',headerName:'HMMR-1V/A:(C->T)',width: 200 , align:'center'},
//   ];


//   function createData(miHA, Per_threshold, Average_threshold, Average) {
//     return {miHA, Per_threshold, Average_threshold, Average};
//   }



// export default function Recipientmiha() {
//   const [value, setValue] = React.useState('1');
//   const [rows_state, setRows] = useState([]);

//   useEffect(() => {
//     d3.csv(without, (data) => {
//       setRows(data)
//     })
//   },[])



//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };


//   return (
    
//     <div style={{  height: '100%', width: '100%' }}>

//       <Box sx={{ width: '100%', typography: 'body1' }}>
//         <TabContext value={value}>
//             <TabPanel value="1" style={{ height: 1000}}>
//                 <DataGrid
//                   rows={rows_state}
//                   columns={columns}
//                   pageSize={30}
//                   rowsPerPageOptions={[30]}
//                   rowHeight={40}
//                   style={{fontSize: 16}}
//                 />
//             </TabPanel>

//         </TabContext>
//       </Box>
//     </div>
//   );
// }