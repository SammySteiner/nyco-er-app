import mockData from '../mock_data/MOCK_DATA.json';

const SITEMINDER = 'https://msdlvw-hhsces01.csc.nycnet/siteminderagent/forms/loginpages/wc/login.fcc'
const STEP_A = 'https://msdlvw-hhsces01.csc.nycnet/HHSWorkerConnectWeb/homePageRouter.jsp?agency=doitt' //GET
const STEP_B = 'https://msdlvw-hhsces01.csc.nycnet/HHSWorkerConnectWeb/getRouter.hhsc' // GET
const STEP_C = 'https://msdlvw-hhsces01.csc.nycnet/HHSWorkerConnectWeb/appmanager/hhs/hhsworkerconnect' //GET

export function login(params){

  var formDetails = {
    'user': params.user,
    'password': params.password,
    'agency': params.agency,
    'rememberMe':'false',
    'loginExe':'Sign In',
    'target':'/HHSWorkerConnectWeb/homePageRouter.jsp?agency=doitt',
    'users':'users',
    'smauthreason':'0'
  };
  const formBody = Object.keys(formDetails).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formDetails[key])).join('&');

  return fetch(SITEMINDER, {
      headers: {
      'Content-Type':'application/x-www-form-urlencoded',
    },
    method: 'POST',
    body: formBody
  })
  .then( res => {console.log(res)} )
}

export function search(){
  return mockData
}
